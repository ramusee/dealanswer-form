import React from 'react';
import videoBg from '../../assets/videos/mainBg.mp4';
import backgroundImage from '../../assets/images/backgroundImage.jpg';
import s from './styles.module.scss';

const BackgroundVideo = () => {
  return (
    <div className={s.backgroundContainer}>
      {/*<video className={s.video} src={videoBg} autoPlay loop muted />*/}
      <img src={backgroundImage} className={s.video} alt="background image" />
    </div>
  );
};

export { BackgroundVideo };
