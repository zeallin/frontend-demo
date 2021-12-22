import param from './main.theme.param';
import {
    MainThemeFont_Subtitle,
    MainThemeFont_Subtitle_Bold
} from './main.theme.font.style';
import Util from '../../tools/util';

const MainThemeTab = {
    styleOverrides: {
        root: {
            paddingBottom: '6px',
            "&.Mui-selected": MainThemeFont_Subtitle_Bold
        }
    }
}

// Apply font style
MainThemeTab.styleOverrides.root = Util.deepMerge(
    MainThemeFont_Subtitle,
    MainThemeTab.styleOverrides.root);
// MainThemeTab.styleOverrides.root["&.Mui-selected"] = Util.deepMerge(
//     MainThemeFont_Subtitle_Bold, MainThemeTab.styleOverrides.root["&.Mui-selected"]);

export default MainThemeTab;