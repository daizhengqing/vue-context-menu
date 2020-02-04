<template>
  <div class="context-menu-group">
    <slot></slot>
    <div class="context-menu-group-line"></div>
  </div>
</template>

<script>
export default {
  name: 'context-menu-group',
  inject: ['contextMenu']
}
</script>

<style scoped>
  .context-menu-group-line {
    width: 100%;
    padding: 0 15px;
    border-bottom: 1px solid #ccc;
  }
</style>