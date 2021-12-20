import param from './main.theme.param';
import Util from '../../tools/util';

const MainThemeFont_H4 = {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '30px',
    lineHeight: '150%',
    letterSpacing: '0.25px'
}

const MainThemeFont_H4_Bold = Util.deepMerge({
    fontWeight: 'bold'
}, MainThemeFont_H4);


const MainThemeFont_H5 = {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '150%',
}

const MainThemeFont_Body1 = {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '150%',
    letterSpacing: '0.15px',
}

const MainThemeFont_Body2 = {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '0.25px'
}

const MainThemeFont_Body2_Light = Util.deepMerge({
    fontWeight: 300
}, MainThemeFont_Body2);

const MainThemeFont_Button = {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '100%',
    textTransform: 'uppercase'
}


const MainThemeFont_ButtonSmall = {
    fontFamily: param.SMALL_BUTTON_FONT,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '100%',
    textTransform: 'capitalize',
}



export {
    MainThemeFont_H4,
    MainThemeFont_H4_Bold,
    MainThemeFont_H5,
    MainThemeFont_Body1,
    MainThemeFont_Body2,
    MainThemeFont_Body2_Light,
    MainThemeFont_Button,
    MainThemeFont_ButtonSmall
}