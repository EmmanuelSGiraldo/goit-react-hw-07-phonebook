// Loader.js
import { RotatingLines } from 'react-loader-spinner';
import { wrap } from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={wrap}>
      <RotatingLines
        strokeColor="#FF00FF" 
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
