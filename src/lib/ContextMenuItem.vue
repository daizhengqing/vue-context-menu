<template>
  <div class="context-menu-item" @mousedown="onMouseDown($event)" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'context-menu-item',
  inject: ['contextMenu'],
  methods: {
    onMouseDown (e) {
      e.preventDefault()
      e.stopPropagation()
    },
    onClick () {
      this.$emit('click', this.contextMenu.data, this.contextMenu.el)

      this.contextMenu.show = false
    }
  }
}
</script>

<style scoped>
  .context-menu-item {
    padding: 0 15px;
    line-height: 32px;
    font-size: 13px;
  }

  .context-menu-item:hover {
    cursor: pointer;
    background: rgba(134, 139, 142, 0.1);
  }
</style>