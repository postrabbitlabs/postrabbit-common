
import {PrcConfigProvider} from "@/remocollab/prc-base/PrcConfigProvider.tsx";
import {useRoutes} from "react-router-dom";
import routes from "~react-pages";
import {Suspense} from "react";
import { Table } from "antd";
const App = () => {
  console.log(routes,'routes')


  const columns = [
    {
      title: '姓名',
      dataIndex: 'path',
      key: 'path',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  function tree2list(tree) {
    const list = []
    const queue = [...tree]
    while(queue.length) {
      const node = queue.shift()
      const children = node.children
      if(children) {
        queue.push(...children)
      }
      list.push(node)
    }
    return list
  }


  return (
    <PrcConfigProvider>
      {/*换成树*/}
      <Table dataSource={tree2list(routes)} columns={columns} />
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </PrcConfigProvider>
  );
};

export default App;
