export default (theme) => {
  return {
    root: {
      padding: [[20, 0]],
    },
    title: {
      fontSize: 12,
      letterSpacing : 2,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      color: '#677694',
      fontWeight: 'bold',
      padding: [[0, 20]],
      textTransform: 'uppercase',
    },
    closedTitle: {
      marginBottom : 0,
    },
    icon: {
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short,
      }),
    },
    rotated: {
      transform: 'rotate(-180deg)',
    },
    collapse: {
      overflow: 'hidden',
      transition: theme.transitions.create(['max-height'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    collapseHidden: {
      transition: theme.transitions.create(['max-height'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    content: {
      paddingTop : 10,
    },
  };
};
