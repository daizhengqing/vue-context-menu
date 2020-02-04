import ContextMenu from './ContextMenu.vue'
import ContextMenuGroup from './ContextMenuGroup.vue'
import ContextMenuItem from './ContextMenuItem.vue'

const VueContextMenu = {
    install (Vue, options) {
        Vue.component(ContextMenu.name, ContextMenu)
        Vue.component(ContextMenuGroup.name, ContextMenuGroup)
        Vue.component(ContextMenuItem.name, ContextMenuItem)

        Vue.directive('contextMenu', {
            inserted: function (el, data, vn) {
              if (!data.arg) {
                console.error('no target!')
              }

              el.addEventListener('contextmenu', e => {
                e.preventDefault()

                const target = vn.context.$refs[data.arg]
          
                target.position = {
                  x: e.pageX,
                  y: e.pageY
                }

                target.data = data.value

                target.el = el

                target.show = true
              })
            },
            update: function (el, data, vn) {
              const target = vn.context.$refs[data.arg]

              target.data = data.value

              target.el = el
            }
        })
    }
}

if (typeof window !== undefined && window.Vue) {
    window.Vue.use(VueContextMenu)
}

export default VueContextMenu