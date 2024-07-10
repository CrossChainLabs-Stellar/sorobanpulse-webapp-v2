import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography } from '@mui/material';
import { CustomChart } from '../chart'

const StellarCommits = () => {
    const chartOptions = merge(CustomChart(), {
        xaxis: {
            //   categories: state.categories,
            lables: {
                colors: ["#0000EE"],
            },
        },
        fill: {
            colors: ["#0000EE"]
        },
        stroke: {
            width: 2,
            colors: ["#0000EE"]
        },
        grid: {
            borderColor: '#000000',
        },
        chart: {
            foreColor: '#000000'
        },

    });

    return (
        <Card sx={{ marginTop: '3rem', boxShadow: '0px 8px 10px #00000040' }}>
            <CardHeader
                title={
                    <Typography
                        sx={{
                            marginX: '1rem',
                            fontWeight: 600,
                            fontSize: '20px',
                        }}
                    >
                        Commits
                    </Typography>
                }
            />
            <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
                <ReactApexChart type="bar" series={[20, 30, 20, 30, 20, 30]} options={chartOptions} height={364} />
            </Box>
        </Card>
    );
}
export default StellarCommits