import React from 'react';
import { Slider } from '@mui/material';
import { styled } from "@mui/material/styles";

const style = {

    "& .MuiSlider-track": {
        height: 8,
        border: 0,
        borderRadius: 8,
        color: '#ffffff',
        opacity: 1,
        backgroundImage: 'linear-gradient(to right, #FFD25F, #FF5C01)'
    },

    "& .MuiSlider-rail": {
        height: 8,
        border: 0,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        opacity: 0.3
    },

    "& .MuiSlider-mark": {
        backgroundColor: 'transparent'
    },

    "& .MuiSlider-markLabel": {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '150%',
        letterSpacing: '0.15px'
    },

    "& .MuiSlider-root": {

    },


    thumb: {
        background: "red",
        "&~&": {
            background: "green"
        }
    },
    mark: {
        background: "black"
    },
    rail: {
        background: "linear-gradient(to right, red, red 50%, green 50%, green);"
    },
    track: {
        background: "orange"
    },
    valueLabel: {
        "&>*": {
            background: "black"
        }
    }
};

const marks = [
    {
        value: 3,
        label: '3',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 9,
        label: '9',
    },
    {
        value: 12,
        label: '12',
    },
    {
        value: 15,
        label: '15',
    },
    {
        value: 50,
        label: '50',
    }
];

function valuetext(value) {
    return value;
}

function valueLabelFormat(value) {
    return value;
}

const StyledSliderBase = styled(Slider)(style);

const StyledSlider = (props) => {
    return (
        <StyledSliderBase aria-label="Always visible"
            defaultValue={15}
            min={3}
            max={50}
            getAriaValueText={valuetext}
            valueLabelFormat={valueLabelFormat}
            step={null}
            valueLabelDisplay="off"
            marks={marks}
        />
    );
}

export {
    StyledSlider
}