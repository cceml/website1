// navbar javascript
window.addEventListener("DOMContentLoaded", event => {
    var navbarMobile=function(){
        const nCollapsible=document.body.querySelector("#mainNavbar");
        if(!nCollapsible){
            return;
        }
        if(window.scrollY === 0){
            nCollapsible.classList.remove("navbar-mobile");
        }else{
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll",navbarMobile);
    const myNavbar=document.body.querySelector("#mainNavbar");
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset:74,
        });
    }
});

var BtnCanvas=document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i <BtnCanvas.length;i++){
    BtnCanvas[i].addEventListener("click",function(){
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}
// navbar javascript
(function(){
    'use strict'
    var myName=document.querySelector("#name");
    var myEmail=document.querySelector("#email");
    var myPhone=document.querySelector("#phone");
    var myMessage=document.querySelector("#message");
    var myBtn=document.querySelector("#BtnContact");

    if(myMessage.value.length == 0) {
        myBtn.disabled=true;
    }
    myMessage.addEventListener("keyup",function(){
        document.getElementById("current-character").textContent=myMessage.value.length;

        if (myMessage.value.length >= 10){
            myBtn.disabled=false;
        }
        else {
            myBtn.disabled = true;
        }
    });
    var myForms=document.querySelector(".needs-validation");
    myForms.addEventListener("submit",function(e){
        if(!myForms.checkValidity()){
            e.preventDefault();
            e.stopPropagation();
        }
    },false);
    
})();
