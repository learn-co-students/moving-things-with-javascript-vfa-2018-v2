const app = "I don't do much."
var dodger = document.querySelector('#dodger')
dodger.style.backgroundColor = '#FF69B4'
dodger.style.left // "180px"
dodger.style.bottom // "0px"
javascript
document.addEventListener('keydown', function(e) {
  console.log(e.which)
})
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    dodger.style.left = `${left - 1}px`
  }
})
