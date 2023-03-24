const VALID_FORMATS = ['pdf', 'jpg', 'jpeg', 'png'];

const ERROR_MESSAGES = {
  FORMAT: 'File must be in format: pdf, jpg, jpeg, png',
  SIZE: 'File could not be bigger than 7 mb',
  DEFAULT: 'Something went wrong. Try again.',
};

const MAX_SIZE = 7e6;

export { VALID_FORMATS, ERROR_MESSAGES, MAX_SIZE };
