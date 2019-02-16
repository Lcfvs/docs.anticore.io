import { on } from 'anticore/dom/emitter/on'
import { capture, once, passive } from 'anticore/dom/emitter/options'
import { one } from 'anticore/dom/query/one'

on('click', one('body'), event => {
  console.log(event)
}, {capture, once, passive})
