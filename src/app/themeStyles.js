/**
 * Main Red: #990A25
 * Main Blue: #2B3784
 */
const theme = {
    actionButton: {
        backgroundColor: 'rgba(43, 55, 132, 1)',
        padding: [11, 23, 11, 23],
        color: '#ffffff',
        cursor: 'pointer',
        fontWeight: 900,
        borderColor: '#223699',
        '&:hover': {
          backgroundColor: '#223699',
        }
    },
    primary: {
      backgroundColor: 'rgba(255, 255, 255,1)',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: 'rgba(30,40,60,0.05)',
      color: '#5a28be',
    },
    callToAction: {
      color: '#ffffff',
      padding: [11, 23, 11, 23],
      border: {
        radius: '29px',
      },
      borderColor: 'rgba(223, 31, 45, 1)',
      backgroundColor: '#990A25',
      cursor: 'pointer',
    },
    cosmicRed: {
      backgroundColor: 'rgba(153, 10, 37, 1)', 
      color: '#990a25',
    },
    primaryRed: {
        backgroundColor: 'rgba(177, 19, 19, 1)',
        color: '#2B3784',
    },
    primaryBlue: {
      backgroundColor: 'rgba(43, 55, 132, 1)',
      color: '#2B3784',
    },
  };
  
  export default {
    '@global': {
      'body': {
        backgroundColor: theme.primary.backgroundColor,
        color: theme.primary.color,
      },
      // we should not override properties like I'm doing below
      // short term solution
      '.app__header': {
        backgroundColor: '#1c2b39',
        '&:before': {
          backgroundColor: 'unset',
        },
      },
      '.app__logo': {
        width: '15rem !important',    
      },
    },
    ...theme,
  };
  