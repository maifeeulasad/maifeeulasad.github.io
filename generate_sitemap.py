#!/usr/bin/env python3
"""
Sitemap Generator for maifeeulasad.github.io

This script automatically generates a sitemap.xml file by scanning the website
directory for HTML files and important assets like resume PDFs.
"""

import os
import sys
from datetime import datetime
from pathlib import Path
import xml.etree.ElementTree as ET
from xml.dom import minidom
import re


class SitemapGenerator:
    def __init__(self, base_url="https://maifeeulasad.github.io", base_dir="."):
        self.base_url = base_url.rstrip('/')
        self.base_dir = Path(base_dir)
        self.urls = []
        
        # Define priority mappings
        self.priority_map = {
            'index.html': 1.0,  # Homepage
            'showcase': 0.9,    # Portfolio/showcase
            'resume': 0.8,      # Resume files
            'Bangladesh': 0.7,  # Special projects
            'gallery': 0.6,     # Gallery
            'default': 0.5      # Other pages
        }
        
        # Directories to exclude from sitemap
        self.exclude_dirs = {
            '.git', '.github', 'node_modules', '__pycache__',
            '.vscode', 'test'  # Excluding test directory
        }
        
        # Files to exclude
        self.exclude_files = {
            'gulpfile.js', 'package.json', 'pnpm-lock.yaml',
            'pnpm-workspace.yaml', 'generate_sitemap.py'
        }

    def get_priority(self, path_str):
        """Determine priority based on path."""
        path_lower = path_str.lower()
        
        if 'index.html' in path_lower and path_str.count('/') <= 1:
            return self.priority_map['index.html']
        elif 'showcase' in path_lower:
            return self.priority_map['showcase']
        elif 'resume' in path_lower:
            return self.priority_map['resume']
        elif 'bangladesh' in path_lower:
            return self.priority_map['Bangladesh']
        elif 'gallery' in path_lower:
            return self.priority_map['gallery']
        else:
            return self.priority_map['default']

    def should_exclude_path(self, path):
        """Check if path should be excluded."""
        path_parts = path.parts
        
        # Check if any part of the path is in exclude_dirs
        for part in path_parts:
            if part in self.exclude_dirs:
                return True
                
        # Check if filename is in exclude_files
        if path.name in self.exclude_files:
            return True
            
        return False

    def get_file_modification_time(self, file_path):
        """Get file modification time in ISO format."""
        try:
            mtime = os.path.getmtime(file_path)
            return datetime.fromtimestamp(mtime).strftime('%Y-%m-%dT%H:%M:%S+00:00')
        except:
            return datetime.now().strftime('%Y-%m-%dT%H:%M:%S+00:00')

    def find_latest_resume(self):
        """Find the most recent resume PDF."""
        resume_dir = self.base_dir / 'assets' / 'resume'
        if not resume_dir.exists():
            return None
            
        pdf_files = list(resume_dir.glob('*.pdf'))
        if not pdf_files:
            return None
            
        # Sort by modification time, get the most recent
        latest_resume = max(pdf_files, key=lambda f: f.stat().st_mtime)
        return latest_resume

    def scan_html_files(self):
        """Scan for all HTML files."""
        html_files = []
        
        for html_file in self.base_dir.rglob('*.html'):
            if self.should_exclude_path(html_file):
                continue
                
            # Convert to relative path from base directory
            rel_path = html_file.relative_to(self.base_dir)
            html_files.append(rel_path)
            
        return sorted(html_files)

    def create_url_entry(self, path, is_file=True):
        """Create a URL entry for the sitemap."""
        if is_file:
            # For files, use the full path
            if path.name == 'index.html' and len(path.parts) == 1:
                # Root index.html should map to base URL
                url = f"{self.base_url}/"
            else:
                url = f"{self.base_url}/{path.as_posix()}"
        else:
            # For directories with index.html, use directory URL
            url = f"{self.base_url}/{path.as_posix()}/"
            
        priority = self.get_priority(str(path))
        lastmod = self.get_file_modification_time(self.base_dir / path)
        
        return {
            'loc': url,
            'lastmod': lastmod,
            'priority': f"{priority:.2f}"
        }

    def generate_urls(self):
        """Generate all URLs for the sitemap."""
        self.urls = []
        
        # Add HTML files
        html_files = self.scan_html_files()
        
        for html_file in html_files:
            if html_file.name == 'index.html' and len(html_file.parts) > 1:
                # For index.html in subdirectories, add both file and directory URL
                dir_path = html_file.parent
                self.urls.append(self.create_url_entry(dir_path, is_file=False))
            else:
                self.urls.append(self.create_url_entry(html_file, is_file=True))
        
        # Add latest resume
        latest_resume = self.find_latest_resume()
        if latest_resume:
            resume_rel_path = latest_resume.relative_to(self.base_dir)
            self.urls.append(self.create_url_entry(resume_rel_path, is_file=True))
        
        # Remove duplicates and sort by priority (descending) then by URL
        seen_urls = set()
        unique_urls = []
        
        for url_entry in self.urls:
            if url_entry['loc'] not in seen_urls:
                seen_urls.add(url_entry['loc'])
                unique_urls.append(url_entry)
        
        # Sort by priority (descending) then by URL
        self.urls = sorted(unique_urls, 
                          key=lambda x: (-float(x['priority']), x['loc']))

    def generate_xml(self):
        """Generate the sitemap XML."""
        # Create root element
        urlset = ET.Element('urlset')
        urlset.set('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
        urlset.set('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
        urlset.set('xsi:schemaLocation', 
                  'http://www.sitemaps.org/schemas/sitemap/0.9 '
                  'http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd')
        
        # Add URL entries
        for url_data in self.urls:
            url_elem = ET.SubElement(urlset, 'url')
            
            loc_elem = ET.SubElement(url_elem, 'loc')
            loc_elem.text = url_data['loc']
            
            lastmod_elem = ET.SubElement(url_elem, 'lastmod')
            lastmod_elem.text = url_data['lastmod']
            
            priority_elem = ET.SubElement(url_elem, 'priority')
            priority_elem.text = url_data['priority']
        
        return urlset

    def format_xml(self, element):
        """Format XML with proper indentation."""
        rough_string = ET.tostring(element, 'unicode')
        reparsed = minidom.parseString(rough_string)
        return reparsed.toprettyxml(indent='\t')[23:]  # Remove XML declaration

    def generate_sitemap(self, output_file='sitemap.xml'):
        """Generate the complete sitemap."""
        print("🔍 Scanning website directory...")
        self.generate_urls()
        
        print(f"📄 Found {len(self.urls)} URLs to include in sitemap")
        for url_data in self.urls:
            print(f"  • {url_data['loc']} (priority: {url_data['priority']})")
        
        print("\n🏗️  Generating XML sitemap...")
        xml_element = self.generate_xml()
        xml_content = self.format_xml(xml_element)
        
        # Write to file
        output_path = self.base_dir / output_file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(xml_content)
        
        print(f"✅ Sitemap generated successfully: {output_path}")
        print(f"📊 Total URLs: {len(self.urls)}")
        
        return output_path


def main():
    """Main function."""
    print("🌐 Sitemap Generator for maifeeulasad.github.io")
    print("=" * 50)
    
    # Get the directory where this script is located
    script_dir = Path(__file__).parent
    
    # Initialize generator
    generator = SitemapGenerator(base_dir=script_dir)
    
    # Generate sitemap
    try:
        sitemap_path = generator.generate_sitemap()
        print(f"\n🎉 Done! Sitemap saved to: {sitemap_path}")
        
        # Show file size
        file_size = sitemap_path.stat().st_size
        print(f"📁 File size: {file_size:,} bytes")
        
    except Exception as e:
        print(f"❌ Error generating sitemap: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()