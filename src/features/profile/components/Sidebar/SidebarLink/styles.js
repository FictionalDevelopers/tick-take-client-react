export default ({ palette }) => {
  return {
    root: {
      fontSize: 16,
      display: 'block',
      padding: [[10, 20]],
      color: '#fff',
      '&:hover': {
        backgroundColor: 'rgba(128, 203, 196, 0.4)',
      },
      '&:hover, &:focus': {
        textDecoration: 'none',
      },
    },
    active: {
      backgroundColor: palette.primary.main,
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: palette.primary.main,
      },
    },
  };
};
