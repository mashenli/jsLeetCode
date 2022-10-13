const goFlight = [{
        flight: 'GD2501',
        scheduled: '08:00',
        regular: {
            weekdays: 1100,
            weekends: 900,
        },
        reward: {
            weekdays: 800,
            weekends: 500,
        },
    },
    {
        flight: 'GD2606',
        scheduled: '12:25',
        regular: {
            weekdays: 1600,
            weekends: 600,
        },
        reward: {
            weekdays: 1100,
            weekends: 500,
        },
    },
    {
        flight: 'GD8732',
        scheduled: '19:30',
        regular: {
            weekdays: 2200,
            weekends: 1500,
        },
        reward: {
            weekdays: 1000,
            weekends: 400,
        },
    }
]

const backFlight = [{
        flight: 'GD2502',
        scheduled: '12:00',
        regular: {
            weekdays: 1700,
            weekends: 900,
        },
        reward: {
            weekdays: 800,
            weekends: 800,
        },
    },
    {
        flight: 'GD2607',
        scheduled: '16:25',
        regular: {
            weekdays: 1600,
            weekends: 600,
        },
        reward: {
            weekdays: 1100,
            weekends: 500,
        },
    },
    {
        flight: 'GD8733',
        scheduled: '23:30',
        regular: {
            weekdays: 1600,
            weekends: 1000,
        },
        reward: {
            weekdays: 1500,
            weekends: 400,
        },
    }
]

const weekdays = ['MON', 'TUE', 'WED', 'THUR', 'FRI'];
const weekends = ['SAT', 'SUN'];

const getFlight = (type, goTime, backTime) => {
    const goWeek = goTime.replace(/[^a-zA-Z]/g, '');
    const goWeekType = weekdays.includes(goWeek) ? 'weekdays' : 'weekends'; // 是否是周内

    const backWeek = backTime.replace(/[^a-zA-Z]/g, '');
    const backWeekType = weekdays.includes(backWeek) ? 'weekdays' : 'weekends'; // 是否是周内

    const lowType = type.toLowerCase();

    let go = returnFlight(lowType, goWeekType, goFlight);
    let back = returnFlight(lowType, backWeekType, backFlight);

    console.log(go.flight);
    console.log(back.flight);
}

const compareDate = (t1, t2) => {
    const date = new Date();
    const a = t1.split(':');
    const b = t2.split(':');
    return date.setHours(a[0], a[1]) < date.setHours(b[0], b[1]);
};

const returnFlight = (type, weekType, flightList) => {
    let flight = flightList[0];

    for (let i = 1; i < flightList.length; i++) {
        if (flight[type][weekType] === flightList[i][type][weekType]) {
            // 如果价格相同，选起飞早的
            const flag = compareDate(flight.scheduled, flightList[i].scheduled);
            if (!flag) {
                flight = flightList[i];
            }
        } else if (flight[type][weekType] > flightList[i][type][weekType]) {
            flight = flightList[i];
        }
    }

    return flight;
}

getFlight('REWARD', '20160410SUN', '20160420WED');

// getFlight('REGULAR', '20160415FRI', '20160418MON');
