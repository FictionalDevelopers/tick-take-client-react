function notEmpty(value) {
  if (value && value.trim() === '') {
    return 'This field should not be empty.';
  }
}

export default notEmpty;
