try { if (!pt){ pt = {}; } } catch(e){pt = {};}

$(document).ready(function(){
    $.getJSON("https://api.github.com/users/maifeeulasad/repos?per_page=100")
        .then(function(projects){
            var h = "";
            $.each(projects.data, function(i, p) {
                if(p.fork!==true)
                {
                 
                h += '<li><strong><a href="' + p.html_url + '">' + 
                     p.name + '</a></strong> : ' + p.description + '</li>';   
                }
            });
            $("#ptProjects").html(h);
        });
        
});

