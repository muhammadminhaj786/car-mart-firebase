// get nav bar
const navBar = document.getElementById('nav-bar')
var accDiv = document.querySelector('.btns')
var accBtn = document.getElementById('acc-btn')
console.log(accBtn)
console.log(navBar)
//apply condition if user login show cart 
const getUser = JSON.parse(localStorage.getItem('user'))
console.log(getUser.name)

//check user login
if (!getUser){
    console.log("No user login")

}else{
    var newBtn= document.createElement('button')
    newBtn.classList = 'btn btn-danger'
    var newTxt = document.createTextNode(`${getUser.name}`)
    newBtn.append(newTxt)
    // accBtn += profileBtn
    // console.log(accBtn)
    accBtn.innerHTML = getUser.name
    accBtn.remove()
    console.log(accDiv)
    accDiv.appendChild(newBtn)


}
