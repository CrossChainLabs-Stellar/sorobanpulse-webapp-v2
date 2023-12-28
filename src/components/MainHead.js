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
    const [isDescName, setIsDescName] = useState(true);
    const [isDescDevelopers, setIsDescDevelopers] = useState(true);
    const [isDescActiveDevs, setIsDescActiveDevs] = useState(true);
    const [isDescContributions, setIsDescContributions] = useState(true);
    const [isDescActivityGr, setIsDescActivityGr] = useState(true);
    const [isDescActivity, setIsDescActivity] = useState(true);

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

    const handleSortName = () => {
        paramsCallback({ sortBy: 'name', sortType: isDescName ? 'asc' : 'desc' });

        setIsDescName(!isDescName);
        setIsDescDevelopers(true);
        setIsDescActiveDevs(true);
        setIsDescContributions(true);
        setIsDescActivityGr(true);
        setIsDescActivity(true);
    }

    const handleSortDevelopers = () => {
        paramsCallback({ sortBy: 'developers', sortType: isDescDevelopers ? 'asc' : 'desc' });

        setIsDescName(true);
        setIsDescDevelopers(!isDescDevelopers);
        setIsDescActiveDevs(true);
        setIsDescContributions(true);
        setIsDescActivityGr(true);
        setIsDescActivity(true);
    }

    const handleSortActiveDevs = () => {
        paramsCallback({ sortBy: 'active_contributors_percentage', sortType: isDescActiveDevs ? 'asc' : 'desc' });

        setIsDescName(true);
        setIsDescDevelopers(true);
        setIsDescActiveDevs(!isDescActiveDevs);
        setIsDescContributions(true);
        setIsDescActivityGr(true);
        setIsDescActivity(true);
    }

    const handleSortContributions = () => {
        paramsCallback({ sortBy: 'contributions', sortType: isDescContributions ? 'asc' : 'desc' });

        setIsDescName(true);
        setIsDescDevelopers(true);
        setIsDescActiveDevs(true);
        setIsDescContributions(!isDescContributions);
        setIsDescActivityGr(true);
        setIsDescActivity(true);
    }

    const handleSortActivityGr = () => {
        paramsCallback({ sortBy: 'activity_growth', sortType: isDescActivityGr ? 'asc' : 'desc' });

        setIsDescName(true);
        setIsDescDevelopers(true);
        setIsDescActiveDevs(true);
        setIsDescContributions(true);
        setIsDescActivityGr(!isDescActivityGr);
        setIsDescActivity(true);
    }

    const handleSortActivity = () => {
        paramsCallback({ sortBy: 'activity_growth', sortType: isDescActivity ? 'asc' : 'desc' });

        setIsDescName(true);
        setIsDescDevelopers(true);
        setIsDescActiveDevs(true);
        setIsDescContributions(true);
        setIsDescActivityGr(true);
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
                        // width: {
                        //     xxl: '30rem',
                        //     xl: '20rem',
                        //     lg_xl: '18rem',
                        //     lg: '20%',
                        //     md: '7.5rem'
                        // },
                        width: '11%',
                        backgroundColor: "#FDDA24",
                        paddingLeft: '3rem',
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
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
                                color: '#002E5D'
                            }}
                        >
                            #
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortName}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
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
                        //     xxl: '30rem',
                        //     xl: '20rem',
                        //     lg_xl: '18rem',
                        //     lg: '20%',
                        //     md: '7.5rem'
                        // },
                        width: '12%',
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
                                color: '#002E5D'
                            }}
                        >
                            Dapp Name
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortName}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
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
                        width: '11%',
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
                                color: '#002E5D'
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
                        width: '11%',
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
                                color: '#002E5D',
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
                                marginTop: '0.15rem'
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
                        width: '11%',
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
                                color: '#002E5D',
                                marginRight: '0.35rem',
                            }}
                        >
                            Contributions
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortDevelopers}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
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
                        //     xxl: '30rem',
                        //     xl: '20rem',
                        //     lg_xl: '20rem',
                        //     lg: '20%',
                        //     md: '15rem'
                        // },
                        width: '11%',
                        backgroundColor: "#FDDA24",
                    }}
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
                                color: '#002E5D'
                            }}
                        >
                            Development
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortActiveDevs}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
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
                            fontSize: 13,
                            color: '#002E5D'
                        }}
                    >
                        activity (12m)
                    </Typography>
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
                        //     md: '10rem'
                        // },
                        width: '11%',
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
                                color: '#002E5D'
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
                        width: '11%',
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
                                color: '#002E5D'
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
                </TableCell>

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
                                color: '#002E5D'
                            }}
                        >
                            X / Twitter
                        </Typography>

                        <IconButton
                            id="basic-button"
                            onClick={handleSortActivity}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
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
        </TableHead>
    );
}
