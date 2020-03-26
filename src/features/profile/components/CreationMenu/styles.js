export default ({ palette, typography }) => {
  console.log(palette);
  return {
    root: {},
    trigger: {},
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    caption: {
      color: palette.text.hint,
      ...typography.caption,
    },
  };
};
