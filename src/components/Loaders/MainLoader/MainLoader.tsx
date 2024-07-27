import { FC, ReactElement } from "react";
import "./Loader.scss";

const MainLoader: FC = (): ReactElement => {
  return (
    <div className="loader">
      <div className="loader__inner" />
    </div>  
  );
};

export default MainLoader;
