import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography } from '@mui/material';
import { CustomChart } from '../chart'


const StellarEcosystem = () => {
    const chartOptions = merge(CustomChart(), {
        xaxis: {
            // categories: state.categories,
        },
        colors: ["#0000EE"],
        stroke: {
            width: 2,
            colors: ["#0000EE"],
        },
        markers: {
            colors: ["#0000EE"],
            strokeColors: '#0000EE',
        },
        grid: {
            borderColor: '#000000',
        },
        chart: {
            foreColor: '#000000',
        }
    });

    return (
        <Card sx={{ marginTop: '3rem', boxShadow: '0px 8px 10px #00000040' }}>
            <CardHeader title={
                <Typography
                    sx={{
                        marginX: '1rem',
                        fontWeight: 600,
                        fontSize: '20px',
                    }}
                >
                    Active Repositories
                </Typography>
            } />
            <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
                <ReactApexChart
                    type="line"
                    series={[26, 26, 15, 33, 3]}
                    options={chartOptions}
                    height={364}
                />
            </Box>
        </Card>
    );
}
export default StellarEcosystem