const hamMenu = document.querySelector(".ham-menu");

const sidebar = document.querySelector(".side-bar");

const close = document.querySelector(".close");
hamMenu.addEventListener("click", () => {
  sidebar.style.left = "0";
});

close.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please reach The minimum payout",
     
    });
  })
})