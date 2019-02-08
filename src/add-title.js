import { anticore } from 'anticore'

anticore.on('body', (body, next) => {
  body.innerHTML =
    '<h1>Hello Luce :-)</h1>' +
    "Faudrait voir si ça marche aussi quand j'suis pas connecté" +
    "<p style='color:red'>nb:kb</p>"
  next()
})
