/**
 * Created by virus_zhh on 2017/7/15.
 */
export default {
  props: {
    size: {type: String, validator: value => ['lg', 'sm'].indexOf(value) > -1},
    widthSize: {type: String, validator: value => ['xlarge', 'large', 'medium', 'small', 'xsmall'].indexOf(value) > -1},
    shape: {type: String, validator: value => ['circle', 'circle-left', 'circle-right'].indexOf(value) > -1},
    disabled: {type: Boolean},
    readonly: {type: Boolean},
    placeholder: {type: String}
  },
  computed: {
    classes () {
      return [
        {'form-control': true},
        {[`input-${this.size}`]: !!this.size},
        {[`input-${this.shape}`]: !!this.shape},
        {[`input-${this.widthSize}`]: !!this.widthSize},
        {[this.klass]: !!this.klass}
      ]
    }
  }
}
