import {$alert, $successAlert, $dangerAlert, $warningAlert, $infoAlert, $confirm} from './alert'
import {$notify, $successNotify, $warningNotify, $infoNotify, $dangerNotify} from './notify'

const prototypes = {
  $alert,
  $successAlert,
  $dangerAlert,
  $warningAlert,
  $infoAlert,
  $confirm,
  $notify,
  $successNotify,
  $warningNotify,
  $infoNotify,
  $dangerNotify
}

prototypes.install = (Vue) => {
  for (let name in prototypes) {
    Vue.prototype[name] = prototypes[name]
  }
}

export default prototypes
