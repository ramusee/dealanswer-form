import React from 'react';
import videoBg from '../../assets/videos/mainBg.mp4';
import s from './styles.module.scss';

const BackgroundVideo = () => {
  return (
    <div className={s.backgroundContainer}>
      <video className={s.video} src={videoBg} autoPlay loop muted />
    </div>
  );
};

export { BackgroundVideo };
