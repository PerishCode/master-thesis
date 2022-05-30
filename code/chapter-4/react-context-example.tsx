function Example() {
  return (
    <PathContext.Provider value="A">
      // 通过查看此处的 Consumer 组件最近的 PathContext 节点可知
      // 因此其接收到的值将会是 "A"，最终会渲染成 <div>A</div>
      <Consumer /> 
      <PathContext.Provider value="B">
        <Consumer /> // 同理，此处会渲染成 <div>B</div>
      </PathContext.Provider>
    </PathContext.Provider>
  );
}

function Consumer() {
  const path = useContext(PathContext);
  return <div>{path}</div>;
}
