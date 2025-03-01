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
                y: { set: ['Joy factors', 'Value 2 (+)'] },
                color: { set: 'Joy factors' },
                noop: { set: 'Year' },
                size: { set: ['Value 2 (+)'] }
            },
            title: 'Stacked Area Chart',
            geometry: 'area',
            align: 'center',
            split: true
        },
        style: {
            plot: {
                paddingLeft: '1.2em',
                yAxis: {
                    label: {
                       paddingRight: 10,
                        fontSize: 13
                    }
                }
            }
        }
    },
    {
        duration: 1,
        easing: 'cubic-bezier(0.65,0,0.65,1)',
        title: {
            delay: 0,
            duration:0.75
        },
        coordSystem: { 
            delay: 0,
            duration: 1,
         },
        geometry: { 
            delay: 0, 
            duration: 0.5, 
//                easing: 'linear' 
         },
        x: {
            delay: 0.25,
            duration: 0.75,
//               easing: 'ease-in'
         }, 
        y: {
            delay: 0,
            duration: 1,
//                easing: 'cubic-bezier(.39,0,.35,.99)'
         }
     }
    
    ),

chart => chart.animate({
    config: {
        channels: {
            x: { set: null },
            y: { set: null },
            noop: { set: 'Year' },
            size: { set: ['Year', 'Value 2 (+)'] },
            color: { set: 'Joy factors' }
        },
        title: 'Bubble',
        geometry: 'circle'
    } 
},
{
 easing: 'cubic-bezier(0.65,0,0.65,1)',
 coordSystem: { 
         delay: 0,
         duration: 1,
     },
     geometry: { 
         delay: 0, 
         duration: 1, 
//                easing: 'linear' 
     },
     x: {
         delay: 0.25,
         duration: 0.75,
//               easing: 'ease-in'
     }, 
     y: {
         delay: 0,
         duration: 1,
//                easing: 'cubic-bezier(.39,0,.35,.99)'
     }
 }
),

chart => chart.animate({
    config: {
        channels: {
            noop: { set: null },
            size: { set: ['Value 2 (+)'] },
            color: { set: 'Joy factors' }
        },
        title: 'Bubble',
        geometry: 'circle'
    }
},
{
 easing: 'cubic-bezier(0.65,0,0.65,1)',

         duration: 0.5,
     
 }
)

];

export default testSteps;