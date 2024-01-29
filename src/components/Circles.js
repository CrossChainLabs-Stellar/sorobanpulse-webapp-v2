import React from 'react';

// import { Box } from '@mui/material';

import GriSt from '../assets/circles/GriSt.svg';
import GriDr from '../assets/circles/GriDr.svg';
import GalbenDr from '../assets/circles/GalbenDr.svg';
import GablenSt from '../assets/circles/GalbenSt.svg';

import DGalbenDr from '../assets/circles/DGalbenDr.svg';
import DGalbenSt from '../assets/circles/DGalbenSt.svg';
import DGriDr from '../assets/circles/DGriDr.svg';
import DGriSt from '../assets/circles/DGriSt.svg';

const Circles = ({ mode }) => {
    const positions = [
        {
            top: 50,
            left: 1000,
            backgroundImage: mode === 'light' ? GalbenDr : DGalbenDr,
        },
        {
            top: 600,
            left: -200,
            backgroundImage: mode === 'light' ? GriSt : DGriSt,
        },
        {
            top: 1000,
            left: 1000,
            backgroundImage: mode === 'light' ? GriDr : DGriDr,
        },
        {
            top: 1500,
            left: -200,
            backgroundImage: mode === 'light' ? GablenSt : DGalbenSt,
        }
    ];

    const circles = positions.map((position, index) => (
        <div
            key={index}
            style={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        >
            <img src={position.backgroundImage} alt="Eclipse" />
        </div>
    ));

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // width: '100%',
                height: '100%',
                // flexWrap: 'no-warp',
                // overflowY: 'hidden',
                // overflowX: 'hidden',
                zIndex: -1,
                background: `url(${GriSt}) left top no-repeat,url(${GalbenDr}) right bottom no-repeat`,
            }}
        >
            {/* {circles} */}
        </div>
    );
};

export default Circles;
