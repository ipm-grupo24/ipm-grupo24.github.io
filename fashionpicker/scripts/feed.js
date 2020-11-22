$(document).ready(function(){
    $.ajax({
        url : "https://github.com/ipm-grupo24/ipm-grupo24.github.io/raw/main/fashionpicker/database/",
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if(val.match(/\.(jpe?g|png)$/) ) { 
                    $("body").append( "<br> <img src='" + val +"'>" );
                } 
            });
        }
    });
});