import './index.sass'

import Minigrid from 'minigrid'

const grid = new Minigrid({
  container: '.grid',
  item: '.grid-item',
  gutter: 12
})

const update = () => grid.mount()

window.addEventListener('load', update)
window.addEventListener('resize', update)
window.addEventListener('beforeprint', () => {
  document.body.style.width = '21cm'
  for (const dom of document.querySelectorAll('.grid-item')) {
    dom.style.width = '8.5cm'
  }
  grid.mount()
})
window.addEventListener('afterprint', () => {
  document.body.style.removeProperty('width')
  for (const dom of document.querySelectorAll('.grid-item')) {
    dom.style.removeProperty('width')
  }
  grid.mount()
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(console.log)
    .catch(console.error)
}
