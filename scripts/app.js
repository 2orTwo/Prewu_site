const slider1 = document.querySelector('.slider-on')
let count = -42
console.log(slider1)
slider1.children[0].addEventListener('click', (e) => {
  const mouvePart = slider1.children[1].children[0]
  count = count + -21
  mouvePart.style.transform = `translateX(${count}rem)`
  console.log(count)
})