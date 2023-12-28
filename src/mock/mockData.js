import { faker } from '@faker-js/faker';
import { sample } from 'lodash';



// ----------------------------------------------------------------------

const createObject = () => {
    const id = faker.string.uuid();
    const name = sample([
        'stellar/rs-soroban-sdkaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'stellar/soroban-examples'
    ]);
    const ecosystem = sample([
        'comunity',
        'core'
    ]);
    const devs = sample([
        {
            maxDevs: 4503,
            devs: 845
        },
        {
            maxDevs: 2537,
            devs: 181
        }
    ]);

    const maxDevs = devs.maxDevs;
    const devNumber = devs.devs;

    const contributions = sample([
        125503, 115891
    ]);

    const activity = sample([
        {
            growth: 53.5,
            graf: 'verde'
        },
        {
            growth: -11.7,
            graf: 'rosu'
        }
    ])

    const growth = activity.growth;
    const graf = activity.graf;

    return ({
        id: id,
        name: name,
        ecosystem: ecosystem,
        maxDevs: maxDevs,
        devNumber: devNumber,
        contributions: contributions,
        growth: growth,
        graf: graf,
    });
}


const mockData = [...Array(24)].map(() => {

    return createObject();
});


export default mockData;
