import param from './main.theme.param';
import Util from '../../tools/util';

const MainThemeFont_H3 = {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '48px',
    lineHeight: '150%'
}

const MainThemeFont_H3_Bold = Util.deepMerge({
    fontWeight: 'bold'
}, MainThemeFont_H3);

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
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '150%',
    textTransform: 'capitalize'
}

const MainThemeFont_H5_Medium = Util.deepMerge({
    fontWeight: 500,
}, MainThemeFont_H5);

const MainThemeFont_H5_Bold = Util.deepMerge({
    fontWeight: 700,
}, MainThemeFont_H5);

const MainThemeFont_Body1 = {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
    letterSpacing: '0.15px',
}

const MainThemeFont_Body1_Medium = Util.deepMerge({
    fontWeight: 500,
}, MainThemeFont_H5);

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

const MainThemeFont_Logo = {
    fontFamily: param.DEFAULT_FONT,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '15px',
    letterSpacing: '-0.05em',

    backgroundColor: '#FFD25F',
    backgroundImage: '-webkit-linear-gradient(180deg, #FFD25F, #FF5C01)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
}


const MainThemeFont_TagTitle = {
    fontFamily: param.DEFAULT_FONT,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14.9px',
    lineHeight: '150%',
    letterSpacing: '0.139688px',
    color: '#FFFFFF'
}

const MainThemeFont_TagCount = {
    fontFamily: param.DEFAULT_FONT,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '11.175px',
    lineHeight: '150%',
    letterSpacing: '0.3725px',
    color: '#B2B2B2'
}

const MainThemeFont_Subtitle = {
    fontFamily: param.DEFAULT_FONT,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '0.15px',
    textTransform: 'capitalize',
    color: '#929292'
}
const MainThemeFont_Subtitle_Bold = Util.deepMerge({
    fontWeight: 700,
    color: '#FFFFFF'
}, MainThemeFont_Subtitle);


export {
    MainThemeFont_H3,
    MainThemeFont_H3_Bold,
    MainThemeFont_H4,
    MainThemeFont_H4_Bold,
    MainThemeFont_H5,
    MainThemeFont_H5_Medium,
    MainThemeFont_H5_Bold,
    MainThemeFont_Body1,
    MainThemeFont_Body1_Medium,
    MainThemeFont_Body2,
    MainThemeFont_Body2_Light,
    MainThemeFont_Button,
    MainThemeFont_ButtonSmall,
    MainThemeFont_Logo,
    MainThemeFont_TagTitle,
    MainThemeFont_TagCount,
    MainThemeFont_Subtitle,
    MainThemeFont_Subtitle_Bold
}