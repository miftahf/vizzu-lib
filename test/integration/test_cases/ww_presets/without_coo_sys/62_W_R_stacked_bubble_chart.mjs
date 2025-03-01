import { data } from '../../../test_data/chart_types_eu.mjs';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            config:
            {
                channels:
                {
                    color: { attach: 'Joy factors' },
                    size: { attach: ['Country_code', 'Value 2 (+)'] }
                },
                title: 'Stacked Bubble Chart',
                geometry: 'circle'
            }
        }
    ),
    chart => chart.feature('tooltip',true)
];

export default testSteps;