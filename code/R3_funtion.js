const showModal=()=>{
    document.getElementById("modal").style.display = "flex"
    document.getElementById("videoArticle").play();
}
const hideModal=()=>{
    document.getElementById("modal").style.display = "none"
    document.getElementById("videoArticle").pause();

}