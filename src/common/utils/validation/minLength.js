function minLength(length) {
  return value => {
    if (value && value.length < length) {
      return `Should be at least ${length} characters long.`;
    }
  };
}

export default minLength;
