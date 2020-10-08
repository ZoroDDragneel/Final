
import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis, 
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';
import './BarChart.css';


class BarChart extends React.Component {
    render() {
        const data = this.props.data;
        const chartWidth = 1000;
        const chartHeight = 1000;
        const chartDomain = [0, chartHeight];
        return (
            <div className='barchart__container'>
                <XYPlot 
                xType='ordinal'
                width={chartWidth} 
                height={chartHeight} 
                yDomain={chartDomain}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries
                    data={data}
                />
                <LabelSeries
                    data={data.map(obj => {
                        return { ...obj, label: obj.y.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge"
                />
            </XYPlot>
            </div>   
        );
    }
}
export default BarChart;
/*import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis, 
    HorizontalBarSeries,
    LabelSeries
} from 'react-vis';


class BarChart extends React.Component {
    render() {
        const data = this.props.data;
        const chartWidth = 1000;
        const chartHeight = 1000;
        const chartDomain = [0, chartHeight];
        return (
            
            <XYPlot 
                yType='ordinal'
                width={chartWidth} 
                height={chartHeight} 
                xDomain={chartDomain}
            >
                <YAxis />
                <XAxis />
                <HorizontalBarSeries
                    data={data}
                />
                <LabelSeries
                    data={data.map(obj => {
                        return { ...obj, label: obj.x.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge"
                />
            </XYPlot>
        );
    }
}
export default BarChart;*/