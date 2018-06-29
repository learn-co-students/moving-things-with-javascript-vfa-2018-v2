var dodger = document.getElementById('dodger')
document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left - 1}px`
  }
})