// get nav bar
const navBar = document.getElementById('nav-bar')
let profile = document.querySelector('.profile')
var cartImg = document.querySelector('.cart-img')
let accountBtn = document.querySelector('.accountBtn')

//navigiate login page
accountBtn.addEventListener('click',directLogin)
function directLogin(){
    window.location.replace('./index.html')
}

//apply condition if user login show cart 
const getUser = JSON.parse(localStorage.getItem('user'))
// console.log(getUser.name)

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
            <p> My Account </p>
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
            <p> Log Out </p>
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


}
