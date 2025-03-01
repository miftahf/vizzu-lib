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
                x: { set: ['Year','Value 3 (+)'] },
                y: { set: ['Country', 'Value 2 (+)'] },
                color: { set: 'Country' }
            },
            title: 'Mekko Chart',
            geometry: 'rectangle',
            orientation: 'horizontal'
        } 
    }),


    chart => chart.animate({
        config: {
            channels: {
                x: { set: ['Year', 'Value 3 (+)'] },
                y: { set: ['Country', 'Value 2 (+)'] },
                color: { set: 'Country' }
            },
            title: 'Bar1 Stretch',
            align: 'stretch'
        }
    },
    {
        easing: 'cubic-bezier(.39,0,.35,.99)',
     }
    ),

    
    chart => chart.animate({
    config: {
        channels: {
            x: { set: ['Joy factors', 'Value 3 (+)'] },
            y: { set: ['Country', 'Value 2 (+)'] },
            color: { set: 'Country' }
        },
        title: 'Bar2 Change Orient. & Disc',
        orientation: 'vertical'
    } 
},
       {
        delay: 0,        
        duration: 0
        }

),
chart => chart.animate({
    config: {
        channels: {
            x: { set: ['Joy factors', 'Value 3 (+)'] },
            y: { set: ['Country', 'Value 2 (+)'] },
            color: { set: 'Country' }
        },
        title: 'Mekko Chart Change Orient. & Stretch off',
        orientation: 'horizontal',
        align: 'none'
    } 
}
)];

export default testSteps;