import { getTarget } from 'anticore/dom/emitter/getTarget'
import { onClick } from 'anticore/dom/emitter/on/onClick'
import { one } from 'anticore/dom/query/one'

onClick(one('body'), event => {
  const target = getTarget(event)

  console.log(target)
})
