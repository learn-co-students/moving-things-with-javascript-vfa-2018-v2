function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px','')
  var right = parseInt(righttNumbers, 10)
  if (right >0) {
    dodger.style.left = `${right + 1}px`
  }
}

document.addEventListener('keydown', function(e){
  console.log(e.which)
  if (e.which === 39){
    moveDodgerRight()
  }
})