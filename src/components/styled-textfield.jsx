import { TextField } from '@mui/material';
import { styled } from "@mui/material/styles";
import Util from '../tools/util';

const style = {

    "& .MuiOutlinedInput-root": {
        "fieldset": {
            border: '3px solid',
            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 6,
        },
        "&.Mui-focused fieldset": {
            border: '3px solid',
            borderColor: '#FF9B33',
        },
        "input": {
            "&::placeholder": {
                color: '#FFFFFF',
                opacity: 0.3
            }
        }
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: '#FF9B33',
    }
}

const styleFocus = Util.deepCopy(style);
styleFocus["& .MuiOutlinedInput-root"].fieldset.borderColor = '#FF9B33';

const StyledTextField = styled(TextField)(style);
const StyledFocusTextField = styled(TextField)(styleFocus);




export { StyledTextField, StyledFocusTextField };