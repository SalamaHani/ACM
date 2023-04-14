/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./assets/js/Team.js ***!
  \***************************/
var dectors = document.querySelector('.dectorsec');
var onesection = document.querySelector(".sectipon-one");
var towsection = document.querySelector(".sectipon-tow");
var Pennsylvaniasection = document.querySelector(".sectionPennsy");
var sectionNewjerser = document.querySelector('.sectionNewjerser');
var sectionDelaware = document.querySelector('.sectionDelaware');
var tcontactpop = document.querySelector('.pop');
var hed = document.querySelector('.hed');
var dis = document.querySelectorAll('.disply');
var searsh = document.getElementById('searsh');
var sershpop = document.querySelector('.searsh');
var searshbox = document.getElementById('ser');
var boxssearh = document.getElementById('inbox');

// let targretboint = document.querySelectorAll('#boint');
// searshbox.onkeyup = (e)=>{
//     let textvla = e.target.value;
//     let arrempues = [];
//     if(textvla){
//         arrempues = 
//     }
// }

//searsh
var emptyarr = [];
var arrempues = [];
var arremp = [];
searsh.addEventListener('click', function () {
  document.body.classList.add('has-ser');
  sershpop.classList.add('activ');
});
var myrecset = new XMLHttpRequest();
myrecset.open("GET", "/employees.json");
myrecset.send();
console.log(myrecset);
function treasmodule(item, key) {
  var opop = "";
  opop += cardpop(item[key]);
  tcontactpop.innerHTML = opop;
  document.body.classList.add('has-pop');
  //event close moduel
  var close = document.querySelector('#close');
  close.addEventListener('click', function (e) {
    document.body.classList.remove('has-pop');
  });
  document.body.classList.remove('has-ser');
  sershpop.classList.remove('activ');
}

