
$(document).ready(function(){
                //toggle login section
    $("#loginbtn").click(function(){
        $("#login").toggle();
    });
       $('form').submit(function(){
    $.post('#', function() {
      window.location = '/login.html';
    });
    return false;
  });
  
   /* Alternate Method, Uncomment for Hover
   
  * $("#hover").hover(function(){
   *     $('body').css("background-color", "yellow");
    *    }, function(){
     *   $('body').css("background-color", "pink");
    *});
  */
 
 //Change Background
  $("#hover").on('mouseenter', function(){
           $('body').css("background-color","blue");
           });
            
            $("#hover").on('mouseleave', function(){
            $('body').css("background-color","red");
          });
            
}); 
