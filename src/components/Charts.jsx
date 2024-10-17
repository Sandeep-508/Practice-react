import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

const Charts = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 100
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Dynamic Updating Chart',
            align: 'left'
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
            range: 9000
        },
        yaxis: {
            max: 100
        },
        legend: {
            show: false
        },
    });

    const [series, setSeries] = useState([{ data: [] }]);

    const data = [];
    let lastDate = Date.now();

    const getNewSeries = (baseval, { min, max }) => {
        const newDate = baseval + 1000;
        lastDate = newDate;
        data.push({
            x: newDate,
            y: Math.floor(Math.random() * (max - min + 1)) + min
        });
        if (data.length > 10) {
            data.shift();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getNewSeries(lastDate, { min: 10, max: 90 });
            ApexCharts.exec('realtime', 'updateSeries', [{
                data: [...data]
            }]);
        }, 1000);

        return () => clearInterval(interval);
    }, [data]);

    return (
        <div className='overflow-hidden'>
            <div id="chart">
                <ReactApexChart options={chartOptions} series={series} type="line" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default Charts;
