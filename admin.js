import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
//import auth, db
import { auth,db } from "./firbaseConfig.js";

window.addEventListener('load',getAllUser)

var tbody = document.getElementById('tbody')
var id = 1
async function getAllUser(){
    const docRef = await getDocs(collection(db,'users'))
    docRef.forEach(function(doc){
        console.log(doc.id,doc.data())
        var userData = doc.data()
        console.log(userData.name)
        id++
        var tRow = `              <tr>
        <th scope="row">${id}</th>
        <td>${userData.name}</td>
        <td>${userData.email}</td>
        <td>${userData.accountActive}</td>
      </tr>`
        tbody.innerHTML += tRow
        console.log(tbody)
    })
}
