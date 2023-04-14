
let dectors = document.querySelector('.dectorsec');
let onesection = document.querySelector(".sectipon-one");
let towsection = document.querySelector(".sectipon-tow");
let Pennsylvaniasection = document.querySelector(".sectionPennsy");
let sectionNewjerser = document.querySelector('.sectionNewjerser');
let sectionDelaware = document.querySelector('.sectionDelaware');
let tcontactpop = document.querySelector('.pop');
let hed = document.querySelector('.hed');
let dis = document.querySelectorAll('.disply');
let searsh = document.getElementById('searsh');
let sershpop =document.querySelector('.searsh');
let searshbox = document.getElementById('ser');
let boxssearh = document.getElementById('inbox');




// let targretboint = document.querySelectorAll('#boint');
// searshbox.onkeyup = (e)=>{
//     let textvla = e.target.value;
//     let arrempues = [];
//     if(textvla){
//         arrempues = 
//     }
// }

//searsh
let emptyarr = [];
let arrempues = [];
let arremp = [];


searsh.addEventListener('click',()=>{
    document.body.classList.add('has-ser');
    sershpop.classList.add('activ');
})



let myrecset = new XMLHttpRequest();
myrecset.open("GET", "/employees.json");
myrecset.send();
console.log(myrecset);

function treasmodule(item,key){
    let opop = "";
    opop +=   cardpop(item[key]);
    tcontactpop.innerHTML=opop;
    document.body.classList.add('has-pop');
    //event close moduel
    let close = document.querySelector('#close');
    close.addEventListener('click',(e)=>{
        document.body.classList.remove('has-pop');
    })
    document.body.classList.remove('has-ser');
    sershpop.classList.remove('activ');
}

