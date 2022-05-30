class Observation {
    /** 封装 React.memo 方法，将一般的组件封装为响应式组件，实现数据变化时的自动重绘 */
    static memo(
      reactiveFactory: ReactiveFactory,
      render: FunctionComponent
    ) {
      const reactiveComponent = new Observation(reactiveFactory, render);
  
      return React.memo(() => {
        // 1. 注册 forceUpdate 方法，实现自动触发渲染
        // 2. 注册 dispose 方法，实现自动释放监听事件
        reactiveComponent.forceUpdate = useForceUpdate();
        useEffect(() => reactiveComponent.dispose, []);
        return reactiveComponent.element;
      });
    }

    // 构造函数
    constructor(reactiveFactory, render) {}
  
    // 注册到组件卸载生命周期的方法， 用于注销 forceUpdate 函数
    private dispose();
  
    private get element() {
      // 注册 forceUpdate 函数
      // 执行渲染方法返回 VDOM
      return this.render() 
    }
  }