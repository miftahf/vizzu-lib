import { data } from '../../../test_data/chart_types_eu.mjs';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            config:
            {
                channels:
                {
                    x: { attach: ['Joy factors', 'Value 2 (+)'] },
                    color: { attach: 'Joy factors' },
                    label: { attach: 'Value 2 (+)' }
                },
                title: 'Pie Chart',
                coordSystem: 'polar'
            }
        }
    ),
    chart => chart.feature('tooltip',true)
];

export default testSteps;