import param from './main.theme.param';
import {
    MainThemeFont_H4,
    MainThemeFont_H4_Bold,
    MainThemeFont_H5,
    MainThemeFont_Body2,
    MainThemeFont_Body2_Light,
    MainThemeFont_Button
} from './main.theme.font.style';

const MainThemeTypography = {
    fontFamily: param.DEFAULT_FONT,
    h4: MainThemeFont_H4,
    h4_bold: MainThemeFont_H4_Bold,
    h5: MainThemeFont_H5,
    body2: MainThemeFont_Body2,
    body2_light: MainThemeFont_Body2_Light,
    button: MainThemeFont_Button
}

export default MainThemeTypography;