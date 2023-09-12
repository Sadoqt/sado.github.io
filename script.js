const menu = document.getElementById("menu");
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    if(menu.style.transform == "scale(0)"){
        menu.style.transform = "scale(1)"
    }else{
        menu.style.transform = "scale(0)"
    }
})


let slideIndex = 1;
slide(slideIndex);

function prevslide(n){
    slide(slideIndex += n);
}
function currentSlide(n) {
    slide(slideIndex = n);
  }
function slide(n){
    let i;
    let img = document.getElementsByClassName("slideimg");
    if(n > img.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = img.length;
    }
    for(i = 0;i < img.length;i++){
        img[i].style.display = "none"
    }
    img[slideIndex-1].style.display = "block";
    img[slideIndex-1].style.transition = "all 1s ease"
}

let product = [
    {
        id:1,
        img:"https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26965/gaming-pc-01-Y40-main-400-solo.png?v=39c3a7922921778220a6fc8ba4f26986aaf8d2ff",
        dis:"Windows 11 Home AMD Ryzen™ 7 7800X3D CPU AMD Radeon RX 7900 XTX - 24GB2TB M.2 NVMe SSD 32GB DDR5-5600MHz RGB RAM",
        
    },
    {
        id:2,
        img:"https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26935/gaming-pc-01-FractalRR002-main-400-..png?v=39c3a7922921778220a6fc8ba4f26986aaf8d2ff",
        dis:"Windows 11 HomeAMD Ryzen™ 7 7800X3D CPU AMD Radeon RX 7900 XTX - 24GB 2TB M.2 NVMe SSD 32GB DDR5-5600MHz RGB RAM",
    },
    {
        id:3,
        img: "https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/23403/gaming-pc-01-SlateMonoMR-main-400.png?v=39c3a7922921778220a6fc8ba4f26986aaf8d2ff",
        dis:"Windows 11 HomeIntel® Core™ i7-13700KF CPUGeForce RTX 4060 Ti - 8GB1TB WD SN570 M.2 NVMe SSD32GB DDR5-5200MHz RAM",
    },
    // {
    //     id:4,
    //     img:"https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26942/gaming-pc-01-Slate6Mesh-main-400..png?v=39c3a7922921778220a6fc8ba4f26986aaf8d2ff",
    //     dis:"Windows 11 HomeAMD Ryzen™ 7 7700X CPUXFX Radeon RX 7900 GRE - 16GB1TB WD SN570 M.2 NVMe SSD32GB DDR5-5200MHz RAM",
    // }
]
product.forEach(element => {
    document.getElementById("img-pro").innerHTML +="<div class='img-product'><img src="+ element.img +"> <div class='text-product'><p>" + element.dis + "</P></div></div> "
    // for(i = 0;i<element.length;i++){
    //     element[i].innerHTML += "<div><img src="+ img +"></div> <div>" + dis + "</div>";
    // }
})

// let slider = 1;
// showslide(slider);

// function nextpro(p);
// showslide(slider += p);
// function currentslide(p);
// showslide(slider = p);


// function showslide(p){
//     let i;
//     let productslide = document.getElementsByClassName("slideproduct");
//     if(p > productslide.length){
//         slider = 1;
//     }
//     if(p < 1){
//         slider = productslide.length;
//     }
//     for(i = 0;i<productslide.length;i++){
//         productslide[i].style.display = "none";
//     }
//     productslide[slider-1].style.display = "block";
// }
