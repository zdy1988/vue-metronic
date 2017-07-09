import $alert from './alert'

const prototypes = {
  $alert
}

prototypes.install = (Vue) => {
  for (let name in prototypes) {
    Vue.prototype[name] = prototypes[name]
  }
}

export default prototypes
