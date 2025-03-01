import { data } from '../../../../../test_data/chart_types_eu.mjs';


const testSteps = [
    chart => chart.animate({
        data: Object.assign(data, {
            filter: record =>
                record.Country == 'Austria' ||
                record.Country == 'Belgium' ||
                record.Country == 'Bulgaria' ||
                record.Country == 'Cyprus' ||
                record.Country == 'Czechia' ||
                record.Country == 'Denmark' ||
               record.Country == 'Estonia' ||
                record.Country == 'Greece' ||
                record.Country == 'Germany' ||
                record.Country == 'Spain' ||
                record.Country == 'Finland' ||
                record.Country == 'France' ||
                record.Country == 'Croatia' ||
               record.Country == 'Hungary'
        }),
        config: {
            channels: {
                x: { set: 'Year' },
                y: { set: ['Country', 'Value 2 (+)'] },
                color: { set: 'Country' }
            },
            title: 'Stacked Column Chart',
            geometry: 'rectangle',
            orientation: 'horizontal'
        } 
}),

    chart => chart.animate({
        config: {
            channels: {
                y: { range: {max: 14000} },
            },
            title: 'Set Y Range'
        }
}),

    chart => chart.animate({
        config: {
            channels: {
                x: null,
                y: { set: ['Country', 'Year', 'Value 2 (+)'] },
            },
            title: 'Bar1 Stack Disc'
        }
}),

    chart => chart.animate({
        config: {
            channels: {
                y: { set: ['Country', 'Joy factors', 'Value 2 (+)'] },
            },
            title: 'Bar2 Change Disc'
        }
}),
   
    chart => chart.animate({
    config: {
        channels: {
            x: { set: ['Joy factors'] },
            y: { set: ['Country', 'Value 2 (+)'] },
        },
        title: 'Bar3 Group Disc'
    }
}),

    chart => chart.animate({
    config: {
        channels: {
            y: { range: {max: 'auto'} },
        },
        title: 'Bar3 Set Back Y Range'
    }
}),
];

export default testSteps;