import {
    createTheme
} from '@mui/material/styles';

import param from './main.theme.param';
import typography from './main.theme.typography';
import baseline from './main.theme.baseline';
import button from './main.theme.button';
import textfield from './main.theme.textfield';
import slider from './main.theme.slider';

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
            main: param.PRIMARY_COLOR,
        },
    },
    typography: typography,
    components: {
        MuiCssBaseline: baseline,
        MuiTextField: textfield,
        MuiSlider: slider,
        MuiButton: button
    }
});

export default MainTheme;