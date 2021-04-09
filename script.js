let abase = 0
let bbase = 0
let hheight = 0
let sum = 0
let p = 0

document.getElementById('answer').addEventListener('click', calculation)

function calculation () {
  bbase = document.getElementById('b-base').value
  abase = document.getElementById('a-base').value
  hheight = document.getElementById('h-height').value
  bbase = parseInt(bbase)
  abase = parseInt(abase)
  hheight = parseInt(hheight)
  sum = (abase + bbase) / 2
  p = sum * hheight
  document.getElementById('paragraph').innerHTML = p
}
