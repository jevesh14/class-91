function back(){
    window.location="activity1.html";
}
function getscore(){
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1> score: "+score+"</h1>";
}