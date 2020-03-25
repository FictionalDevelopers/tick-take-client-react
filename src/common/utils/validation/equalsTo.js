function equalsTo(getCompareTo, { message = 'Fields dont\'t match' } = {}) {
  return (value, otherValues) => {
    if (value && value !== getCompareTo(otherValues)) {
      return message;
    }
  };
}

export default equalsTo;
