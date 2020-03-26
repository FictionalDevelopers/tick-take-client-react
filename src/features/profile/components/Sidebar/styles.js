export default () => {
  return {
    root: {
      padding: [[20, 0]],
      backgroundColor: '#031b4d',
      color: '#fff',
    },
    section: {
      '&:not(:last-of-type)': {
        borderBottom: [[1, 'solid', 'rgba(180,188,199,.32)']],
      },
    },
    logoSection: {
      padding: [[0, 15]],
      borderBottom: 'none',
    },
  };
};
