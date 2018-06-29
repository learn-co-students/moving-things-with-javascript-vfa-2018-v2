var dodger = document.getElementById('dodger')
document.addEventListener('keydown', function(e) {
  console.log(e.which)
})
document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    var rightNumbers = dodger.style.right.replace('px', '')
    var right = parseInt(rightNumbers, 10)
 
    dodger.style.right = `${right - 1}px`
  }
})
var dodger = document.getElementById('dodger')
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})