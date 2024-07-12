import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography } from '@mui/material';
import { CustomChart } from '../chart';
import { useTheme } from '@mui/material/styles';


const StellarEcosystem = () => {
    const theme = useTheme();

    const chartOptions = merge(CustomChart(), {
        xaxis: {
            // categories: state.categories,
            lables: {
                colors: ["#0000EE"],
            },
        },
        colors: ["#0000EE"],
        fill: {
            colors: ["#0000EE"],
        },
        tooltip: {
            theme: theme.palette.mode
        }
    });

    const data = [
        { name: 'Repositories', data: [25, 25, 36, 1, 26, 3, 25] },
    ]

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
                    series={data}
                    options={chartOptions}
                    height={364}
                />
            </Box>
        </Card>
    );
}
export default StellarEcosystem