/* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
var adjustBackgroundSize = function(obj, custom_height){
    obj.each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        if( custom_height == null )
            var contH = path.height();
        else
            var contH = custom_height;

        // console.log(custom_height);
        // console.log(path.height());
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}

var adjustDiagonal = function(obj){
    var deg2rad = Math.PI/180;
    obj.each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();  
        
        var width_d2 = (contW / 2);
        var height_diag = (Math.tan(5 * deg2rad) * width_d2);
        var height_diag2 = (height_diag * 2);
// console.log($('.image_in_diagonal').html());
        var final_containerH = contH * 0.90
        var final_diag = final_containerH - height_diag2
        // console.log(final_diag + " " + contH);
        $('.diagonal_image_container').css("height", final_diag);
        $('.image_in_diagonal').css("margin-top", 0-height_diag);
        $('.images').css("height", final_containerH);
        $('#desc_max').css("padding-top", height_diag2);
        $('#long_txt_cont').css("height", final_diag);
        $('#long_txt').css("padding", "0 0 "+height_diag2+"px 0");
        adjustBackgroundSize($(".images"), final_containerH);
    });
}

function backgroundResize(){

    var windowH = $(window).height();
    adjustBackgroundSize($(".background"), null);
    adjustDiagonal($(".fullscreen"));
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();