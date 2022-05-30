class Field {
  // 使用 value 关键字管理数据项对应的值属性
  value: any;
  // 数据项对应的其他变量接口声明
  [key: string | number | symbol]: any;
}

class ObjectField extends Field {
  // 对象数据节点的 value 是一个以字符串为关键字的子节点字典
  value: {
    [key: string]: Field;
  };
}

class ArrayField extends Field {
  // 数组数据节点的 value 是以数值为索引的一组有序子节点
  value: Field[];
}
