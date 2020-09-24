const elm01 = document.querySelector('.element--01')
const elm02 = document.querySelector('.element--02')
const elm03 = document.querySelector('.element--03')

if(elm01 instanceof HTMLElement) elm01.style.color = 'red'
if(elm02) {
  elm02.addEventListener('mouseover', (event) => {
    if(event.target instanceof HTMLElement) {
      event.target.textContent = 'ホバー中'
    }
    elm02.addEventListener('mouseleave', (event) => {
      if(event.target instanceof HTMLElement) {
        event.target.textContent = '要素02'
      }
    })
  })
}
if(elm03) {
  elm03.addEventListener('click', (event) => {
    if(event.target instanceof HTMLElement) {
      event.target.textContent = String(sumCalculator(1, 2))
    }
  })
}

const sumCalculator = (num1:number, num2:number) => num1 + num2
