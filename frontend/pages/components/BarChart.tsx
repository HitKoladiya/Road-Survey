import React from "react";
import { Bar, defaults } from "react-chartjs-2";

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const BarChart = () => {
    return (
        <div>
            <Bar
                data={{
                    labels: [
                        "N1",
                        "N2",
                        "N3",
                        "N4",
                        "N5",
                        "N6",
                        "N7",
                        "N8",
                        "N9",
                        "N10",
                        "N11",
                        "N12",
                    ],
                    datasets: [
                        {
                            label: "NQM Survey",
                            data: [
                                100, 100, 100, 100, 50, 100, 100, 100, 50, 100,
                                100, 50,
                            ],
                            backgroundColor: "#1f2937b5",
                            borderWidth: 0,
                        },
                        {
                            label: "SQM Survey",
                            data: [
                                100, 100, 50, 100, 100, 100, 100, 50, 100, 50,
                                100, 100,
                            ],
                            backgroundColor: "#80e0df",
                            borderWidth: 0,
                        },
                    ],
                }}
                height={400}
                width={600}
                options={{
                    title: {
                        display: true,
                        text: "ANALYTICAL REPORT OF NQM AND SQM NORMS",
                        fontSize: 35,
                        fontFamily: "Times New Roman",
                    },
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 20,
                            fontfamily: "Times New Roman",
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChart;
