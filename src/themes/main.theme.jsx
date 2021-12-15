import {
    createTheme
} from '@mui/material/styles';

const BG_COLOR = '#181818';
const PRIMARY_COLOR = '#ffffff';
const NO_COLOR = 'transparent';
const TEXT_COLOR_DARK = '#121212';
const DEFAULT_FONT = "'Ubuntu', sans-serif";
const SMALL_BUTTON_FONT = "'Open Sans', sans-serif";

const MainTheme = createTheme({
    spacing: 1,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1024,
            xl: 1440,
        }
    },
    palette: {
        primary: {
            main: PRIMARY_COLOR,
        },
    },
    typography: {
        fontFamily: DEFAULT_FONT,
        h4: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '30px',
            lineHeight: '150%',
            letterSpacing: '0.25px'
        },
        h5: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '150%',
        },
        body2: {
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '14px',
            lineHeight: '150%',
            letterSpacing: '0.25px'
        },
        button: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '100%',
            textTransform: 'uppercase'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: BG_COLOR,
                    color: PRIMARY_COLOR
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: 60,
                }
            }
        },

        MuiInputBase: {
            styleOverrides: {

                input: {
                    backgroundColor: NO_COLOR,

                    color: PRIMARY_COLOR,


                    paddingTop: '20px !important',
                    paddingLeft: '18px !important',
                    paddingBottom: '19px !important',

                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 14,
                    lineHeight: '150%',
                    letterSpacing: '0.25px',
                },
            }
        },
        MuiSlider: {

        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'general' },
                    style: {
                        backgroundColor: PRIMARY_COLOR,
                        borderRadius: 4,
                        border: '1px solid',
                        color: TEXT_COLOR_DARK,
                        height: 40,
                        fontSize: 14,
                        lineHeight: '100%',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        "&:hover": {
                            color: PRIMARY_COLOR,
                            backgroundColor: 'transparent',
                            borderColor: PRIMARY_COLOR
                        }
                    },
                },
            ],
            styleOverrides: {
                // "outlined" variant
                outlined: {
                    backgroundColor: BG_COLOR,
                    borderRadius: 20,
                    borderColor: PRIMARY_COLOR,
                    color: PRIMARY_COLOR,
                    height: 29,

                    fontFamily: SMALL_BUTTON_FONT,
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 12,
                    lineHeight: '100%',
                    textTransform: 'capitalize',

                    "&:hover": {
                        color: TEXT_COLOR_DARK,
                        backgroundColor: PRIMARY_COLOR,
                    }
                },

                // "contained" variant
                contained: {
                    backgroundColor: PRIMARY_COLOR,
                    borderRadius: 20,
                    color: TEXT_COLOR_DARK,
                    height: 29,

                    fontFamily: SMALL_BUTTON_FONT,
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 12,
                    lineHeight: '100%',
                    textTransform: 'capitalize',

                    "&:hover": {
                        color: PRIMARY_COLOR,
                        backgroundColor: TEXT_COLOR_DARK,
                        border: '1px solid',
                        borderColor: PRIMARY_COLOR
                    }
                }
            }
        }
    }
});

export default MainTheme;