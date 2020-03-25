export default ({ breakpoints, spacing }) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    content: {
      transform: 'translateY(-20%)',
      width: '90%',

      [breakpoints.up('sm')]: {
        width: 500,
      },
    },
    title: {
      marginBottom: spacing(2),
    },
  };
};
