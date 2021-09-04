import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            config:
            {
                channels:
                {
                    x: { attach: ['Year', 'Value 5 (+/-)'] },
                    y: { attach: ['$exists'], range: { min: '0%', max: '200%' }}
                },
                title: 'DotPlot with (-) Nums',
                align: 'none',
                geometry: 'circle'
            }
        }
    )
];

export default testSteps;