///rempov all class diebly
function removall(item, act) {
  act.forEach(function (e) {
    e.classList.remove('disply');
  });
  item.forEach(function (e) {
    e.classList.remove('activ');
  });
}
myrecset.onreadystatechange = function () {
  if (this.readyState === 4) {
    var data = JSON.parse(this.responseText);
    var Managemnt = "";
    var Leadership = "";
    var Pennsylvani = "";
    var NewJer = "";
    var Delawa = "";
    var doctor = "";
    var dector = data.dector,
      ManagementTeam = data.ManagementTeam,
      LeadershipTeam = data.LeadershipTeam,
      Pennsylvania = data.Pennsylvania,
      NewJersey = data.NewJersey,
      Delaware = data.Delaware;
    var allemp = dector.length + ManagementTeam.length + LeadershipTeam.length + Pennsylvania.length + NewJersey.length + Delaware.length;
    console.log(allemp);
    //event open moduel
    var boint = document.querySelectorAll('.boint');
    var boints = document.querySelectorAll('.sec');
    boint.forEach(function (e) {
      e.addEventListener('click', function (e) {
        // console.log(e.target.getAttribute('id'));
        if (e.target.getAttribute('id') == 'Pennsylvania') {
          removall(boint, boints);
          Pennsylvaniasection.classList.add('disply');
          e.target.classList.add('activ');
        }
        if (e.target.getAttribute('id') == 'NewJersey') {
          removall(boint, boints);
          sectionNewjerser.classList.add('disply');
          e.target.classList.add('activ');
        }
        if (e.target.getAttribute('id') == 'Delaware') {
          removall(boint, boints);
          sectionDelaware.classList.add('disply');
          e.target.classList.add('activ');
        }
      });
    });
    document.addEventListener("click", function (e) {
      var targete = e.target.closest(".ptn-contact");
      ///searsh pop open and close
      var ter = e.target.closest('.searsh');
      var forms = e.target.closest('#ser');
      var inbox = e.target.closest('#inbox');
      if (ter) {
        if (!forms && !inbox) {
          document.body.classList.remove('has-ser');
          sershpop.classList.remove('activ');
        }
      }
      //searsh
      if (inbox) {
        treasmodule(arrempues, inbox.getAttribute('data-set'));
      }
      // Or any other selector.
      if (targete) {
        if (targete.getAttribute('dataitem') == 'dector') {
          treasmodule(data.dector, targete.getAttribute('id'));
        }
        if (targete.getAttribute('dataitem') == 'ManagementTeam') {
          treasmodule(data.ManagementTeam, targete.getAttribute('id'));
        }
        if (targete.getAttribute('dataitem') == 'LeadershipTeam') {
          treasmodule(data.LeadershipTeam, targete.getAttribute('id'));
        }
        if (targete.getAttribute('dataitem') == 'Pennsylvania') {
          treasmodule(data.Pennsylvania, targete.getAttribute('id'));
        }
        if (targete.getAttribute('dataitem') == 'NewJersey') {
          treasmodule(data.NewJersey, targete.getAttribute('id'));
        }
        if (targete.getAttribute('dataitem') == 'Delaware') {
          treasmodule(data.Delaware, targete.getAttribute('id'));
        }
      }
    });
    for (var i = 0; i < dector.length; i++) {
      doctor += dectorelmet(dector[i], "box col-12 col-md-6", "dector", i);
    }
    dectors.innerHTML = doctor;
    for (var _i = 0; _i < ManagementTeam.length; _i++) {
      Managemnt += card(ManagementTeam[_i], "items  col-12 col-sm-6 col-lg-4", "ManagementTeam", _i);
      // console.log(ManagementTeam[i].contact.phone);
    }

    onesection.innerHTML = Managemnt;
    for (var _i2 = 0; _i2 < LeadershipTeam.length; _i2++) {
      Leadership += card(LeadershipTeam[_i2], "items  col-12 col-sm-6 col-lg-4", "LeadershipTeam", _i2);
    }
    towsection.innerHTML = Leadership;
    for (var _i3 = 0; _i3 < Pennsylvania.length; _i3++) {
      Pennsylvani += card(Pennsylvania[_i3], "item-box  col-12 col-sm-6 col-lg-3", "Pennsylvania", _i3);
    }
    Pennsylvaniasection.innerHTML = Pennsylvani;
    for (var _i4 = 0; _i4 < NewJersey.length; _i4++) {
      NewJer += card(NewJersey[_i4], "item-box  col-12 col-sm-6 col-lg-3", "NewJersey", _i4);
    }
    sectionNewjerser.innerHTML = NewJer;
    for (var _i5 = 0; _i5 < Delaware.length; _i5++) {
      Delawa += card(Delaware[_i5], "item-box  col-12 col-sm-6 col-lg-3", "Delaware", _i5);
    }
    sectionDelaware.innerHTML = Delawa;
    allcst(dector, arrempues, dector.length);
    allcst(ManagementTeam, arrempues, ManagementTeam.length);
    allcst(LeadershipTeam, arrempues, LeadershipTeam.length);
    allcst(Pennsylvania, arrempues, Pennsylvania.length);
    allcst(NewJersey, arrempues, NewJersey.length);
    allcst(Delaware, arrempues, Delaware.length);
    searshbox.onkeyup = function (e) {
      var textvla = e.target.value;
      if (textvla) {
        emptyarr = arrempues.map(function (e) {
          return e.name;
        });
        arremp = emptyarr.filter(function (e) {
          return e.toLocaleUpperCase().startsWith(textvla.toLocaleUpperCase());
        });
      } else {
        console.log(ewe);
      }
      searshname(arremp, arrempues);
    };
  }
};
var contenarsearsh = document.getElementById('boxs');
function allcst(item, arr, lenth) {
  for (var i = 0; i < lenth; i++) {
    arr[arr.length] = item[i];
  }
}
function searshname(arr, arremp) {
  var contact = "";
  for (var i = 0; i < arremp.length; i++) {
    for (var j = 0; j < arremp.length; j++) {
      if (arr[i] == arremp[j].name) {
        contact += ceraetsearsh(arremp[j], j);
      }
    }
  }
  contenarsearsh.innerHTML = contact;
}
function card(item, iteemclass, obj, key) {
  return "<div class=\"".concat(iteemclass, "\">\n    <div class=\"img\">\n    <img src=\"").concat(item.img, "\">\n    </div>\n    <div class=\"card-contact\">\n    <h3>").concat(item.name, "</h3>\n    <span>").concat(item.title, "</span>\n    <a class= \"ptn-contact\" dataitem=\"").concat(obj, "\" id=\"").concat(key, "\">contact</a>\n    </div>\n    </div>");
}
function cardpop(item) {
  return "             <div class=\"contecet-contact\">\n    <i id=\"close\" class=\"fa-solid fa-xmark\"></i>\n    <div class=\"left-said col-12 col-md-6\">\n        <div class=\"text\">\n            <p>REGIONAL SALES MANAGER</p>\n            <h2>".concat(item.name, "</h2>\n        </div>\n        <div class=\"img\">\n            <img src=\"").concat(item.img, "\" alt=\"\">\n        </div>\n        <div class=\"contact\">\n            <ul>\n                contact\n                <li>Phone: <span>").concat(item.contact.phone, "</span></li>\n                <li>Email: <a href=\"http//").concat(item.contact.email, "\">").concat(item.contact.email, "</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"rhigt-said col-12 col-md-6\">\n        <div class=\"text\">\n            <span>SHOOT ME A MESSAGE</span>\n            <h3>I\u2019d love to hear from you.</h3>\n        </div>\n        <div class=\"form\">\n            <form action=\"\">\n                <input type=\"text\" class=\"form-control\"  placeholder=\"Name\">\n                <input type=\"email\" class=\"form-control\"  placeholder=\"Email\">\n                <input type=\"number\" class=\"form-control\"  placeholder=\"phone\">\n                <textarea type=\"text\" class=\"form-control\"  placeholder=\"Message\"></textarea>\n            </form>\n        </div>\n        <button><a href=\"\">submit</a></button>\n        <div class=\"foo\">\n            <p>Your information is safe with us, we hate spam, phishing and malware as much as you. We will not share your information.</p>\n        </div>\n    </div>\n</div>");
}
function dectorelmet(item, iteemclass, obj, key) {
  return "<div class=\"".concat(iteemclass, "\">\n    <div class=\"img\">\n        <img src=\"").concat(item.img, "\" alt=\"\">\n    </div>\n    <div class=\"contact\">\n        <div class=\"contact-titel\">\n            <h3>").concat(item.name, "</h3>\n            <span>\n                ").concat(item.title, "\n                <br>\n            </span>\n        </div>\n    </div>\n    <div class=\"contact-footer\">\n    <a class= \"ptn-contact\" dataitem=\"").concat(obj, "\" id=\"").concat(key, "\">Contact Larry \u21E2</a>\n    </div>\n</div>");
}
///searsh functions
function ceraetsearsh(item, key) {
  return "<div class=\"box\" data-set=\"".concat(key, "\" id=\"inbox\">\n    <div class=\"img\">\n        <img src=\"").concat(item.img, "\" alt=\"\">\n    </div>\n    <div class=\"contact\">\n        <h3>").concat(item.name, "</h3>\n        <span>").concat(item.title, "</span>\n    </div>\n</div>");
}
window.onload = function () {
  document.querySelector('.lodeng').classList.add('hed');
};
/******/ })()
;