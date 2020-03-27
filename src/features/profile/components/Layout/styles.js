const SIDEBAR_WIDTH = 150;
const HEADER_HEIGHT = 50;

export default () => {
  return {
    root: {},
    header: {
      width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      height: HEADER_HEIGHT,
      flexDirection: 'row',
      alignItems: 'center',
      padding: [[0, 10]],
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
      padding: [[50, 30, 20]],
    }
  };
};
