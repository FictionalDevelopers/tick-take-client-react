const SIDEBAR_WIDTH = 150;
const HEADER_HEIGHT = 60;

export default ({ spacing }) => {
  return {
    root: {},
    header: {
      width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      height: HEADER_HEIGHT,
      flexDirection: 'row',
      alignItems: 'center',
      padding: [[0, spacing(2)]],
      justifyContent: 'flex-end',
    },
    sidebar: {
      width: SIDEBAR_WIDTH,
    },
    content: {
      width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      marginLeft: SIDEBAR_WIDTH,
      marginTop: HEADER_HEIGHT,
      minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
      padding: [[30, 30, 20]],
    },
  };
};
