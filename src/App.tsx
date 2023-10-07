
import {PrcConfigProvider} from "@/remocollab/prc-base/PrcConfigProvider.tsx";
import {useLocation, useNavigate, useRoutes} from "react-router-dom";
import routes from "~react-pages";
import {Suspense} from "react";
import {Button, Table, Tree} from "antd";
import {TreeNode} from "@/remocollab/prc-base/token.ts";
import {css} from "@emotion/react";
const App = () => {
  console.log(routes,'routes')

  const nav = useNavigate()
  const loc  = useLocation()
  function genTree(tree, path = '') {
    return tree.map((item) => {
      const fullPath = `${path}/${item.path}`.replace(/^\//, '');

      return {
        title: item.path,
        key: fullPath,
        children: item.children ? genTree(item.children, fullPath) : []
      }
    })
  }


  return (
    <PrcConfigProvider>
      <Button type={'primary'} css={css`position: fixed;right: 20px;bottom: 20px`} onClick={()=>{
        nav('/')
      }}>回到目录</Button>
      {
        loc.pathname ==='/'&&<Tree treeData={genTree(routes)} defaultExpandAll={true} onSelect={(key)=>{
          nav(`/${key[0]}`)
        }}/>
      }
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </PrcConfigProvider>
  );
};

export default App;
