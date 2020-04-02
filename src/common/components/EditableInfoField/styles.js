export default ({ palette, shape, transitions }) => {
  return {
    root: {
      display: 'inline-block',
      borderRadius: shape.borderRadius,
      border: [[1, 'dashed', 'transparent']],
      cursor: 'pointer',
      transition: transitions.create(['border-color', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shortest,
      }),
      overflow: 'hidden',
      '&:hover': {
        borderColor: palette.grey[400],
        backgroundColor: palette.grey[100],
      },
    },
    editRoot: {
      backgroundColor: palette.grey[100],
      borderColor: palette.grey[900],
      '&:hover': {
        borderColor: palette.grey[900],
      },
    },
    inner: {
      padding: 10,
    },
    content: {
      '&:focus': {
        outline: 'none',
      },
    },
    actions: {
      height: 0,
      marginTop: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      overflow: 'hidden',
      transition: transitions.create(['height', 'marginTop'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shortest,
      }),
    },
    editActions: {
      marginTop: 5,
      height: 36,
    },
    action: {
      minWidth: 'auto',
    },
  };
};
