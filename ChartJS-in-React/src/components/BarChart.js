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
                                100, 50, 100,
                            ],
                            backgroundColor: "rgba(255,99,132,0.2)",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "SQM Survey",
                            data: [
                                100, 100, 50, 100, 100, 100, 100, 50, 100, 50,
                                100, 100, 100,
                            ],
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 1,
                        },
                    ],
                }}
                height={400}
                width={600}
                options={{
                    title: {
                        display: true,
                        text: "ANALYSIS OF NQM AND NQM SURVEY",
                        fontSize: 35,
                        fontFamily: "sans-serif",
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
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChart;
