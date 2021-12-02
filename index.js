
function cll() {

    var button = document.getElementById("hi");
    buttonvalue = button.value;
    alert(buttonvalue + " clicked me")
    

};
function cee() {
    console.log("The names are: euwain, zak, no name bob, cookie, scout", "Katerin");
    var buttonn = document.getElementById("text");
    buttonvaluee = buttonn.value;
    let names = ["euwain", "zak", "no name bob", "cookie", "scout", "Katerin"];
    //alert(buttonvaluee)
    if(buttonvaluee == names[0]) {
        alert("hi " + buttonvaluee + " you have access");
        return true; 
    };
    if(buttonvaluee == names[1]) {
        alert("hi " + buttonvaluee + " you have access");
        return true; 
    };
    if(buttonvaluee == names[2]) {
        alert("hi " + buttonvaluee + " you have access");
        return true; 
    };
    if(buttonvaluee == names[3]) {
        alert("hi " + buttonvaluee + " you have access");
        return true; 
    };
    if(buttonvaluee == names[4]) {
        alert("hi " + buttonvaluee + " you have access");
        return true;
    };   
    if(buttonvaluee == names[5]) {
        alert("hi " + buttonvaluee + " you have access");
        return true;
    };   
 
    alert("Your name was not on the list sorry");
    alert("if know me and you want access please request")
    return false;
    

    

};
