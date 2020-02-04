<template>
  <div class="context-menu" v-if="show" :class="className" ref="cont" :style="{ ...style, width: containerWidth }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'context-menu',
  props: ['width', 'className'],
  provide () {
    return {
      'contextMenu': this
    }
  },
  data () {
    return {
      show: false,
      data: null,
      position: {},
      x: 0,
      y: 0,
      style: {},
      el: null
    }
  },
  computed: {
    containerWidth () {
      return this.width ? this.width : '160px'
    }
  },
  watch: {
    show (nv, ov) {
      if (nv) {
        this.$root.$el.onmousedown = e => {
          this.show = false
        }

        window.onmousewheel = e => {
          this.show = false
        }

        this.$emit('open', this.data)

        this.$nextTick(() => {
          this.computedPosition()
        })
      } else {
        this.$root.$el.onmousedown = null
        window.onmousewheel = null
        this.data = null
      }
    }
  },
  methods: {
    computedPosition () {
      const { x, y } = this.position

      const [ w, h ] = [ this.$refs.cont.clientWidth, this.$refs.cont.clientHeight ]

      const [ cx, cy ] = [ window.innerWidth / 2, window.innerHeight / 2 ]

      if (x > cx) {
        const d = w - cx

        if (d > 0) {
          this.x = cx - d
        } else {
          this.x = x < cx - d ? x : cx - d
        }
      } else {
        this.x = x
      }

      if (y > cy) {
        const d = h - cy

        if (d > 0) {
          this.y = cy - d
        } else {
          this.y = y < cy - d ? y : cy - d
        }
      } else {
        this.y = y
      }

      this.style = { left: `${this.x}px`, top: `${this.y}px` }
    }
  }
}
</script>

<style scoped>
  .context-menu {
    position: fixed;
    z-index: 9999;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  }

  /deep/ .context-menu-group:last-child .context-menu-group-line {
    border: none;
  }
</style>