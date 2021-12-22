import {
    useTheme
} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ThemeHelper = {
    useIsWidthUp: function (breakpoint) {
        const theme = useTheme();
        return useMediaQuery(theme.breakpoints.up(breakpoint));

    },
    useIsWidthDown: function (breakpoint) {
        const theme = useTheme();
        return useMediaQuery(theme.breakpoints.down(breakpoint));

    },

}

export default ThemeHelper;