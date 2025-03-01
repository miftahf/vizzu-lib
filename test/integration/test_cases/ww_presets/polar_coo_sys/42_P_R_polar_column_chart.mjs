import { data } from '../../../test_data/chart_types_eu.mjs';

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      config: {
        channels: {
          x: {attach: 'Joy factors'},
          y: {attach: 'Value 2 (+)'},
          label: { set: 'Value 2 (+)' }
        },
        title: 'Polar Column Chart',
        coordSystem: 'polar'
      }
    }
  ),
  chart => chart.feature('tooltip',true)
];

export default testSteps;