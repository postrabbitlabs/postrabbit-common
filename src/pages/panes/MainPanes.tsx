import { useState } from 'react';

import MainPanes from '@/libs/components/panes/MainPanes.tsx';
import { mockEnvironments, mockMenus, mockPanes } from '@/mock.tsx';

const MainPanesPage = () => {
  function addTab() {
    setPanes([
      ...panes,
      {
        key: '3',
        title: 'request',
        pageType: 'request',
        rawId: '1',
        menuType: 'collection',
        edited: false,
        children: <div>hihao</div>,
        label: <div>asfas</div>,
      },
    ]);
  }
  function removeTab() {}
  const handlePanesEdit: any = (targetKey: string, action: 'add' | 'remove') => {
    console.log(targetKey, action);
    action === 'add' ? addTab() : removeTab(targetKey);
  };

  const [panes, setPanes] = useState(mockPanes);
  const environments = mockEnvironments;
  const menus = mockMenus;

  function onSelectMenu() {}

  function onSelectPane(key) {
    setActivePane(key);
  }

  function onSelectEnvironment() {}

  // const activePane = '1';
  const activeMenu = '';
  const activeEnvironment = '';

  const [activePane, setActivePane] = useState('1');
  return (
    <div>
      <MainPanes
        onEdit={handlePanesEdit}
        activePane={activePane}
        panes={panes}
        activeEnvironment={activeEnvironment}
        environments={environments}
        onSelectPane={onSelectPane}
        onSelectEnvironment={onSelectEnvironment}
      />
    </div>
  );
};

export default MainPanesPage;
