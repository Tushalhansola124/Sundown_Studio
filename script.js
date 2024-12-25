const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let eleC=document.querySelector(".contanier_elem");
let fixed=document.querySelector("#fiexd_image");
eleC.addEventListener("mouseenter",function(){
    fixed.style.display="block";
})
eleC.addEventListener("mouseleave",function(){
    fixed.style.display="none";
});

let elems=document.querySelectorAll("#elem");
// elems.addEventListener("mouseenter",function(){
//     let image=elems.getAttribute("data-image");
//     fixed.style.backgroundImage=`url(${image})`;
// })
elems.forEach(function(a){
  a.addEventListener("mouseenter",function(){
      let image=a.getAttribute("data-image");
    fixed.style.background=`url(${image})`;
  })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 100,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


function changeImage(imageNumber) {
  const rightSide = document.getElementById('rightSide');
  if (imageNumber === 1) {
      rightSide.style.backgroundImage = "url('https://sundown-ivory.vercel.app/page4-1.webp')";
  } else if (imageNumber === 2) {
      rightSide.style.backgroundImage = "url('https://sundown-ivory.vercel.app/page4-2.webp')";
  }
  else if(imageNumber===3){
      rightSide.style.backgroundImage = "url('https://sundown-ivory.vercel.app/page4-3.webp')";  
  }
}

function zoomText(element) {
  element.style.transform = element.style.transform === 'scale(1.5)' 
      ? 'scale(1)' 
      : 'scale(1.5)';
}

// Set initial image
changeImage(1);







// let menu = document.querySelector("nav h1");
// let full = document.querySelector("#ful-scr");
// let navImg=document.querySelector("nav img");
// let flag = 0;
// menu.addEventListener("click",function(){
  
//   if(flag == 0){

//     full.style.top = 0;
//     navImg.style.opacity = 0;
//     full.classList.add("full");
//     flag == 1;
    
//   }  
//   else
//   {
//     full.style.top = "-100%";
//     full.classList.remove("full");
//     navImg.style.opacity = 1;
//     flag == 0;
    
//   }
  
// })

