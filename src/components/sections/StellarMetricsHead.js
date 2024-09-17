import { useState } from 'react';
// material
import {
    Typography,
    TableRow,
    TableCell,
    TableHead,
    Stack,
    IconButton
} from '@mui/material';


// components
import StellarEcosystemTriangle from '../StellarEcosystemTriangle';

// assets
import triunghi from '../../assets/triunghi.svg';

// ----------------------------------------------------------------------


export default function StellarMetricsHead() {
    const [isDescRank, setIsDescRank] = useState(false);
    const [isDescName, setIsDescName] = useState(false);
    const [isDescDevelopers, setIsDescDevelopers] = useState(false);
    const [isDescActiveDevs, setIsDescActiveDevs] = useState(false);
    const [isDescContributions, setIsDescContributions] = useState(false);
    const [isDescActivityGr, setIsDescActivityGr] = useState(false);
    const [isDescActivity, setIsDescActivity] = useState(false);
    const [sortArray, setSortArray] = useState(new Array(7).fill(0));

    const styleRank = {
        transform: !isDescRank ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const styleName = {
        transform: !isDescName ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const styleDevelopers = {
        transform: !isDescDevelopers ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const styleActiveDevs = {
        transform: !isDescActiveDevs ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const styleContributions = {
        transform: !isDescContributions ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const styleActivityGr = {
        transform: !isDescActivityGr ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const styleActivity = {
        transform: !isDescActivity ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const handleChangeSort = (newSort, handleSort) => {
        const newArray = new Array(7).fill(0);
        newArray[newSort] = 1;
        setSortArray(newArray);
        handleSort();
    }

    const handleSortRank = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescRank(!isDescRank);
        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(false);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescActivity(false);
    }

    const handleSortName = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(!isDescName);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(false);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescActivity(false);
    }

    const handleSortDevelopers = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(false);
        setIsDescDevelopers(!isDescDevelopers);
        setIsDescActiveDevs(false);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescActivity(false);
    }

    const handleSortActiveDevs = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(!isDescActiveDevs);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescActivity(false);
    }

    const handleSortContributions = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(false);
        setIsDescContributions(!isDescContributions);
        setIsDescActivityGr(false);
        setIsDescActivity(false);
    }

    const handleSortActivityGr = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(false);
        setIsDescContributions(false);
        setIsDescActivityGr(!isDescActivityGr);
        setIsDescActivity(false);
    }

    const handleSortActivity = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(false);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescActivity(!isDescActivity);
    }


    return (
        <TableHead>
            <TableRow
                sx={{
                    height: '4.25rem',
                }}
            >
                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '7%',
                        backgroundColor: "#f2cb00",
                        paddingLeft: '3rem',
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(0, handleSortRank)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: 'tableColor.headerText',
                            }}
                            className='childHead'
                        >
                            #
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortRank}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[0] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleRank}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '13%',
                        backgroundColor: "#f2cb00",
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(1, handleSortName)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: 'tableColor.headerText',
                            }}
                            className='childHead'
                        >
                            Project name
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortName}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[1] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleName}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '12%',
                        backgroundColor: "#BDB8FF",
                        cursor: 'pointer'
                    }}
                    className='parentHead'
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                            className='childHead'
                        >
                            Ecosystem
                        </Typography>

                        <StellarEcosystemTriangle />
                    </Stack>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '13%',
                        backgroundColor: "#BDB8FF",
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(2, handleSortDevelopers)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                color: '#3E3385',
                                marginRight: '0.35rem',
                            }}
                            className='childHead'
                        >
                            Developers
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortDevelopers}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[2] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleDevelopers}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '20%',
                        backgroundColor: "#BDB8FF",
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(3, handleSortActiveDevs)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >

                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                            className='childHead'
                        >
                            Active developers (30d)
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortActiveDevs}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[3] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleActiveDevs}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '13%',
                        backgroundColor: "#BDB8FF",
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(4, handleSortContributions)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                            className='childHead'
                        >
                            Contributions
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortContributions}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[4] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleContributions}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>


                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '12%',
                        backgroundColor: "#BDB8FF",
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(5, handleSortActivityGr)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >

                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                            className='childHead'
                        >
                            Activity growth (6m)
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortActivityGr}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[5] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleActivityGr}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                        backgroundColor: "#BDB8FF",
                        paddingRight: '3rem',
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(6, handleSortActivity)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >

                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                            className='childHead'
                        >
                            Activity (6m)
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortActivity}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[6] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleActivity}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>


            </TableRow>
        </TableHead >
    );
}
