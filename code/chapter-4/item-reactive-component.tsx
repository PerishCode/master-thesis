/** 原始 Item 组件 */
import {Item} from "xxx"

/** 响应式 Item 组件 */
const ReactiveItem = register(Item, 
  (field) => ({
    label: Observation.memo(
      () => field.title ?? ""),
    hint: Observation.memo(
      () => field.hint ?? ""),
    ... // 其他属性同理
}));