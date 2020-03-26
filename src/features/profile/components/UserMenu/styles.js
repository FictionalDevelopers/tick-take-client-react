export default ({ palette, typography }) => {
  return {
    root: {},
    trigger: {
      fontSize: 18,
    },
    infoItem: {
      paddingBottom: 6,
      borderBottom: [[1, 'solid', palette.divider]],
      lineHeight: 1.5,
      '&:focus': {
        outline: 'none',
      },
    },
    name: {
      color: palette.text.secondary,
      ...typography.subtitle1,
    },
  };
};
