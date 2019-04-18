function basicInfo(){
    $.ajax({url : "data/basic.json", success: function(result){
        var info = result;
        siteInfo(info.name,info.avatar);
        $(".basic-info-placeholder").remove();
        $("#avatar-div").html("<img src='images/"+info.avatar+"' style='width : 100%;'/>");
        $("#profile-name").html(info.name);
        $("#basic-info-div").append('<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.work+'</p>');
        $("#basic-info-div").append('<p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.address+'</p>');
        $("#basic-info-div").append('<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.email+'</p>');
        $("#basic-info-div").append('<p><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.birthday+'</p>');
        for(var i=0; i<info.mobiles.length; i++){
            var value = '<p><i class="fa fa-volume-control-phone fa-fw w3-margin-right w3-large w3-text-teal"></i><span class="flag-icon flag-icon-'+info.mobiles[i].country+'"></span> '+info.mobiles[i].number+'</p>';
            $("#basic-info-div").append(value);
        }
    }});
}

function languages(){
    $.ajax({url : "data/languages.json", success : function(result){
        var info = result;
        $(".languages-placeholder").remove();
        for(var i=0; i<info.length; i++){
            var value = '<div class="w3-light-grey w3-round-xlarge w3-small w3-margin-bottom">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="font-size: 14px; line-height: 22px; height:22px; width:'+info[i].percent+'%">'+info[i].language+'</div>'+
                        '</div>';
            $("#languages-div").append(value);
        }
    }});
}

function majorSkills(){
    $.ajax({url : "data/majorskill.json", success : function(result){
        var info = result;
        $(".major-skill-placeholder").remove();
        for(var i=0; i<info.length; i++){
            var value = '<p>'+info[i].title+'</p>'+
                        '<div class="w3-light-grey w3-round-xlarge w3-small">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:'+info[i].percent+'%">'+info[i].percent+'%</div>'+
                        '</div>';
            $("#major-skills-div").append(value);
        }
    }});
}

function hobbies(){
    $.ajax({url : "data/hobbies.json", success : function(result){
        var info = result;
        $(".languages-placeholder").remove();
        for(var i=0; i<info.length; i++){
            var value = '<div class="w3-light-grey w3-round-xlarge w3-small w3-margin-bottom">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="font-size: 14px; line-height: 22px; height:22px; width:'+info[i].percent+'%">'+info[i].hobby+'</div>'+
                        '</div>';
            $("#hobbies-div").append(value);
        }
    }});    
}

function workInfo(){
    $.ajax({url : "data/work.json", success : function(result){
        var info = result;
        $(".work-placeholder").remove();
        for(var i=0; i<info.length; i++){ 
            var duration = info[i].duration;
            var hrColor = "lightgrey";
            if(info[i].current == true){
                duration = info[i].duration+' - <span class="w3-tag w3-teal w3-round">Current</span>';
            }
            if(i==info.length-1){
                hrColor = "white";
            }
            var value = '<div class="w3-container">'+
                            '<h5><b>'+info[i].role+'</b></h5>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-code fa-fw w3-margin-right"></i>'+info[i].skills+'</h6>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-building fa-fw w3-margin-right"></i>'+info[i].company+'</h6>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+duration+'</h6>'+
                            '<p><i class="fa fa-quote-left fa-fw w3-text-teal w3-margin-right"></i>'+info[i].description+'</p>'+
                            '<hr style="border-color:'+hrColor+'"/>'+
                        '</div>';
            $("#work-div").append(value);
        }
    }});
}

function projects(){
    $.ajax({url : "data/projects.json", success : function(result){
        var project = result;
        $(".work-placeholder").remove();
        for(var i=0; i<project.length; i++){ 
            var duration = project[i].duration;
            var link = "";
            var hrColor = "lightgrey"
            if(project[i].running == true){
                duration = project[i].duration+' - <span class="w3-tag w3-teal w3-round">Running</span>';
            }
            if(project[i].link != ''){
                link = '<a target="new" href="'+project[i].link+'"><h6 class="w3-text-blue"><i class="fa fa-chain fa-fw w3-margin-right"></i>'+project[i].link+'</h6></a>';
            }
            if(i==project.length-1){
                hrColor = "white";
            }
            var value = '<div class="w3-container">'+
                            '<h5><b>'+project[i].title+'</b></h5>'+
                            '<h6 class="w3-text-teal"><b>'+project[i].role+'</b></h6>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-code fa-fw w3-margin-right"></i>'+project[i].skills+'</h6>'+
                            link+
                            '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+duration+'</h6>'+
                            '<p><i class="fa fa-quote-left fa-fw w3-text-teal w3-margin-right"></i>'+project[i].description+'</p>'+
                            '<hr style="border-color:'+hrColor+'"/>'+
                        '</div>';
            $("#project-div").append(value);
        }
    }});
}

function educationInfo(){
    $.ajax({url : "data/education.json", success : function(result){
        var info = result;
        $(".education-placeholder").remove();
        for(var i=0; i<info.length; i++){   
            var hrColor = "lightgrey";
            if(i==info.length-1){
                hrColor = "white";
            }
            var value = '<div class="w3-container">'+
                            '<h6><b>'+info[i].level+'</b></h6>'+
                            '<p class="w3-text-teal"><b>'+info[i].trade+'</b></p>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+info[i].duration+'</h6>'+
                            '<p><i class="fa fa-institution w3-text-teal fa-fw w3-margin-right"></i>'+info[i].college+'</p>'+
                            '<hr style="border-color:'+hrColor+';"/>'+
                        '</div>';
            $("#education-div").append(value);
        }
    }});
}

function allSkills(){
    $.ajax({url : "data/allskill.json", success : function(result){
        var info = result;
        $(".all-skill-placeholder").remove();
        for(var i=0; i<info.length; i++){   
            var value = '<p>'+info[i].skill+'</p>'+
                        '<div class="w3-light-grey w3-round-xlarge w3-small w3-margin">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:'+info[i].percent+'%">'+info[i].percent+'%</div>'+
                        '</div>'; 
            if(i%2 ==0){
                $("#skill-left-div").append(value);
            }else{
                $("#skill-right-div").append(value);
            }
        }
        $("#skill-left-div").append("<hr style='border-color: white;'/>");
        $("#skill-right-div").append("<hr style='border-color: white;'/>");
    }});
}

function socialMedias(){
    $.ajax({url : "data/social.json", success : function(result){
        var info = result;
        $(".social-media-placeholder").remove();
        for(var i=0; i<info.length; i++){   
            var value = '<a href="'+info[i].link+'" target="_blank"> &nbsp; <i class="fa s-m-i fa-3x fa-'+info[i].icon+' w3-hover-opacity"></i> &nbsp; </a>';
            $("#social-media-div").append(value);
        }
    }});
}

function setInfo(){
    basicInfo();
    languages();
    majorSkills();
    hobbies();
    workInfo();
    projects();
    educationInfo();
    allSkills();
    socialMedias();
}

function siteInfo(name,image){
    document.title = name+" : CV";
    $("#fav-icon").attr("href","images/"+image);
}

$(document).ready(function(){
    setInfo();
});
