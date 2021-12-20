import param from './main.theme.param';

const MainThemeBaseline = {
    styleOverrides: {
        body: {
            backgroundColor: param.BG_COLOR,
            color: param.PRIMARY_COLOR,
        },
    },
}

export default MainThemeBaseline;