import { FC, ReactElement } from "react";
import "./Preloader.scss";

const Preloader: FC = (): ReactElement => {
  return (
    <div className="preloader">
      <div className="preloader__inner" />
    </div>
  );
};

export default Preloader;
