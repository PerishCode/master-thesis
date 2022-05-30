/* 复合样例组件定义 */
function Example() {
  // 内部数据状态声明
  const [value, setValue] = useState("此处声明初始值");

  // 组合已定义的组件实现新的组件
  return (
    <Card title="卡片组件样例">
      <Input title="输入组件样例" value={value} onChange={setValue} />
    </Card>
  );
}