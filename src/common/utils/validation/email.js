import { validate } from 'email-validator';

function email(value) {
  if (value && !validate(value)) {
    return 'Invalid email.';
  }
}

export default email;
