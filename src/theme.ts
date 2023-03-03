import JostThinTTF from '../public/fonts/Jost/static/Jost-Thin.ttf'
import JostExtraLightTTF from '../public/fonts/Jost/static/Jost-ExtraLight.ttf'
import JostLightTTF from '../public/fonts/Jost/static/Jost-Light.ttf'
import JostRegularTTF from '../public/fonts/Jost/static/Jost-Regular.ttf'
import JostMediumTTF from '../public/fonts/Jost/static/Jost-Medium.ttf'
import JostSemiBoldTTF from '../public/fonts/Jost/static/Jost-SemiBold.ttf'
import JostBoldTTF from '../public/fonts/Jost/static/Jost-Bold.ttf'
import JostExtraBoldTTF from '../public/fonts/Jost/static/Jost-ExtraBold.ttf'
import JostBlackTTF from '../public/fonts/Jost/static/Jost-Black.ttf'

export const themeOptions = (mode: 'light' | 'dark') => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            common: {
              black: '#000',
              white: '#fff'
            },
            primary: {
              main: '#3f51b5',
              light: '#6573C3',
              dark: '#2C387E',
              contrastText: '#fff'
            },
            secondary: {
              main: '#f50057',
              light: '#F73378',
              dark: '#AB003C',
              contrastText: '#fff'
            },
            error: {
              main: '#f44336',
              light: '#e57373',
              dark: '#d32f2f',
              contrastText: '#fff'
            },
            warning: {
              main: '#ffa726',
              light: '#ffb74d',
              dark: '#f57c00',
              contrastText: 'rgba(0, 0, 0, 0.87)'
            },
            info: {
              main: '#29b6f6',
              light: '#4fc3f7',
              dark: '#0288d1',
              contrastText: 'rgba(0, 0, 0, 0.87)'
            },
            success: {
              main: '#66bb6a',
              light: '#81c784',
              dark: '#388e3c',
              contrastText: 'rgba(0, 0, 0, 0.87)'
            },
            grey: {
              50: '#fafafa',
              100: '#f5f5f5',
              200: '#eeeeee',
              300: '#e0e0e0',
              400: '#bdbdbd',
              500: '#9e9e9e',
              600: '#757575',
              700: '#616161',
              800: '#424242',
              900: '#212121',
              A100: '#f5f5f5',
              A200: '#eeeeee',
              A400: '#bdbdbd',
              A700: '#616161'
            },
            text:{
              primary: '#ebebf5',
              secondary: 'rgba(255, 255, 255, 0.7)',
              disabled: 'rgba(255, 255, 255, 0.5)',
              icon: '#22194D'
            },
            divider: 'rgba(255, 255, 255, 0.12)',
            background: {
              paper: '#1a1a1aff',
              default: '#1a1a1aff'
            }
          }
        : {
            // palette values for light mode
            common: {
              black: '#000',
              white: '#fff'
            },
            primary: {
              main: '#3f51b5',
              light: '#6573C3',
              dark: '#2C387E',
              contrastText: '#fff'
            },
            secondary: {
              main: '#f50057',
              light: '#F73378',
              dark: '#AB003C',
              contrastText: '#fff'
            },
            error: {
              main: '#d32f2f',
              light: '#ef5350',
              dark: '#c62828',
              contrastText: '#fff'
            },
            warning: {
              main: '#ed6c02',
              light: '#ff9800',
              dark: '#e65100',
              contrastText: '#fff'
            },
            info: {
              main: '#0288d1',
              light: '#03a9f4',
              dark: '#01579b',
              contrastText: '#fff'
            },
            success: {
              main: '#2e7d32',
              light: '#4caf50',
              dark: '#1b5e20',
              contrastText: '#fff'
            },
            grey: {
              50: '#fafafa',
              100: '#f5f5f5',
              200: '#eeeeee',
              300: '#e0e0e0',
              400: '#bdbdbd',
              500: '#9e9e9e',
              600: '#757575',
              700: '#616161',
              800: '#424242',
              900: '#212121',
              A100: '#f5f5f5',
              A200: '#eeeeee',
              A400: '#bdbdbd',
              A700: '#616161'
            },
            text:{
              primary: '#3c3c43',
              secondary: 'rgba(0, 0, 0, 0.6)',
              disabled: 'rgba(0, 0, 0, 0.38)'
            },
            divider: 'rgba(0, 0, 0, 0.12)',
            background: {
              paper: '#fff',
              default: '#fff'
            }
          })
    },
    typography: {
      fontFamily: ['Jost', 'sans-serif'].join(','),
      fontSize: 16,
      h1: {
        fontFamily: ['Jost', 'sans-serif'].join(','),
        fontSize: 40
      },
      h2: {
        fontFamily: ['Jost', 'sans-serif'].join(','),
        fontSize: 32
      },
      h3: {
        fontFamily: ['Jost', 'sans-serif'].join(','),
        fontSize: 24
      },
      h4: {
        fontFamily: ['Jost', 'sans-serif'].join(','),
        fontSize: 20
      },
      h5: {
        fontFamily: ['Jost', 'sans-serif'].join(','),
        fontSize: 16
      },
      h6: {
        fontFamily: ['Jost', 'sans-serif'].join(','),
        fontSize: 14
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Jost';
            font-style: normal;
            font-display: swap;
            font-weight: 100;
            src: local('Jost'), local('Jost-Thin'), url('/fonts/Jost/static/Jost-Thin.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Jost';
            font-style: normal;
            font-display: swap;
            font-weight: 200;
            src: local('Jost'), local('Jost-ExtraLight'), url('/fonts/Jost/static/Jost-ExtraLight.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Jost';
            font-style: normal;
            font-display: swap;
            font-weight: 300;
            src: local('Jost'), local('Jost-Light'), url('/fonts/Jost/static/Jost-Light.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Jost';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Jost'), local('Jost-Regular'), url('/fonts/Jost/static/Jost-Regular.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Jost';
            font-style: normal;
            font-display: swap;
            font-weight: 500;
            src: local('Jost'), local('Jost-Medium'), url('/fonts/Jost/static/Jost-Medium.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Jost';
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src: local('Jost'), local('Jost-SemiBold'), url('/fonts/Jost/static/Jost-SemiBold.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Jost';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: local('Jost'), local('Jost-Bold'), url('/fonts/Jost/static/Jost-Bold.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Jost';
            font-style: normal;
            font-display: swap;
            font-weight: 800;
            src: local('Jost'), local('Jost-ExtraBold'), url('/fonts/Jost/static/Jost-ExtraBold.ttf') format('truetype');
          }
          @font-face {
            font-family: 'Jost';
            font-style: normal;
            font-display: swap;
            font-weight: 900;
            src: local('Jost'), local('Jost-Black'), url('/fonts/Jost/static/Jost-Black.ttf') format('truetype');
          }
        `
      }
    }
  }
}
