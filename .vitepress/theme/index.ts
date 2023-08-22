import { h } from 'vue'
import Theme from 'vitepress/theme'
// @ts-ignore
import SvgImage from './components/SvgImage.vue'
// @ts-ignore
import LayoutBottom from './components/LayoutBottom.vue'
import './styles/vars.css'
import './custom.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-bottom': () => h(LayoutBottom),
    })
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
  }
}
