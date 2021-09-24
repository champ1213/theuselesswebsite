
function cll() {

    var button = document.getElementById("hi");
    buttonvalue = button.value;
    alert(buttonvalue + " clicked me")
    

};
function cee() {
    console.log("The names are: euwain, zak no, name bob, cookie, scout");
    var buttonn = document.getElementById("text");
    buttonvaluee = buttonn.value;
    //alert(buttonvaluee)
    if(buttonvaluee == "euwain") {
        alert("hi " + buttonvaluee + " you have access");
        return true; 
    };
    if(buttonvaluee == "zak") {
        alert("hi " + buttonvaluee + " you have access");
        return true; 
    };
    if(buttonvaluee == "no name bob") {
        alert("hi " + buttonvaluee + " you have access");
        return true; 
    };
    if(buttonvaluee == "scout") {
        alert("hi " + buttonvaluee + " you have access");
        return true; 
    };
    if(buttonvaluee == "cookie") {
        alert("hi " + buttonvaluee + " you have access");
        return true; 
    };
    alert("Your name was not on the list sorry");
    alert("if know me and you want access please request")
    return false;
    

    

};