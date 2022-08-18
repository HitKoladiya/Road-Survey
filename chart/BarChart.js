import React from "react";
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    return (
        <div>
            <Bar
            data={{
                labels: ['N1','N2','N3','N4','N5','N6','N7','N8','N9','N10','N11','N12'],
            }}
            height={400}
            width={600}

            />
        </div>
    )
}
export default BarChart