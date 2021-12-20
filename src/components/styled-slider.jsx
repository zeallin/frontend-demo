import React from 'react';
import { Slider } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const marks = [
    {
        value: 0,
        label: '3',
    },
    {
        value: 18.3,
        label: '6',
    },
    {
        value: 36.6,
        label: '9',
    },
    {
        value: 55.5,
        label: '12',
    },
    {
        value: 73.8,
        label: '15',
    },
    {
        value: 98.4,
        label: '50',
    }
];

var idxValMap = {};
for (var i = 0; i < marks.length; i++) {
    idxValMap[marks[i].value] = i;
}

var idxLabelMap = {};
for (var i = 0; i < marks.length; i++) {
    idxLabelMap[marks[i].label] = i;
}



function valuetext(value) {
    return value;
}

function valueLabelFormat(value) {
    return value;
}

const StyledSlider = styled(Slider, {
    shouldForwardProp: (prop) => prop !== 'selectedIdx',
})(({ selectedIdx, theme }) => ({

    [`& .MuiSlider-markLabel[data-index="${selectedIdx}"]`]: {
        opacity: 1
    }
}));


function DynamicCSS(props) {
    var defaultIdx = 0;
    var defaultVal = 0;
    try {
        defaultIdx = idxLabelMap[props.defaultValue];
        defaultVal = marks[defaultIdx].value;
    } catch (ex) {
        console.error(ex);
    }

    const [selectedIdx, setSelectedIdx] = React.useState(defaultIdx);

    const handleChange = (event, val) => {
        const idx = idxValMap[val];
        // console.log(idx);
        setSelectedIdx(idx);
    };

    return (
        <StyledSlider aria-label="Always visible"
            defaultValue={defaultVal}
            min={0}
            max={100}
            getAriaValueText={valuetext}
            valueLabelFormat={valueLabelFormat}
            step={null}
            valueLabelDisplay="off"
            marks={marks}
            onChangeCommitted={handleChange}
            selectedIdx={selectedIdx}
        />
    );
}

export default DynamicCSS;