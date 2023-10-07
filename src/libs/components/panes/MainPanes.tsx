import Icon, { ExclamationCircleFilled } from '@ant-design/icons';
import { css } from '@emotion/react';
import { App, Select, Tabs, theme } from 'antd';
import { FC, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import DraggableTabs from './DraggableTabs';

// import { MenuTypeEnum, PageTypeEnum } from '../../constant';
// import { treeFind } from '../../helpers/collection/util';
// import { getMethodLabelColorClassOf } from '../../helpers/rest/labelColoring';
// import { useCustomNavigate } from '../../router/useCustomRouter';
// import { MainContext } from '../../store/content/MainContent';
// import DraggableTabs from '../DraggableTabs';
// import IconsEnvironment from '../icons/Environment';
// import Environment from './Environment.tsx';
// import FolderPane from './FolderPane';
// import Request from './Request.tsx';
// import RunPane from './RunPane';
const { useToken } = theme;
const RequestTabTitle: FC<{ method: string; name: string }> = ({ method, name }) => {
  return (
    <div>
      <span
        css={css`
          color: ${'#d9d9d9'};
        `}
      >
        {method}
      </span>
      <span
        css={css`
          margin-left: 8px;
        `}
      >
        {name}
      </span>
    </div>
  );
};

interface MainPanesProps {
  onEdit: () => void;
  activePane: any;
  panes: any[];
  activeEnvironment: any;
  environments: any[];
  onSelectPane: () => void;
  onSelectEnvironment: () => void;
}
const MainPanes: FC<MainPanesProps> = ({
  environments = [],
  activePane,
  onSelectPane,
  panes,
  onEdit,
}) => {
  const { token } = useToken();
  return (
    <div>
      <DraggableTabs
        activeKey={activePane}
        onChange={(activeKey) => {
          onSelectPane(activeKey);
        }}
        onEdit={onEdit}
        size='small'
        type='editable-card'
        tabBarGutter={-1}
        items={panes.map((pane) => {
          return {
            key: pane.key,
            label: pane.label,
            children: pane.children,
          };
        })}
        tabBarExtraContent={
          <Select
            size={'small'}
            css={css`
              border-left: 1px solid ${token.colorSplit};
            `}
            value={'activeEnvironment'}
            bordered={false}
            style={{
              width: '180px',
              padding: '4px',
              marginRight: '10px',
            }}
            options={[
              ...environments.map(({ key, value }) => ({ label: key, value })),
              { label: 'No environment', value: 'No environment' },
            ]}
            onSelect={(value) => {}}
          />
        }
      />
    </div>
  );
};

export default MainPanes;
