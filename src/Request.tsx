import { useParams } from 'react-router-dom';

const RequestPane = () => {
  const params = useParams();
  return (
    <div>
      RequestPane
      {JSON.stringify(params)}
    </div>
  );
};

export default RequestPane;
