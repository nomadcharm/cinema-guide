import { useNavigate } from "react-router";
import "./UserSettings.scss";
import { useMutation } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { queryClient } from "../../api/queryClient";
import { logoutUser } from "../../api/UserApi";
import AuthContext from "../../context/AuthProvider";

const UserSettings = () => {
  const navigate = useNavigate();
  const { currentUser, getCurrentUser, clearCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const logoutMutation = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess() {
      clearCurrentUser();
      navigate("/");
    }
  }, queryClient);

  const handleLogout = (): void => {
    logoutMutation.mutate();
  };

  return (
    <div className="user">
      {
        currentUser ?
          <>
            <div className="user__data">
              <div className="user__info">
                <p className="user__initials">
                  {currentUser.name.substring(0, 1)}{currentUser.surname.substring(0, 1)}
                </p>
                <div>
                  <p className="user__category">Имя Фамилия</p>
                  <p className="user__details">{currentUser.name} {currentUser.surname}</p>
                </div>
              </div>
              <div className="user__info user__info--email">
                <div>
                  <p className="user__category">Электронная почта</p>
                  <p className="user__details">{currentUser.email}</p>
                </div>
              </div>
            </div>

            <button
              className="button button-primary"
              onClick={() => handleLogout()}
            >Выйти из аккаунта</button>
          </> :
          <img src="https://media.tenor.com/_BiwWBWhYucAAAAe/what-huh.png" alt="" />
      }
    </div>
  )
}

export default UserSettings