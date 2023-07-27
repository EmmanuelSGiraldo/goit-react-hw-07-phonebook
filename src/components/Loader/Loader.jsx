import { RotatingLines } from "react-loader-spinner";
import { wrap } from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={wrap}>
      <RotatingLines
        strokeColor="#000000"
        strokeWidth="5"
        animationDuration="0.50"
        width="96"
        visible={true}
      />
    </div>
  );
};
