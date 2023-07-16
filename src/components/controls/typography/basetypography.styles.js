import { Typography, styled } from '@mui/material';

export const CustomTypography = styled(Typography)(
  ({ theme, color, fontSize, margin, variant, paddingxs }) => ({
    variant: variant,
    fontSize: fontSize ? fontSize : '',
    color: color ? color : theme.palette.text.primary,
    margin: margin ? margin : '',
    [theme.breakpoints.down('xs')]: {
      padding: paddingxs ? paddingxs : '0rem',
    },
  })
);
