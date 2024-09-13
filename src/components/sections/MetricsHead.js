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
import SorobanEcosystemTriangle from '../SorobanEcosystemTriangle';

// assets
import triunghi from '../../assets/triunghi.svg';

// ----------------------------------------------------------------------


export default function MetricsHead() {
    const [isDescName, setIsDescName] = useState(false);
    const [isDescDevelopers, setIsDescDevelopers] = useState(false);
    const [isDescActiveDevs, setIsDescActiveDevs] = useState(false);
    const [isDescContributions, setIsDescContributions] = useState(false);
    const [isDescActivityGr, setIsDescActivityGr] = useState(false);
    const [isDescActivity, setIsDescActivity] = useState(false);
    const [sortArray, setSortArray] = useState(new Array(6).fill(0));

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
        const newArray = new Array(6).fill(0);
        newArray[newSort] = 1;
        setSortArray(newArray);
        handleSort();
    }

    const handleSortName = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescName(!isDescName);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(false);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescActivity(false);
    }

    const handleSortDevelopers = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescName(false);
        setIsDescDevelopers(!isDescDevelopers);
        setIsDescActiveDevs(false);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescActivity(false);
    }

    const handleSortActiveDevs = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(!isDescActiveDevs);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescActivity(false);
    }

    const handleSortContributions = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(false);
        setIsDescContributions(!isDescContributions);
        setIsDescActivityGr(false);
        setIsDescActivity(false);
    }

    const handleSortActivityGr = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescActiveDevs(false);
        setIsDescContributions(false);
        setIsDescActivityGr(!isDescActivityGr);
        setIsDescActivity(false);
    }

    const handleSortActivity = () => {
        // paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

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
                        width: '20%',
                        backgroundColor: "#f2cb00",
                        paddingLeft: '3rem',
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(0, handleSortName)}
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
                                visibility: sortArray[0] !== 0 ? 'visible' : 'hidden'
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
                        backgroundColor: "#f2cb00",
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
                                color: 'tableColor.headerText',
                            }}
                            className='childHead'
                        >
                            Ecosystem
                        </Typography>

                        <SorobanEcosystemTriangle />
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
                    onClick={() => handleChangeSort(1, handleSortDevelopers)}
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
                            Developers
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortDevelopers}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[1] !== 0 ? 'visible' : 'hidden'
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
                        backgroundColor: "#f2cb00",
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(2, handleSortActiveDevs)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{ marginTop: '1.2rem' }}
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
                            Active developers
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortActiveDevs}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[2] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleActiveDevs}
                            />
                        </IconButton>
                    </Stack>
                    <Typography
                        noWrap
                        sx={{
                            fontWeight: 450,
                            marginTop: 0,
                            fontSize: 12,
                            color: 'tableColor.headerText',
                        }}
                        className='childHead'
                    >
                        last 30 days
                    </Typography>
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
                    onClick={() => handleChangeSort(3, handleSortContributions)}
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
                            Contributions
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortContributions}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[3] !== 0 ? 'visible' : 'hidden'
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
                        backgroundColor: "#f2cb00",
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(4, handleSortActivityGr)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{ marginTop: '1.2rem', }}
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
                            Activity growth
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortActivityGr}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[4] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleActivityGr}
                            />
                        </IconButton>
                    </Stack>
                    <Typography
                        noWrap
                        sx={{
                            fontWeight: 450,
                            marginTop: 0,
                            fontSize: 12,
                            color: 'tableColor.headerText',
                        }}
                        className='childHead'
                    >
                        last 6 months
                    </Typography>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                        backgroundColor: "#f2cb00",
                        paddingRight: '3rem',
                        cursor: 'pointer',
                    }}
                    className='parentHead'
                    onClick={() => handleChangeSort(5, handleSortActivity)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{ marginTop: '1.2rem', }}
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
                            Activity
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortActivity}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[5] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleActivity}
                            />
                        </IconButton>
                    </Stack>
                    <Typography
                        noWrap
                        sx={{
                            fontWeight: 450,
                            marginTop: 0,
                            fontSize: 12,
                            color: 'tableColor.headerText',
                        }}
                        className='childHead'
                    >
                        last 6 months
                    </Typography>
                </TableCell>


            </TableRow>
        </TableHead>
    );
}
