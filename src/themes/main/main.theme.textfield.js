import param from './main.theme.param';
import {
    MainThemeFont_Body2
} from './main.theme.font.style';
import Util from '../../tools/util';

const MainThemeTextField = {
    styleOverrides: {
        root: {

            fieldset: {
                border: 'none'
            },
            input: {
                backgroundColor: param.NO_COLOR,

                color: param.PRIMARY_COLOR,


                height: 60,
                boxSizing: 'border-box',

                paddingTop: '17.5px !important',
                paddingLeft: '15px !important',
                paddingRight: '15px !important',
                // paddingBottom: '19px !important',

                border: '3px solid',
                borderColor: param.TEXT_FIELD_BORDER_COLOR,
                borderRadius: 6,

                "&::placeholder": {
                    color: '#FFFFFF',
                    opacity: 0.3
                },

                "&:focus": {
                    borderColor: param.TEXT_FIELD_FOCUS_BORDER_COLOR,
                },
                "&:hover": {
                    borderColor: param.TEXT_FIELD_FOCUS_BORDER_COLOR,
                }

            },


        }
    }
}

// Apply font style
MainThemeTextField.styleOverrides.root.input = Util.deepMerge(
    MainThemeFont_Body2,
    MainThemeTextField.styleOverrides.root.input);

export default MainThemeTextField;