export default ({ spacing }) => {
  return {
    field: {
      '&:not(:last-of-type)': {
        marginBottom: spacing(3),
      },
    },
    footer: {
      display: 'flex',
      marginTop: 20,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  };
};
