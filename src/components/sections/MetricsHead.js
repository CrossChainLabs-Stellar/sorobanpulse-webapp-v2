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
// import EcosystemTriangle from './EcosystemTriangle';

// assets
import triunghi from '../../assets/triunghi.svg';

// ----------------------------------------------------------------------


export default function MetricsHead() {
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
        setIsDescName(!isDescName);
    }

    const handleSortDevelopers = () => {
        setIsDescDevelopers(!isDescDevelopers);
    }

    const handleSortActiveDevs = () => {
        setIsDescActiveDevs(!isDescActiveDevs);
    }

    const handleSortContributions = () => {
        setIsDescContributions(!isDescContributions);
    }

    const handleSortActivityGr = () => {
        setIsDescActivityGr(!isDescActivityGr);
    }

    const handleSortActivity = () => {
        setIsDescActivity(!isDescActivity);
    }

    // const handleSortNumber = () => {
    //     paramsCallback({ sortBy: 'number', sortType: isDescNumber ? 'asc' : 'desc' });
    //     setIsDescNumber(!isDescNumber);
    //     setIsDescName(true);
    //     setIsDescUpdatedAt(true);
    // }

    // const handleSortName = () => {
    //     paramsCallback({ sortBy: 'title', sortType: isDescName ? 'asc' : 'desc' });
    //     setIsDescNumber(true);
    //     setIsDescName(!isDescName);
    //     setIsDescUpdatedAt(true);
    // }

    // const handleSortUpdatedAt = () => {
    //     paramsCallback({ sortBy: 'updated_at', sortType: isDescUpdatedAt ? 'asc' : 'desc' });
    //     setIsDescNumber(true);
    //     setIsDescName(true);
    //     setIsDescUpdatedAt(!isDescUpdatedAt);
    // }


    return (
        <TableHead>
            <TableRow
                sx={{
                    height: '4rem',
                }}
            >
                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '20%',
                        backgroundColor: "#FFEC8D",
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
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                        >
                            Project name
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
                        width: '12%',
                        backgroundColor: "#FFEC8D"
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
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                        >
                            Ecosystem
                        </Typography>

                        {/* <EcosystemTriangle /> */}
                        <IconButton
                            id="basic-button"
                            // onClick={handleSortName}
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
                        width: '13%',
                        backgroundColor: "#FFEC8D"
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
                                fontSize: 16,
                                color: '#3E3385',
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
                        width: '20%',
                        backgroundColor: "#FFEC8D",
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
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                        >
                            Active developers
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
                            fontSize: 12,
                            color: '#3E3385'
                        }}
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
                        backgroundColor: "#FFEC8D",
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
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                        >
                            Contributions
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
                        width: '12%',
                        backgroundColor: "#FFEC8D",
                    }}
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
                                color: '#3E3385'
                            }}
                        >
                            Activity growth
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
                    <Typography
                        noWrap
                        sx={{
                            fontWeight: 450,
                            marginTop: 0,
                            fontSize: 12,
                            color: '#3E3385'
                        }}
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
                        backgroundColor: "#FFEC8D",
                        paddingRight: '3rem',
                    }}
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
                                color: '#3E3385'
                            }}
                        >
                            Activity
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
                    <Typography
                        noWrap
                        sx={{
                            fontWeight: 450,
                            marginTop: 0,
                            fontSize: 12,
                            color: '#3E3385'
                        }}
                    >
                        last 6 months
                    </Typography>
                </TableCell>


            </TableRow>
        </TableHead>
    );
}
