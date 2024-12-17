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