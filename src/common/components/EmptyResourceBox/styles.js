export default ({ spacing, palette, shape, ...t }) => {
  return {
    root: {
      padding: spacing(4),
      border: [[2, 'solid', palette.grey[200]]],
      borderRadius: shape.borderRadius,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontWeight: 500,
    },
    subheader: {
      paddingTop: spacing(2),
    },
    action: {
      paddingTop: spacing(4),
    },
  };
};
