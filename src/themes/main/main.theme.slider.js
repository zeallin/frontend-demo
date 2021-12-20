import param from './main.theme.param';
import {
    MainThemeFont_Body1
} from './main.theme.font.style';
import Util from '../../tools/util';

const MainThemeSlider = {
    styleOverrides: {
        root: {
            '& .MuiSlider-markLabel[data-index="5"]': {
                marginLeft: '-1.5px',
            }
        },
        thumb: {
            backgroundColor: '#1B1B1B',
            border: '6px solid #FFD05D',
            width: 26,
            height: 26,
            marginLeft: '3px',

            "&:before": {
                boxShadow: 'none'
            }
        },
        rail: {
            height: 8,
            border: 0,
            borderRadius: 8,
            backgroundColor: '#ffffff',
            opacity: 0.3
        },

        track: {
            height: 8,
            border: 0,
            borderRadius: 8,
            color: '#ffffff',
            opacity: 1,
            backgroundImage: 'linear-gradient(to right, #FF5C01, #FFD25F)',
            paddingRight: '-5px'
        },
        mark: {
            backgroundColor: 'transparent'
        },
        markLabel: {
            color: '#ffffff',
            opacity: 0.5,

            paddingTop: '3px',
            paddingLeft: '7px',
            marginLeft: '0px',
            // marginLeft: '-9.5px',

        },

    }
}

// Apply font style
MainThemeSlider.styleOverrides.markLabel = Util.deepMerge(
    MainThemeFont_Body1,
    MainThemeSlider.styleOverrides.markLabel);

export default MainThemeSlider;