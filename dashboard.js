welcome()
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc,getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth,db } from "./firbaseConfig.js";

// // get nav bar
const navBar = document.getElementById('nav-bar')
let profile = document.querySelector('.profile')
var cartImg = document.querySelector('.cart-img')
let accountBtn = document.querySelector('.accountBtn')

//test
// let dashAcc = document.querySelector('.acc-btn')
// console.log(dashAcc)
// dashAcc.addEventListener('click',dashLogin)
// function dashLogin(){
//     window.location.replace('./index.html')
// }

//welcome back msg modal
//login modal
function welcome(){
    Swal.fire({
position: 'top-end',
icon: 'success',
title: 'Sucessfully Login',
showConfirmButton: false,
timer: 1500
    })
}


//navigiate login page
accountBtn.addEventListener('click',directLogin)
function directLogin(){
    window.location.replace('./index.html')
}

// //apply condition if user login show cart 
var getUser = JSON.parse(localStorage.getItem('user'))
// console.log(getUser.uid)

//check user login
if (!getUser){
    console.log("No user login")

    // profile.innerHTML = ""

}else{

    //new
    var myPro = `                <div class="myimg" id="myimgid">
    <img src="images/pro.jpg" alt="" height="60px" width="60px" class="border-radius">
</div>

<div class="dropdown" id="dropdownid">
    <div class="nameandimg">
        <img src="images/pro.jpg" alt="" height="50px" width="50px">
        <p id="logerName"> ${getUser.name} </p>
    </div>

    <ul>
        <li>
            <i class="fa-solid fa-user"></i>
            <p id="my-account"> My Account </p>
        </li>

        <li>
            <i class="fa-solid fa-box"></i>
            <p> My Order </p>
        </li>

        <hr>

        <li>
            <i class="fa-solid fa-circle-question"></i>
            <p> Help </p>
        </li>

        <li>
            <i class="fa-solid fa-gear"></i>
            <p> Setting </p>
        </li>

        <hr>

        <li>
            <i class="fa-solid fa-right-from-bracket"></i>
            <p id="logout">  Log Out </p>
        </li>
    </ul>
</div>
</div>`
profile.classList = 'visible'
cartImg.classList = 'visible'
accountBtn.classList='hidden'
profile.innerHTML += myPro
//dropdown
let myimgid = document.getElementById('myimgid');
let dropdownid = document.getElementById('dropdownid');
    myimgid.addEventListener('click', () => {
        dropdownid.classList.toggle('blackdiv')
    });

}

//cart page navigiate
cartImg.addEventListener('click',openCart)
function openCart(){
    window.location.replace('./cart.html')
}

//create logout
var logout=document.getElementById('logout')
if(!logout){
    console.log('user logout')
}else{
    logout.addEventListener("click",Logout)
function Logout(){
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('sucessfully logout')
      }).catch((error) => {
        // An error happened.
      });    
    localStorage.clear();
    window.location.replace("./dashboard.html")
}
}

//naviagate page to my account
let myAccount= document.getElementById('my-account')
if(!myAccount){
    console.log('user logout')
}else{
    myAccount.addEventListener('click',Account)
    function Account(){
    window.location.replace("./vendors.html")
}
}

//working on add product in dashbboard
// window.addEventListener('load',getAllProducts)
// async function getAllProducts(){
//     let getProducts = await getDocs(collection(db,'products'))
//     console.log(getAllProducts.data)
// }
