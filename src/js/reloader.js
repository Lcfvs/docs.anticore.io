import { global } from 'anticore/global'

const location = global().location
const reload = location.replace.bind(location, '/')

export default function(module) {
  module.hot && module.hot.dispose(reload)
}
