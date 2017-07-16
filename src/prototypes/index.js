import {$alert, $successAlert, $dangerAlert, $warningAlert, $infoAlert, $confirm} from './alert'

const prototypes = {
  $alert,
  $successAlert,
  $dangerAlert,
  $warningAlert,
  $infoAlert,
  $confirm
}

prototypes.install = (Vue) => {
  for (let name in prototypes) {
    Vue.prototype[name] = prototypes[name]
  }
}

export default prototypes
