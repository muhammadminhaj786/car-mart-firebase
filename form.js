import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {auth,db} from "./firbaseConfig.js"
let addPRoBtn = document.getElementById('add-pro-btn')

//get product information
let proName = document.getElementById('pro-name')
let proCategory = document.getElementById('pro-category') 
let proPrice = document.getElementById('pro-price')
let proDes = document.getElementById('pro-des') 
var getUser = JSON.parse(localStorage.getItem('user'))
console.log(getUser.uid)

addPRoBtn.addEventListener('click',AddProduct)
async function AddProduct(){
    const proObj = {
        proName:proName.value,
        proCategory:proCategory.value,
        proPrice:proPrice.value,
        proDes:proDes.value
    }
    //set values in firestore
    // await setDoc(doc(db,'products',))

}
