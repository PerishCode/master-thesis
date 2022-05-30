// 略去部分相似的代码实现
function Form() {
  const [globalData, setGlobalData] = useState({});

  return (
    <>
      <BasicInfo 
        data={globalData.basicInfo} 
        onChange={setGlobalData} />
      <PageSchedule />
    </>
  );
}

function BasicInfo(props) {
  const { data, onChange } = props;

  const [title] = useState("基础信息")

  return (
    <Card title={title}>
      <ID data={data.id} onChange={onChange} />
      <DeployTime />
      <OnlineTime />
    </Card>
  );
}

function ID(props) {
  const { data, onChange } = props;

  const [title] = useState("ID");

  return (
    <Item title={title}>
      <Input value={data} onChange={onChange} />
    </Item>
  );
}
