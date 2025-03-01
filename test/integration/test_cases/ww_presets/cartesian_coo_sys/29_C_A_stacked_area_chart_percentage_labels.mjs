import { data } from '../../../test_data/chart_types_eu.mjs';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            config: {
                channels: {
                    x: { set: 'Year' },
                    y: { set: ['Country', 'Value 2 (+)'] },
                    color: { set: 'Country' }
                },
                title: 'Percentage Stacked Area Chart',
                geometry: 'area',
                align: 'stretch',
            }  
        }
    ),
    chart => chart.feature('tooltip',true)
];

export default testSteps;