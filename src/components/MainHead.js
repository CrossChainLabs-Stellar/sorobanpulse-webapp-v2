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
import EcosystemTriangle from './EcosystemTriangle';

// assets
import triunghi from '../assets/triunghi.svg';


// ----------------------------------------------------------------------


export default function MainHead({ paramsCallback }) {
    const [isDescRank, setIsDescRank] = useState(false);
    const [isDescName, setIsDescName] = useState(false);
    const [isDescDevelopers, setIsDescDevelopers] = useState(false);
    const [isDescContributions, setIsDescContributions] = useState(true);
    const [isDescActivityGr, setIsDescActivityGr] = useState(false);
    const [isDescFollowers, setIsDescFollowers] = useState(false);
    const [sortArray, setSortArray] = useState(new Array(6).fill(0));

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

    const styleContributions = {
        transform: !isDescContributions ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const styleActivityGr = {
        transform: !isDescActivityGr ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const styleFollowers = {
        transform: !isDescFollowers ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    const handleChangeSort = (newSort, handleSort) => {
        const newArray = new Array(6).fill(0);
        newArray[newSort] = 1;
        setSortArray(newArray);
        handleSort();
    }

    const handleSortRank = () => {
        paramsCallback({ sortBy: 'rank', sortType: isDescRank ? 'asc' : 'desc' });

        setIsDescRank(!isDescRank);
        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescFollowers(false);
    }

    const handleSortName = () => {
        paramsCallback({ sortBy: 'name', sortType: isDescName ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(!isDescName);
        setIsDescDevelopers(false);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescFollowers(false);
    }

    const handleSortDevelopers = () => {
        paramsCallback({ sortBy: 'developers', sortType: isDescDevelopers ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(false);
        setIsDescDevelopers(!isDescDevelopers);
        setIsDescContributions(false);
        setIsDescActivityGr(false);
        setIsDescFollowers(false);
    }

    const handleSortContributions = () => {
        paramsCallback({ sortBy: 'contributions', sortType: isDescContributions ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescContributions(!isDescContributions);
        setIsDescActivityGr(false);
        setIsDescFollowers(false);
    }

    const handleSortActivityGr = () => {
        paramsCallback({ sortBy: 'activity_growth', sortType: isDescActivityGr ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescContributions(false);
        setIsDescActivityGr(!isDescActivityGr);
        setIsDescFollowers(false);
    }

    const handleSortFollowers = () => {
        paramsCallback({ sortBy: 'followers', sortType: isDescFollowers ? 'asc' : 'desc' });

        setIsDescRank(false);
        setIsDescName(false);
        setIsDescDevelopers(false);
        setIsDescContributions(true);
        setIsDescActivityGr(false);
        setIsDescFollowers(!isDescFollowers);
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
                        // width: {
                        //     xxl: '30rem',
                        //     xl: '20rem',
                        //     lg_xl: '18rem',
                        //     lg: '20%',
                        //     md: '7.5rem'
                        // },
                        backgroundColor: "#FDDA24",
                        paddingLeft: { xl: '3rem', lg: '1.5rem' },
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                    }}
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
                                fontSize: 17,
                                marginRight: '0.35rem',
                                color: 'tableColor.headerText'
                            }}
                        >
                            #
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortRank}
                            hidden={true}
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
                        // width: {
                        //     xxl: '30rem',
                        //     xl: '20rem',
                        //     lg_xl: '18rem',
                        //     lg: '20%',
                        //     md: '7.5rem'
                        // },
                        width: '25%',
                        backgroundColor: "#FDDA24",
                    }}
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
                                fontSize: 17,
                                marginRight: '0.35rem',
                                color: 'tableColor.headerText'
                            }}
                        >
                            Dapp Name
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
                        // width: {
                        //     xxl: '20rem',
                        //     xl: '15rem',
                        //     lg_xl: '14rem',
                        //     lg: '12%',
                        //     md: '10rem',
                        // },
                        // width: '11%',
                        backgroundColor: "#FDDA24"
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 17,
                                marginRight: '0.35rem',
                                color: 'tableColor.headerText'
                            }}
                        >
                            Ecosystem
                        </Typography>

                        <EcosystemTriangle paramsCallback={paramsCallback} />
                    </Stack>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        // width: {
                        //     xxl: '20rem',
                        //     xl: '15rem',
                        //     lg_xl: '14rem',
                        //     lg: '13%',
                        //     md: '10rem',
                        // },
                        // width: '11%',
                        backgroundColor: "#FDDA24"
                    }}
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
                                fontSize: 17,
                                color: 'tableColor.headerText',
                                marginRight: '0.35rem',
                            }}
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
                        // width: {
                        //     xxl: '20rem',
                        //     xl: '15rem',
                        //     lg_xl: '14rem',
                        //     lg: '13%',
                        //     md: '10rem',
                        // },
                        // width: '11%',
                        backgroundColor: "#FDDA24"
                    }}
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
                                fontSize: 17,
                                color: 'tableColor.headerText',
                                marginRight: '0.35rem',
                            }}
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
                        // width: {
                        //     xxl: '30rem',
                        //     xl: '20rem',
                        //     lg_xl: '20rem',
                        //     lg: '20%',
                        //     md: '15rem'
                        // },
                        // width: '11%',
                        backgroundColor: "#FDDA24",
                    }}
                    onClick={() => handleChangeSort(4, handleSortActivityGr)}
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
                                fontSize: 17,
                                marginRight: '0.35rem',
                                color: 'tableColor.headerText'
                            }}
                        >
                            Development
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
                            fontSize: 13,
                            color: 'tableColor.headerText'
                        }}
                    >
                        activity (12m)
                    </Typography>
                </TableCell>

                {/* <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        // width: {
                        //     xxl: '20rem',
                        //     xl: '15rem',
                        //     lg_xl: '14rem',
                        //     lg: '13%',
                        //     md: '10rem'
                        // },
                        // width: '11%',
                        backgroundColor: "#FDDA24",
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 17,
                                marginRight: '0.35rem',
                                color: 'tableColor.headerText'
                            }}
                        >
                            State Expiration
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortContributions}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
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
                        // width: {
                        //     xxl: '30rem',
                        //     xl: '20rem',
                        //     lg_xl: '18rem',
                        //     lg: '12%',
                        //     md: '12rem'
                        // },
                        // width: '11%',
                        backgroundColor: "#FDDA24",
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >

                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 17,
                                marginRight: '0.35rem',
                                color: 'tableColor.headerText'
                            }}
                        >
                            Expiration date
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortActivityGr}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleActivityGr}
                            />
                        </IconButton>
                    </Stack>
                </TableCell> */}

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                        backgroundColor: "#FDDA24",
                        paddingRight: '3rem',
                    }}
                    onClick={() => handleChangeSort(5, handleSortFollowers)}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >

                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 17,
                                marginRight: '0.35rem',
                                color: 'tableColor.headerText'
                            }}
                        >
                            X / Twitter
                        </Typography>
                        <IconButton
                            id="basic-button"
                            onClick={handleSortFollowers}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem',
                                visibility: sortArray[5] !== 0 ? 'visible' : 'hidden'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleFollowers}
                            />
                        </IconButton>

                    </Stack>
                </TableCell>


            </TableRow>
        </TableHead>
    );
}
