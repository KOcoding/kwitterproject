function log_in(){
    var user_name=document.getElementById("user_name").value ;
    localStorage.setItem("user_namekey",user_name);
    window.location="kwitter_room.html";

}