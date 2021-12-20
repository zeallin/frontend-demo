import param from './main.theme.param';
import {
    MainThemeFont_Button,
    MainThemeFont_ButtonSmall
} from './main.theme.font.style';
import Util from '../../tools/util';

const MainThemeButton = {
    variants: [{
        props: {
            variant: 'general'
        },
        style: {
            backgroundColor: param.PRIMARY_COLOR,
            borderRadius: 4,
            border: '1px solid',
            borderColor: param.PRIMARY_COLOR,
            color: param.TEXT_COLOR_DARK,
            height: 40,

            // fontSize: 14,
            // lineHeight: '100%',
            // textAlign: 'center',
            // textTransform: 'uppercase',
            "&:hover": {
                color: param.PRIMARY_COLOR,
                backgroundColor: 'transparent',
                borderColor: param.PRIMARY_COLOR
            }
        },
    }, ],
    styleOverrides: {
        // "outlined" variant
        outlined: {
            backgroundColor: param.BG_COLOR,
            borderRadius: 20,
            borderColor: param.PRIMARY_COLOR,
            color: param.PRIMARY_COLOR,
            height: 29,

            // fontFamily: param.SMALL_BUTTON_FONT,
            // fontStyle: 'normal',
            // fontWeight: 600,
            // fontSize: 12,
            // lineHeight: '100%',
            // textTransform: 'capitalize',


            "&:hover": {
                color: param.TEXT_COLOR_DARK,
                backgroundColor: param.PRIMARY_COLOR,
            }
        },

        // "contained" variant
        contained: {
            backgroundColor: param.PRIMARY_COLOR,
            borderRadius: 20,
            color: param.TEXT_COLOR_DARK,
            height: 29,

            // fontFamily: param.SMALL_BUTTON_FONT,
            // fontStyle: 'normal',
            // fontWeight: 600,
            // fontSize: 12,
            // lineHeight: '100%',
            // textTransform: 'capitalize',
            paddingLeft: '17px',
            "&:hover": {
                color: param.PRIMARY_COLOR,
                backgroundColor: param.TEXT_COLOR_DARK,
                border: '1px solid',
                borderColor: param.PRIMARY_COLOR
            }
        }
    }

}

// Apply font style
MainThemeButton.variants[0].style = Util.deepMerge(
    MainThemeFont_Button,
    MainThemeButton.variants[0].style);
MainThemeButton.styleOverrides.outlined = Util.deepMerge(
    MainThemeFont_ButtonSmall,
    MainThemeButton.styleOverrides.outlined);
MainThemeButton.styleOverrides.contained = Util.deepMerge(
    MainThemeFont_ButtonSmall,
    MainThemeButton.styleOverrides.contained);

export default MainThemeButton;