import { App } from 'vue'
import {
  ChatLineRound,
  Setting,
  Goods,
  Monitor,
  Fold,
  Expand
} from '@element-plus/icons-vue'
const icons = {
  ChatLineRound,
  Setting,
  Goods,
  Monitor,
  Fold,
  Expand
}

// 注册全局组件
export function registerElementIcon(app: App) {
  Object.keys(icons).forEach((key) => {
    app.component(key, icons[key as keyof typeof icons])
  })
}
