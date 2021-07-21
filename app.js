let header = document.querySelector("header");
let logo = header.querySelector("img");


/*
找到html裡的這四個
    <a href="#">首頁</a> 
    <a href="#">關於我們</a>
    <a href="#">會員登入</a>
    <a href="#">聯絡我們</a>
*/
let headerAnchor = document.querySelectorAll("header nav li a");
//console.log(headerAnchor);

window.addEventListener("scroll", () =>{
    //console.log(e)
    //console.log(window.pageYOffset)
    if(window.pageYOffset != 0){
        header.style.backgroundColor = "rgba(0,0,0,0.8)";
        header.style.color = "white";
        headerAnchor.forEach( a =>{
            //console.log(typeof a); // object
            a.style.color = "white";
        });
        logo.src = "./Icons/white logo.svg";
      }
      else{
        header.style = "";
        headerAnchor.forEach( a =>{
            a.style.color = "";
        });
        logo.src = "./Icons/black logo.svg";
      }
});