import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

//import auth, db
import { auth,db } from "./firbaseConfig.js";

//create a signUp page
var signupBtn = document.getElementById('signUp')

signupBtn.addEventListener('click',SignUp)

async function SignUp(e){
  try{
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var userType = document.getElementById('userType')
    //apply conditio user do not fill empty filed
    if(!name || !email || !password || !userType){
      alert("required field are missing")
      return
    }
    // if(userType.value===0){
    //   alert('select user type')
    //   return
    // }

  // var img = document.getElementById('img-file')
  var userAuth = await createUserWithEmailAndPassword(auth, email, password)
  console.log(userAuth.user.uid)
  const uid = userAuth.user.uid
  const userObj ={
    name,
    email,
    password,
    accountActive:true,
    uid,
    type: userType.value 
  }
  console.log(userObj)
  // const userRef = doc(db,'users',uid)
  // const userDb = await(setDoc(userRef,userObj))
  window.location.assign('/')
  }catch(error){
    alert(error.message)
  }
  


}
