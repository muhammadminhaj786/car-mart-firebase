import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, getDoc ,doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

//import auth, db
import { auth,db } from "./firbaseConfig.js";

//working on login page
const login = document.getElementById('Login')
login.addEventListener('click',Login)
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

        if (userLogin.type === "admin") {
            window.location.replace("/adminDashboard.html")
        } else if (userLogin.type === "Vendor") {
            window.location.replace("/vendors.html")

        } else if (userLogin.type === "Customer") {
            window.location.replace("/customer.html")

        }
    }catch(error){
        alert(error.message)
        console.log(error.message)
    }

}
