import zIndex from '@mui/material/styles/zIndex';
import React from 'react';
import GriStanga from '../assets/GriStanga.svg';
import GriDr from '../assets/GriDr.svg';
import GalbenDr from '../assets/GalbenDr.svg';
import GalbenStanga from '../assets/GalbenStanga.svg';

const Circles = () => {
    const circles = [
        {
            top: 50,
            left: 800,
            backgroundImage: `url(${GalbenDr})`,
        },
        {
            top: 500,
            left: 0,
            backgroundImage: `url(${GriStanga})`,
        },
        {
            top: 900,
            left: 900,
            backgroundImage: `url(${GriDr})`,
        },
        {
            top: 1500,
            left: 0,
            backgroundImage: `url(${GalbenStanga})`,
        }
    ];

    return (
        <div
            style={{
                display: 'flex',
                width: '100vw',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: 'cover'
            }}
        >
            {circles.map((circle) => (
                <div key={circle.id} style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: '-1',
                    backgroundRepeat: 'no-repeat',
                    ...circle,
                }}>
                </div>
            ))}
        </div>
    );
};

export default Circles;