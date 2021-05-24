const showModal=()=>{
    document.getElementById("modal").style.display = "flex"
    document.getElementById("buttonPlay").style.display = "none"
    document.getElementById("videoArticle").play();
}
const hideModal=()=>{
    document.getElementById("modal").style.display = "none"
    document.getElementById("buttonPlay").style.display = "inline"
    document.getElementById("videoArticle").pause();

}