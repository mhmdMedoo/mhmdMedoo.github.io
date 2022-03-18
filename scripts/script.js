var mune = document.getElementById("mune");
var openMenuBtn = document.getElementById("openMenu");
var closeMenuBtn = document.getElementById("closeMenu");

openMenuBtn.onclick = function () {
    mune.style.display = "block";
    closeMenuBtn.style.display = "block";
    this.style.display = "none";
}
closeMenuBtn.onclick = function () {
    mune.style.display = "none";
    openMenuBtn.style.display = "block";
    this.style.display = "none";
}




var plus = document.getElementsByClassName("fa-plus");


for(x=0; x<plus.length; x++){
    plus[x].onclick = function () {
        if(this.classList[1] == "fa-plus"){
            this.classList.replace("fa-plus" , "fa-minus");
            this.parentElement.parentElement.classList.add("open");
        }else{
            this.classList.replace("fa-minus" , "fa-plus");
            this.parentElement.parentElement.classList.remove("open");
        }
    }
}

document.getElementById("scrollTop").onclick = function() {
    window.scroll({
        top: "0px",
        behavior: "smooth"
    })
}
var navbarC = document.querySelectorAll("header #mune ul li a");
navbarC.forEach(element => {
    element.onclick = function () {
        let ID = this.getAttribute("id");
        if(ID != null){
            document.querySelector("." + ID).scrollIntoView({
                behavior: "smooth"
            })
        }
    }
});


var btns = document.getElementsByClassName("Subbtn");
var Boxes = document.getElementsByClassName("Boxes");
for(i=0; i<=btns.length; i++){
    btns[i].onclick = function () {
        for(i=0; i<btns.length; i++){
            btns[i].classList.remove("fucas");
            this.classList.add("fucas");
            Boxes[i].classList.remove("active");
            if(this == btns[0]){
                Boxes[0].classList.add("active");
            }else{
                Boxes[1].classList.add("active");
            }
        }
    }
}
//classList.toggle("fucas");

