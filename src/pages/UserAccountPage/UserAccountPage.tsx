import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '../../api/UserApi';
import Layout from '../../components/Layout/Layout';
import "./UserAccountPage.scss"
import { queryClient } from '../../api/queryClient';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';

const UserAccountPage = () => {
  const navigate = useNavigate();

  const {currentUser} = useContext(AuthContext);

  const logoutMutation = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users", "current"], })
      navigate("/")
    }
  }, queryClient)

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <Layout>
      <section className="account">
        <div className="container">
          {
            currentUser && <p>User: <span>{currentUser.name}</span></p>
          }

          <button
            className="button button-primary"
            onClick={() => handleLogout()}
          >Выйти</button>
        </div>
      </section>
    </Layout>
  );
};

export default UserAccountPage;
