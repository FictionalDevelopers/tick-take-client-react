import composeValidators from './composeValidators';
import required from './required';
import notEmpty from './notEmpty';

export default composeValidators(required, notEmpty);
