import React, { useState } from 'react';

import MenuChart from '../MenuChart/index';

//Charts
import Chart1 from '../Chart_01/index';
import Chart2 from '../Chart_02/index';
import Chart3 from '../Chart_03/index';
import Chart4 from '../Chart_04/index';

export default props => {
    const [chart, setChart] = useState(1);

    function viewChart(value) {
        setChart(value)
    }

    if (chart == 1) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Chart1 />
            </>
        )
    }
    if (chart == 2) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Chart2 />
            </>
        )
    }
    if (chart == 3) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Chart3 />
            </>
        )
    }
    if (chart == 4) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Chart4 />
            </>
        )
    }
}