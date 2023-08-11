import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, getDoc ,doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

//import auth, db
import { auth,db } from "./firbaseConfig.js";

//if user alerady loged in navigiate dashboard
let getUser = JSON.parse(localStorage.getItem('user'))
// console.log(getUser.uid)
if(getUser===undefined){
    console.log('Not signed in')
}else{
    // window.location.replace('./dashboard.html')
}


//working on login page
const login = document.getElementById('Login')
login.addEventListener('click',Login)
// var accBtn = document.getElementById('acc-btn')
// console.log(accBtn) 
async function Login(e){
    try{
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        const userLogin = await signInWithEmailAndPassword(auth,email,password)
        console.log(userLogin)
        const userRef = doc(db,'users',userLogin.user.uid)
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            alert("invalid user")
            return
        }

        console.log("Document data:", docSnap.data());
        const userData = docSnap.data()
        localStorage.setItem("user", JSON.stringify(userData))
        console.log(userLogin.type)
        if (userData.type === "admin") {
            window.location.replace("/adminDashboard.html")
        } else if (userData.type === "Vendor") {
            window.location.replace("/dashboard.html")

        } else if (userData.type === "Customer") {
            window.location.replace("/dashboard.html")

        }
    }catch(error){
        alert(error.message)
        console.log(error.message)
    }

}


