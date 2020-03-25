function composeValidators(...validators) {
  return value => validators.reduce((error, validator) => error || validator(value), null);
}

export default composeValidators;
