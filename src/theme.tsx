  export const baseTheme = {
    colors: {
      sand: '#F7E4CB',
      softBlack: '#0A121A',
      olive: '#4E6659',
      coral: '#FF5E6F',
      white: '#FFFFFF'
    },
    fonts: {
      main: 'Arial, sans-serif',
      heading: 'Impact, serif',
      direction: 'ltr'
    },
    margins: {
      gap: '2.5vmax',
      margin: '5vmax',
      padding: '2vmax'
    }
  };

  export const darkTheme = {
    ...baseTheme,
      textColor: '#0A121A',
      backgroundColor: '#0A121A',
      contrastColor: '#FFFFFF',
  }

  export const lightTheme = {
    ...baseTheme,
    textColor: '#FFFFFF',
    backgroundColor: '#F7E4CB',
    contrastColor: '#0A121A',
}


export const coralTheme = {
  ...baseTheme,
  textColor: '#0A121A',
  backgroundColor: '#FF5E6F',
  contrastColor: '#FFFFFF',

}

export const oliveTheme = {
  ...baseTheme,
  textColor: '#4E6659',
  backgroundColor: '#4E6659',
  contrastColor: '#F7E4CB',
}