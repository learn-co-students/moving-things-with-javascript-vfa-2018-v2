const app = "I don't do much."

var dodger = document.getElementById('dodger') //grab dodger

function moveDodgerLeft() { //define function to move dodger left
  var leftNumbers = dodger.style.left.replace('px', '') //define variable leftnumbers without "px" in string
  var left = parseInt(leftNumbers, 10) //convert string to integer

  if (left > 0) { //IF the value of left is greater than 0
    dodger.style.left = `${left - 1}px`//subtract 1 from its value, reconvert to original string form
  } //otherwise do nothing
}

document.addEventListener('keydown', function(e) { //add this functionality to the browser in form of EventListener
  if (e.which === 37) { //If the key listener returns 37,
    moveDodgerLeft() //call function
  }
})

function moveDodgerRight() { //define function to move dodger right
  var leftNumbers = dodger.style.left.replace('px', '') //define variable leftnumbers without "px" in string
  var left = parseInt(leftNumbers, 10) //convert string to integer

  if (left < 360) { //IF the value of left is less than 360
    dodger.style.left = `${left + 1}px`//add 1 to its value, reconvert to original string form
  } //otherwise do nothing
}

document.addEventListener('keydown', function(e) { //add this functionality to the browser in form of EventListener
  if (e.which === 39) { //if the key listener returns 39
    moveDodgerRight() //call function
  }
})
