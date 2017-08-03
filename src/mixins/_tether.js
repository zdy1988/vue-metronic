/**
 * Created by dell on 2017/6/21.
 */
import Tether from 'tether'

const PLACEMENT_PARAMS = {
  top: 'bottom center',
  bottom: 'top center',
  left: 'middle right',
  right: 'middle left'
}

const TRIGGER_LISTENERS = {
  click: {click: '_toggle'},
  hover: {mouseenter: '_show', mouseleave: '_hide'},
  focus: {focus: '_show', blur: '_hide'}
}

export default {
  data () {
    return {
      visible: this.show,
      debounce: 300,
      lastEvent: null
    }
  },
  props: {
    show: {type: Boolean, default: false},
    constraints: {type: Array, default: () => []},
    delay: {
      type: [Number, Object],
      default: 0,
      validator: value => {
        if (typeof value === 'number') {
          return value >= 0
        } else if (value !== null && typeof value === 'object') {
          return typeof value.show === 'number' &&
            typeof value.hide === 'number' &&
            value.show >= 0 &&
            value.hide >= 0
        }
        return false
      }
    },
    offset: {type: String, default: '0 0', validator: value => /^((0\s?)|([+-]?[0-9]+(px|%)\s?)){2}$/.test(value)},
    placement: {type: String, default: 'top', validator: value => Object.keys(PLACEMENT_PARAMS).indexOf(value) !== -1},
    targetOffset: {type: String, default: '0 0', validator: value => /^((0\s?)|([+-]?[0-9]+(px|%)\s?)){2}$/.test(value)},
    triggers: {
      type: [Boolean, String, Array],
      default: () => ['hover'],
      validator: (value) => {
        if (value === false || value === '') {
          return true
        } else if (typeof value === 'string') {
          return Object.keys(TRIGGER_LISTENERS).indexOf(value) !== -1
        } else if (Array.isArray(value)) {
          const keys = Object.keys(TRIGGER_LISTENERS)
          value.forEach(item => {
            if (keys.indexOf(item) === -1) {
              return false
            }
          })
          return true
        }
        return false
      }
    }
  },
  computed: {
    normalizedTriggers () {
      if (this.triggers === false) {
        return []
      } else if (typeof this.triggers === 'string') {
        return [this.triggers]
      }
      return this.triggers
    }
  },
  watch: {
    constraints () {
      this.setTetherOptions()
    },
    normalizedTriggers (newTriggers, oldTriggers) {
      this.updateListeners(newTriggers, oldTriggers)
    },
    offset () {
      this.setTetherOptions()
    },
    placement () {
      this.setTetherOptions()
    },
    show (val) {
      this._toggle(val)
    }
  },
  methods: {
    addListener (trigger) {
      for (const item in TRIGGER_LISTENERS[trigger]) {
        this.$trigger.addEventListener(item, e => this.eventHandler(e))
      }
    },
    removeListener (trigger) {
      for (const item in TRIGGER_LISTENERS[trigger]) {
        this.$trigger.removeEventListener(item, e => this.eventHandler(e))
      }
    },
    updateListeners (triggers, appliedTriggers = []) {
      const newTriggers = []
      const removeTriggers = []
      triggers.forEach(item => {
        if (appliedTriggers.indexOf(item) === -1) {
          newTriggers.push(item)
        }
      })
      appliedTriggers.forEach(item => {
        if (triggers.indexOf(item) === -1) {
          removeTriggers.push(item)
        }
      })
      newTriggers.forEach(item => this.addListener(item))
      removeTriggers.forEach(item => this.removeListener(item))
    },
    eventHandler (e) {
      if (this.normalizedTriggers.length > 1 && this.debounce > 0 && this.lastEvent !== null && e.timeStamp <= this.lastEvent + this.debounce) {
        return
      }
      for (const trigger in TRIGGER_LISTENERS) {
        for (const event in TRIGGER_LISTENERS[trigger]) {
          if (event === e.type) {
            const action = TRIGGER_LISTENERS[trigger][event]
            this[action].call()
            this.lastEvent = e.timeStamp
            return
          }
        }
      }
    },
    getTetherOptions () {
      return {
        attachment: PLACEMENT_PARAMS[this.placement],
        element: this.$popover,
        target: this.$trigger,
        offset: this.offset,
        constraints: this.constraints,
        targetOffset: this.targetOffset
      }
    },
    setTetherOptions () {
      if (this.$tether) {
        this.$tether.setOptions(this.getTetherOptions())
      }
    },
    destroyTether () {
      if (this.$tether && !this.visible) {
        this.$tether.destroy()
        delete this.$tether
      }
    },
    getDelay (show) {
      if (typeof this.delay === 'object') {
        return show ? this.delay.show : this.delay.hide
      }
      return this.delay
    },
    createTether () {
      if (!this.$tether) {
        this.$tether = new Tether(this.getTetherOptions())
      }
    },
    refreshPosition () {
      if (this.$tether) {
        this.$nextTick(() => {
          var display = this.$popover.style.display
          this.$popover.style.display = 'block'
          this.$tether.position()
          this.$popover.style.display = display
        })
      }
    },
    _delay (show, _fun) {
      this.$emit('update:show', show)
      const delay = this.getDelay(show)
      if (delay === 0) {
        _fun()
      } else {
        this.$timeout = setTimeout(() => _fun(), delay)
      }
    },
    _show () {
      this._delay(true, () => {
        clearTimeout(this.$timeout)
        this.createTether()
        this.refreshPosition()
        this.$nextTick(() => {
          this.visible = true
          this.$popover.style.zIndex = 1030
        })
      })
    },
    _hide () {
      this._delay(false, () => {
        clearTimeout(this.$timeout)
        this.visible = false
        this.$popover.style.zIndex = -100
      })
    },
    _toggle (show) {
      show = show || !this.visible
      if (show) {
        this._show()
      } else {
        this._hide()
      }
    }
  },
  mounted () {
    this.$trigger = this.$refs.trigger.children[0] || this.$refs.trigger
    this.$popover = this.$refs.popover

    this.updateListeners(this.normalizedTriggers)
  },
  beforeDestroy () {
    clearTimeout(this.$timeout)
    this.destroyTether()
  },
  destroyed () {
    if (this.$popover.parentElement === document.body) {
      document.body.removeChild(this.$popover)
    }
  }
}
