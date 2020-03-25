function required(value) {
  if (!value) {
    return 'This field is required.';
  }
}

export default required;
