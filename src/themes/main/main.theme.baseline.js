import param from './main.theme.param';

const MainThemeBaseline = {
    styleOverrides: {
        body: {
            backgroundColor: param.BG_COLOR,
            color: param.PRIMARY_COLOR,
        },
        a: {
            textDecoration: 'none',
            '&:link': {
                color: param.PRIMARY_COLOR
            },
            '&:hover': {
                color: param.PRIMARY_COLOR
            },
            '&:visited': {
                color: param.PRIMARY_COLOR
            }
        }
    },
}

export default MainThemeBaseline;