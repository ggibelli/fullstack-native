import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackground: '#24292e',
    white: '#fff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      native: 'System',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400' as const,
    bold: '700' as const,
  },
};

export default theme;
