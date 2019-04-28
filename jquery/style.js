$(document).ready(function(){
    $("map_drop").css("display","flex");
    $("map_drop").css("flex-direction","row");
    $("map_drop").css("margin","0px");
    $("map_drop").css("padding","0px");
    $("map_drop").css("margin-top","5px");
    $("map_drop").css("margin-right","50px");
    $("map_drop").css("margin-left","auto");
    $("map_drop").css("cursor","pointer");
    
   
    $("map_drop > p").css("color","#f99dba");
    $("map_drop > p").css("margin","0px");
    $("map_drop > p").css("padding","0px");
    $("map_drop > p").css("margin-top","15px");
    $("map_drop > p").css("margin-right","10px");
    $("map_drop > p").css("font-size","70%");

    $("map_drop > img").css("height","50px");
    $("map_drop > img").css("width","50px");
    $("map_drop > img").css("border","none");
    $("map_drop > img").css("margin","0px");
    $("map_drop > img").css("margin-right","10px");
    
    $("map_drop:hover .dropdown-content").css("display","flex");
    $("map_drop:hover .dropdown-content").css("cursor","auto");
  
  });