import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {auth,db} from "./firbaseConfig.js"
let navLink = document.querySelector('.nav-link')
let myRow = document.querySelector('.my-row')

navLink.addEventListener('click',Link)
function Link(){
    window.location.replace('./dashboard.html')
}

// Show Product in ui
async function getAllProducts(){
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    var productInfo = doc.data()
    var newProduct = ` <div class="col-3 col-sm-6 col-md-4 col-12 mt-3"> <div class="pro-list">
    <img src="" alt="">
    <h1>${productInfo.proDes}</h1>
    <h2>${productInfo.proPrice}</h2>
    <h2>${productInfo.proCategory}</h2>
    </div> </div>`
    console.log(newProduct)
    myRow.innerHTML += newProduct
});
}

getAllProducts()
