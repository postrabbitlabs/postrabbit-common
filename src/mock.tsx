import Environment from './Environment.tsx';
import CollectionMenus from './libs/components/menus/Collection.tsx';
import EnvironmentMenus from './libs/components/menus/Environment.tsx';
import Request from './Request.tsx';

export const mockPanes = [
  {
    key: '1',
    title: 'request',
    pageType: 'request',
    rawId: '1',
    menuType: 'collection',
    edited: false,
    children: <Request />,
    label: <div>asfas</div>,
  },
  {
    key: '2',
    title: 'environment',
    pageType: 'environment',
    rawId: '1',
    menuType: 'environment',
    edited: false,
    children: <Environment />,
    label: <div>asfas11111</div>,
  },
];

export const mockEnvironments = [
  {
    key: '1',
    name: 'test',
    variable: [
      {
        key: '1',
        value: '1',
      },
    ],
  },
];

export const mockMenus = [
  {
    key: 'collection',
    label: 'collection',
    component: <CollectionMenus />,
  },
  {
    key: 'environment',
    label: 'collection',
    component: <EnvironmentMenus />,
  },
];
