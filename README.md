# vue-context-menu

> A ConextMenu for Vue

## Install

```npm install @ddzq789/vue-context-menu```

## Useage

```
  import VueContextMenu from '@ddzq789/vue-context-menu'
  Vue.use(VueContextMenu)
```

```
  <div id="app" v-contextMenu:contextMenuA="'Hello world'">here</div>
  // also you can no parameters  v-contextMenu:contextMenuA

  <context-menu ref="contextMenuA">
    <context-menu-item @click="onCLick">copy</context-menu-item>
    <context-menu-item>cut</context-menu-item>
    <context-menu-item>paste</context-menu-item>
  </context-menu>
  
  methods: {
    onCLick (data, el) {
      console.log(data)  // you will get 'Hello world'
      console.log(el) // you will get div#app
    }
  }
```

or you can see [Example Link](https://codepen.io/daizq/pen/xxGKbvY)

