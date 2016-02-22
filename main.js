// GO!
//  Problem 1 --------------------------------------------
var button1 = document.querySelector(".show-nav")

// var alertThis = function() {
//   alert("jdsanf;sd")
// }



var menu = document.querySelector(".nav-menu")

var buttonState = {
	showing: true
}


var goAway = function() {
	if (buttonState.showing) {
		menu.style.opacity = 0
		buttonState.showing = false
	}
	else {
		menu.style.opacity = 1
		buttonState.showing = true
	}
}


button1.addEventListener("click", goAway)


// Problem 2-----------------------------------------------

var guestInputEl = document.querySelector('.guestTextBox') //input[type="text"]

var guestListUl = document.querySelector('.guest-list')

var addGuest = function(keyEvent){
    var guestInputEl = keyEvent.srcElement

    if(keyEvent.keyCode === 13){
        var userInput = guestInputEl.value
        var newDiv= document.createElement('div')
        newDiv.textContent = userInput
        guestListUl.appendChild(newDiv)
        guestInputEl.value = ''
    }
}


guestInputEl.addEventListener('keydown', addGuest)


var addBox = document.querySelector(".listBox")

var nameList = document.querySelector("#listThree")

var addPerson = function(keyEvent) {
    var nameInput = keyEvent.srcElement
    if (keyEvent.keyCode === 13) {
         var newinput = nameInput.value
         var newname= document.createElement("div")
         newname.textContent = newinput
         nameList.appendChild(newname)
         addBox.value = ""
         var newButton = document.createElement("button")
         newname.appendChild(newButton)
         newButton.textContent = "X"

         var removeButton = function() {
             nameList.removeChild(newname)
        }
    newButton.addEventListener("click", removeButton)
    }
}

addBox.addEventListener("keydown", addPerson)
