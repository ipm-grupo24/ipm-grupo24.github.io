$(document).ready(function(){
    $.ajax({
        url : "database",
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if(val.match(/\.(jpe?g|png|JPG)$/) ) { 
                    $("body").append( "<br> <img src='" + val +"'>" );
                } 
            });
        }
    });
});
