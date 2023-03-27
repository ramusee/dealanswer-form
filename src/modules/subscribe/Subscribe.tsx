import React, { FC, useState } from 'react';
import cn from 'classnames';

import { SubscribeProps } from './types';
import { Button } from '../../elements/button';
import { ButtonColor, ButtonSize } from '../../types/button';
import { ICONS } from '../../consts/icons';

import s from './styles.module.scss';

const Subscribe: FC<SubscribeProps> = ({ title, contentList }) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const subscribeClassName = cn(s.subscribe, isSubscribed && s.active);
  const subscribeButtonHandler = () => {
    setIsSubscribed(prevState => !prevState);
  };

  return (
    <div className={subscribeClassName}>
      <span>{title}</span>
      <ul className={s.subscribeContent}>
        {contentList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className={s.subscribeFooter}>
        <span>$1,000/month</span>
        {!isSubscribed ? (
          <Button
            size={ButtonSize.L}
            onClick={subscribeButtonHandler}
            color={ButtonColor.Green}
          >
            Subscribe
          </Button>
        ) : (
          <div className={s.subscribeSuccess}>
            <span>You are subscribed</span>
            <Button
              size={ButtonSize.L}
              Icon={ICONS.Close}
              onClick={subscribeButtonHandler}
              color={ButtonColor.White}
            >
              Cancel subscription
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export { Subscribe };
