var dodger = document.getElementById('dodger')
document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    var rightNumbers = dodger.style.right.replace('px', '')
    var right = parseInt(rightNumbers, 10)
 
    dodger.style.left = `${right - 1}px`
  }
})
var dodger = document.getElementById('dodger')
