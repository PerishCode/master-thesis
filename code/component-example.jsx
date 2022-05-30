/* 卡片组件定义 */
function Card(props) {
  // 从外部数据接口中获取目标值
  const { title, children } = props;
  
  // UI 渲染模板定义，语法几乎与 HTML 相同，仅额外包含变量注入
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}

/* 输入组件定义 */
function Input(props) {
  const { title, value, onChange } = props;

  return (
    <div>
      <span>{title}</span>
      <input value={value} onChange={onChange} />
    </div>
  );
}