import React, { FC } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { SectionTitle } from '../../section-title';
import { InputText } from '../../../ui/inputs/input-text';
import { AuthFormProps } from './types';
import { authFormFieldset } from './consts';
import { emailPattern } from '../../../consts/common';
import { nextProgressStep } from '../../../store/reducers/common';
import { Button } from '../../../ui/button';
import { ButtonColor, ButtonSize } from '../../../types/ui/button';
import { ICONS } from '../../../consts/icons';
import { InputPassword } from '../../../ui/inputs/input-password';
import { ReactComponent as GoogleLogoIcon } from '../../../assets/icons/googleLogo.svg';
import { ReactComponent as AppleLogoIcon } from '../../../assets/icons/appleLogo.svg';
import { Link } from 'react-router-dom';

import s from './styles.module.scss';

const AuthForm: FC<AuthFormProps> = ({ changeCurrentTab }) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(nextProgressStep());
    changeCurrentTab(2);
  };

  const buttonGoogleClassName = cn(s.authButton, s.buttonGoogle);
  const buttonAppleClassName = cn(s.authButton, s.buttonApple);

  return (
    <FormProvider {...methods}>
      <div className={s.authFormContainer}>
        <form className={s.authForm} onSubmit={handleSubmit(onSubmit)}>
          <SectionTitle title="Sign in" />
          <div className={s.inputContainer}>
            <InputText
              value={authFormFieldset.email.value}
              placeholder={authFormFieldset.email.placeholder}
              pattern={emailPattern}
            />
            <InputPassword />
            <button className={s.forgotButton} onClick={() => console.log('click')} type="button">
              Forgot your password?
            </button>
          </div>

          <Button size={ButtonSize.XL} color={ButtonColor.Green} Icon={ICONS.ArrowRight} iconRight type="submit">
            Sign in
          </Button>
        </form>
        <div className={s.separatorContainer}>
          <span className={s.separator}>or</span>
        </div>
        <div className={s.loginMethods}>
          <button type="button" className={buttonGoogleClassName}>
            <GoogleLogoIcon />
            <span>Sign Up with Google</span>
          </button>
          <button type="button" className={buttonAppleClassName}>
            <AppleLogoIcon />
            Sign Up with Apple
          </button>
        </div>
        <p className={s.authFormTermsText}>
          {`By continuing, you are indicating that you have read and agree to the \n`}
          <Link to="#">Terms of Use</Link> and <Link to="#">Privacy Policy</Link>
        </p>
        <p className={s.authFormSignUpText}>
          Don’t have a Deal Answer account yet? <Link to="#">Sign up now.</Link>
        </p>
      </div>
    </FormProvider>
  );
};

export { AuthForm };
