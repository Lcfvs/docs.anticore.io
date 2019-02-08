import { anticore } from 'anticore'

anticore.on('body', (body, next) => {
  body.innerHTML = '<h1>This is the title</h1>'
  next()
})
