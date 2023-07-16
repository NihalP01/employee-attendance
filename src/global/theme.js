import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      ms: 500,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  typography: {
    subtitle1: {
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    subBody: {
      fontSize: '.875rem',
      lineHeight: '1.25rem',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    body3: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
    },
    h1: {
      fontWeight: 500,
    },
    contentCard: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      fontSize: 16,
    },
    headerMenu: {
      fontSize: '0.9rem',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      xbold: 800,
    },
    fontFamily: {
      inter: `"Inter", sans-serif`,
    },
    lineHeight: {
      base: 1.5,
      header: 1.25,
    },
  },
  palette: {
    primary: {
      main: '#4F46E5',
      secondary: '#00b0ff',
      dark: '#00356A',
      light: '#EFF7FF',
    },
    border: {},
    neutral: {},
    text: {
      primary: '#353131',
      secondary: '#6B7280',
      // color: '#353131',
    },
    button: {
      main: '#4F46E5',
      size: '48px',
    },
    blue: {
      one: '#483eef',
      two: '#4F46E5',
    },
    red: {},
    green: {},
    yellow: {},
  },
});

theme.typography.body1 = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
};

theme.typography.h1 = {
  fontSize: '2.25rem',
  lineHeight: '2.7rem',
  fontWeight: 500,
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    lineHeight: '3.35rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '4.5rem',
    lineHeight: '5rem',
  },
};

theme.typography.subHeader = {
  fontSize: '1.875rem',
  lineHeight: '2.25rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
  },
};

theme.typography.cardHeading = {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
  },
};

theme.typography.list = {
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
};

theme.typography.title2 = {
  fontSize: '1.875rem',
  lineHeight: '1.25rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '3rem',
  },
};

theme.typography.landing = {
  fontSize: '2.25rem',
  lineHeight: '2.7rem',
  fontWeight: 500,
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    lineHeight: '3.35rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '3.8rem',
    lineHeight: '3.8rem',
  },
};
