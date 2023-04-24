import React, { FC } from 'react';
import cn from 'classnames';

import { SubscribeProps } from './types';
import { Button } from '../../ui/button';
import { ButtonColor, ButtonSize } from '../../types/ui/button';
import { ICONS } from '../../consts/icons';

import s from './styles.module.scss';
import { useFormContext } from 'react-hook-form';

const Subscribe: FC<SubscribeProps> = ({ value, title, contentList }) => {
  const { setValue, watch } = useFormContext();
  const isSubscribed = watch(value);

  const subscribeButtonHandler = () => {
    setValue(value, !isSubscribed);
  };

  const subscribeClassName = cn(s.subscribe, isSubscribed && s.active);
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
          <Button size={ButtonSize.L} onClick={subscribeButtonHandler} color={ButtonColor.Green}>
            Subscribe
          </Button>
        ) : (
          <div className={s.subscribeSuccess}>
            <span>You are subscribed</span>
            <Button size={ButtonSize.L} Icon={ICONS.Close} onClick={subscribeButtonHandler} color={ButtonColor.White}>
              Cancel subscription
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export { Subscribe };