///rempov all class diebly
function removall(item,act){
    act.forEach((e)=>{
        e.classList.remove('disply');
    })
    item.forEach((e)=>{
        e.classList.remove('activ');
    })
}
myrecset.onreadystatechange = function () {
    if (this.readyState === 4) {
    let data = JSON.parse(this.responseText);
    let Managemnt = "";
    let Leadership = "";
    let Pennsylvani = "";
    let NewJer = "";
    let Delawa = "";
    let doctor="";
    let { dector, ManagementTeam, LeadershipTeam, Pennsylvania , NewJersey ,Delaware } = data;
    let allemp = (dector.length+ManagementTeam.length+ LeadershipTeam.length+ Pennsylvania.length+NewJersey.length+ Delaware.length);
    console.log(allemp)
    //event open moduel
    let boint =document.querySelectorAll('.boint');
    let boints = document.querySelectorAll('.sec');
    boint.forEach((e)=>{
        e.addEventListener('click',(e)=>{
            // console.log(e.target.getAttribute('id'));
            if(e.target.getAttribute('id')=='Pennsylvania'){
                removall(boint,boints);
                Pennsylvaniasection.classList.add('disply');
                e.target.classList.add('activ');
            }
            if(e.target.getAttribute('id')=='NewJersey'){
                removall(boint,boints);
                sectionNewjerser.classList.add('disply');
                e.target.classList.add('activ');
            }
            if(e.target.getAttribute('id')=='Delaware'){
                removall(boint,boints);
                sectionDelaware.classList.add('disply');
                e.target.classList.add('activ');
            }
        })
    })
    document.addEventListener("click", (e)=>{
        let targete = e.target.closest(".ptn-contact"); 
        ///searsh pop open and close
        let ter = e.target.closest('.searsh');
        let forms = e.target.closest('#ser');
        let inbox = e.target.closest('#inbox')
        if(ter){
            if(!forms&&!inbox){
                document.body.classList.remove('has-ser');
                sershpop.classList.remove('activ');
            }
        }
        //searsh
        if(inbox){
            treasmodule(arrempues,inbox.getAttribute('data-set'));
        }
        // Or any other selector.
        if(targete){
            if(targete.getAttribute('dataitem')=='dector'){
                treasmodule(data.dector,targete.getAttribute('id'));
            }if(targete.getAttribute('dataitem')=='ManagementTeam'){
                treasmodule(data.ManagementTeam,targete.getAttribute('id'));
            }if (targete.getAttribute('dataitem')=='LeadershipTeam') {
                treasmodule(data.LeadershipTeam,targete.getAttribute('id'));
            } if(targete.getAttribute('dataitem')=='Pennsylvania') {
                treasmodule(data.Pennsylvania,targete.getAttribute('id'));
            }if(targete.getAttribute('dataitem')=='NewJersey') {
                treasmodule(data.NewJersey,targete.getAttribute('id'));
            }if(targete.getAttribute('dataitem')=='Delaware') {
                treasmodule(data.Delaware,targete.getAttribute('id'));
            }
        }
    });
    for (let i = 0; i < dector.length; i++) {
        doctor += dectorelmet(dector[i], "box col-12 col-md-6","dector",i);
    }
    dectors.innerHTML=doctor;
    for (let i = 0; i < ManagementTeam.length; i++) {
        Managemnt += card(ManagementTeam[i], "items  col-12 col-sm-6 col-lg-4","ManagementTeam",i);
        // console.log(ManagementTeam[i].contact.phone);
    }
    onesection.innerHTML = Managemnt;
    for (let i = 0; i < LeadershipTeam.length; i++) {
        Leadership += card(LeadershipTeam[i], "items  col-12 col-sm-6 col-lg-4","LeadershipTeam",i);
    }
    towsection.innerHTML = Leadership;
    for (let i = 0; i < Pennsylvania.length; i++) {
        Pennsylvani += card(Pennsylvania[i], "item-box  col-12 col-sm-6 col-lg-3","Pennsylvania",i);
    }
    Pennsylvaniasection.innerHTML = Pennsylvani;
    for (let i = 0; i < NewJersey.length; i++) {
        NewJer += card(NewJersey[i], "item-box  col-12 col-sm-6 col-lg-3","NewJersey",i);
    }
    sectionNewjerser.innerHTML = NewJer;
    for (let i = 0; i < Delaware.length; i++) {
        Delawa += card(Delaware[i], "item-box  col-12 col-sm-6 col-lg-3","Delaware",i);
    }
    sectionDelaware.innerHTML = Delawa;
    allcst(dector,arrempues,dector.length);
    allcst(ManagementTeam,arrempues,ManagementTeam.length);
    allcst(LeadershipTeam,arrempues,LeadershipTeam.length);
    allcst(Pennsylvania,arrempues,Pennsylvania.length);
    allcst(NewJersey,arrempues,NewJersey.length);
    allcst(Delaware,arrempues,Delaware.length);
    searshbox.onkeyup = (e)=>{
        let textvla = e.target.value;
        if(textvla){
            emptyarr = arrempues.map((e)=>{
                return e.name;
            })
            arremp = emptyarr.filter((e)=>{
                return e.toLocaleUpperCase().startsWith(textvla.toLocaleUpperCase());
            })
        }
        else{
            console.log(ewe)
        }
        searshname(arremp,arrempues);
    }
}
}
let contenarsearsh = document.getElementById('boxs');
function allcst(item,arr,lenth){
    for(let i=0 ; i<lenth;i++){
        arr[arr.length]=item[i];
    }
}
function searshname(arr,arremp){
    let contact = "";
    for(let i=0  ;i<arremp.length;i++){
            for(let j=0;j<arremp.length;j++){
                if(arr[i]==arremp[j].name){
                    contact += ceraetsearsh(arremp[j],j);
                }
            }
    }
    contenarsearsh.innerHTML=contact;
}
function card(item, iteemclass ,obj,key) {
    return `<div class="${iteemclass}">
    <div class="img">
    <img src="${item.img}">
    </div>
    <div class="card-contact">
    <h3>${item.name}</h3>
    <span>${item.title}</span>
    <a class= "ptn-contact" dataitem="${obj}" id="${key}">contact</a>
    </div>
    </div>`;
}
function cardpop(item){
    return `             <div class="contecet-contact">
    <i id="close" class="fa-solid fa-xmark"></i>
    <div class="left-said col-12 col-md-6">
        <div class="text">
            <p>REGIONAL SALES MANAGER</p>
            <h2>${item.name}</h2>
        </div>
        <div class="img">
            <img src="${item.img}" alt="">
        </div>
        <div class="contact">
            <ul>
                contact
                <li>Phone: <span>${item.contact.phone}</span></li>
                <li>Email: <a href="http//${item.contact.email}">${item.contact.email}</a></li>
            </ul>
        </div>
    </div>
    <div class="rhigt-said col-12 col-md-6">
        <div class="text">
            <span>SHOOT ME A MESSAGE</span>
            <h3>I’d love to hear from you.</h3>
        </div>
        <div class="form">
            <form action="">
                <input type="text" class="form-control"  placeholder="Name">
                <input type="email" class="form-control"  placeholder="Email">
                <input type="number" class="form-control"  placeholder="phone">
                <textarea type="text" class="form-control"  placeholder="Message"></textarea>
            </form>
        </div>
        <button><a href="">submit</a></button>
        <div class="foo">
            <p>Your information is safe with us, we hate spam, phishing and malware as much as you. We will not share your information.</p>
        </div>
    </div>
</div>`;
}
function dectorelmet(item ,iteemclass ,obj,key){
    return `<div class="${iteemclass}">
    <div class="img">
        <img src="${item.img}" alt="">
    </div>
    <div class="contact">
        <div class="contact-titel">
            <h3>${item.name}</h3>
            <span>
                ${item.title}
                <br>
            </span>
        </div>
    </div>
    <div class="contact-footer">
    <a class= "ptn-contact" dataitem="${obj}" id="${key}">Contact Larry ⇢</a>
    </div>
</div>`
}
///searsh functions
function ceraetsearsh(item,key){
    return `<div class="box" data-set="${key}" id="inbox">
    <div class="img">
        <img src="${item.img}" alt="">
    </div>
    <div class="contact">
        <h3>${item.name}</h3>
        <span>${item.title}</span>
    </div>
</div>`
}
window.onload = function(){
    document.querySelector('.lodeng').classList.add('hed');
}
