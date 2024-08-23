import { FC, ReactNode, useContext, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { NavigateFunction, useNavigate } from "react-router";
import { queryClient } from "../../api/queryClient";
import { logoutUser } from "../../api/UserApi";
import AuthContext from "../../context/AuthProvider";
import Button from "../Button/Button";
import "./UserSettings.scss";

const UserSettings: FC = (): ReactNode => {
  const navigate: NavigateFunction = useNavigate();
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
        currentUser &&
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

            <Button
              className="button button-primary"
              onClick={() => handleLogout()}
              isLoading={logoutMutation.isPending}
            >Выйти из аккаунта</Button>
          </>
      }
    </div>
  );
};

export default UserSettings;
