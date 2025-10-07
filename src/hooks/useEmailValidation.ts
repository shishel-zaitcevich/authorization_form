import { useState } from 'react';
import { validateEmail } from '../lib/validation';

export const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [touched, setTouched] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (touched) {
      setEmailError(validateEmail(value));
    }
  };

  const handleEmailBlur = () => {
    setTouched(true);
    setEmailError(validateEmail(email));
  };

  const validateBeforeSubmit = (): boolean => {
    const error = validateEmail(email);
    if (error) {
      setTouched(true);
      setEmailError(error);
      return false;
    }
    return true;
  };

  return {
    email,
    emailError,
    touched,
    handleEmailChange,
    handleEmailBlur,
    validateBeforeSubmit,
  };
};
