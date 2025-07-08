import { Navigate } from 'react-router-dom';
import useAuthen from './useAuthen';
import Error from '../pages/Error';

const AdminRoute = ({ element }) => {
  const user = useAuthen();

  if (user === null) {
    return <Error />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!user.is_admin) {
    return <Error />;
  }

  return element;
};

export default AdminRoute;
