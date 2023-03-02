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
              primary: '#f1f1f1',
              secondary: 'rgba(255, 255, 255, 0.7)',
              disabled: 'rgba(255, 255, 255, 0.5)',
              icon: '#22194D'
            },
            divider: 'rgba(255, 255, 255, 0.12)',
            background: {
              paper: '#121212',
              default: '#121212'
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
              primary: 'rgba(0, 0, 0, 0.87)',
              secondary: 'rgba(0, 0, 0, 0.6)',
              disabled: 'rgba(0, 0, 0, 0.38)'
            },
            divider: 'rgba(0, 0, 0, 0.12)',
            background: {
              paper: '#f1f1f1',
              default: '#f1f1f1'
            }
          })
    },
    typography: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 16,
      h1: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 40
      },
      h2: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 32
      },
      h3: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 24
      },
      h4: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 20
      },
      h5: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 16
      },
      h6: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 14
      }
    }
  }
}
