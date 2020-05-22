/**********
TITLE: Ahoy jQuery  
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Ahoy jQuery Extra Credit Assignment
ORIGINALLY CREATED ON: 27 Feb 2019
LAST MODIFIED ON: 27 Feb 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function() {
    //append method to add text after the html text
    $("#btn1").click(function(){
        $("p").append(" <br/><b>cluck, cluck, cluck, CLUCKAAAAAWWWWK!</b>");
    });

    //html method to replace the html text
    $("#btn2").click(function(){
        $("p").html(" <b>Hello there, it was nice to see you here!</b>");
    });

    //css styling method
    $("#btn3").click(function(){
        $("p").css({"font-family": "Cursive", 
                    "color": "tomato"});
        $("body").css({"background-image": 'url("ahoypirate.jpg")',
                        "background-repeat": "no-repeat",
                        "background-attachment" : "fixed",
                        "background-position": "center",
                        "background-size": "cover",
	                    "max-width": "100%",
  	                    "height": "auto"});
    });

}); 