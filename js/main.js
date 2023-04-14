// const { domainToUnicode } = require("url");

//navbar
let nav = document.querySelector(".bour");
let navre = document.querySelector(".resbonsev");
let items = document.querySelectorAll(".bour .container .nav-item a");
let imgs = document.querySelectorAll(".navbar-brand .img");

window.onscroll = function () {
  if (window.scrollY >= 10) {
    nav.classList.add("bg-white");
    navre.classList.add("bg-white");
    imgs.forEach((im) => {
      im.setAttribute(
        "src",
        `${"/assets/images/BHHS-FoxRoach-Logo_1Line_Black-2.png"}`
      );
    });
    for (let i = 0; i < items.length - 1; i++) {
      items[i].classList.add("text-black");
    }
  } else {
    nav.classList.remove("bg-white");
    navre.classList.remove("bg-white");
    imgs.forEach((im) => {
      im.setAttribute(
        "src",
        `${"/assets/images/BHHS-FoxRoach-Logo_1Line-White-2.png"}`
      );
    });
    for (let i = 0; i < items.length - 1; i++) {
      items[i].classList.remove("text-black");
    }
  }
};
///Accertion
let item = document.querySelectorAll(".item");
let hed = document.querySelectorAll(".hed");
let box = document.querySelectorAll(".text-contact");
let open = document.querySelectorAll("#open");
let close = document.querySelectorAll("#close");
let contact = document.querySelector(".section-content");

for (let i = 0; i < hed.length; i++) {
  hed[i].addEventListener("click", () => {
    if (!box[i].getAttribute("class").includes("activ")) {
      for (let i = 0; i < hed.length; i++) {
        box[i].classList.remove("activ");
        open[i].classList.remove("act");
      }
    }
    box[i].classList.toggle("activ");
    open[i].classList.toggle("act");
  });
}
//swibar
import Swiper, { Navigation, Pagination } from "swiper";
// Swiper.use([])

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    590: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    975: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

///Mang aleret
let Titems = document.querySelectorAll(
  ".section-Managemnt-Team .contaer .sectipon-one .items"
);
let name = document.querySelectorAll(".items h3");
let descrttion = document.querySelectorAll(".items span");
let img = document.querySelectorAll(".items .img img");
// $(function(){
//     $.ajax({
//         url:'employees.json',
//         dataType:'json',
//         cache:false,
//         success:function(data,stuts){
//             console.log(data);
//             console.log(stuts);
//         }
//     })
// })
// import  data from './employees.json';
// console.log(data);
// let j =2;
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind();



// let onesection = document.querySelector(".sectipon-one");
// let towsection = document.querySelector(".sectipon-tow");
// let Pennsylvaniasection = document.querySelector(".sectionPennsy");

// document.addEventListener("click", function(e){
//     const target = e.target.closest(".ptn-contact"); // Or any other selector.
//     if(target){
//         document.body.classList.add('has-pop');
// }
// });

// let myrecset = new XMLHttpRequest();
// myrecset.open("GET", "/employees.json");
// myrecset.send();
// console.log(myrecset);


// myrecset.onreadystatechange = function () {
//     if (this.readyState === 4) {
//     let data = JSON.parse(this.responseText);
//     let Managemnt = "";
//     let Leadership = "";
//     let Pennsylvani = "";
//     let { ManagementTeam, LeadershipTeam, Pennsylvania } = data;

//     for (let i = 0; i < ManagementTeam.length; i++) {
//         Managemnt += card(ManagementTeam[i], "items");
//     }
//     onesection.innerHTML = Managemnt;
//     for (let i = 0; i < LeadershipTeam.length; i++) {
//         Leadership += card(LeadershipTeam[i], "items");
//     }
//     towsection.innerHTML = Leadership;
//     for (let i = 0; i < Pennsylvania.length; i++) {
//         Pennsylvani += card(Pennsylvania[i], "item-box");
//     }
//     Pennsylvaniasection.innerHTML = Pennsylvani;
//     }
// };

// function card(item, iteemclass) {
//     return `<div class="${iteemclass} col-12 col-md-6 col-lg-4">
//     <div class="img">
//     <img src="${item.img}">
//     </div>
//     <div class="card-contact">
//     <h3>${item.name}</h3>
//     <span>${item.title}</span>
//     <a class="ptn-contact">contact</a>
//     </div>
//     </div>`;
// }


//   let div = document.createElement("div");
//   div.setAttribute("class", "items col-12 col-md-6 col-lg-4");
//   let divimg = document.createElement("div");
//   divimg.setAttribute("class", "img");
//   let imgs = document.createElement("img");
//   imgs.setAttribute("src", data.ManagementTeam[i].img);
//   divimg.appendChild(imgs);
//   div.appendChild(divimg);
//   let divtext = document.createElement("div");
//   divtext.setAttribute("class", "card-contact");
//   div.appendChild(divtext);
//   let titel = document.createElement("h3");
//   titel.innerHTML = data.ManagementTeam[i].name;
//   divtext.appendChild(titel);
//   let sp = document.createElement("span");
//   sp.innerHTML = data.ManagementTeam[i]["alin-titel"];
//   divtext.appendChild(sp);
//   let link = document.createElement("a");
//   link.innerHTML = "contact";
//   divtext.appendChild(link);
//   onesection.appendChild(div);
