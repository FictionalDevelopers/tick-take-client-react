function notEmpty(message = 'This field should not be empty.') {
  return (value) => {
    if (value && value.trim() === '') {
      return message;
    }
  };
}

export default notEmpty;
