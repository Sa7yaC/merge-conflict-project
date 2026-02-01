import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import "../styles/Metrics.css";

function Metrics(){

    const energyRatings = [1,4,4,3,2,4,5];
    const stressRatings = [2,3,3,4,4,5,4];
    let energyColor = "#32cd32";
    let stressColor = "#32cd32";
    if(energyRatings[6]<energyRatings[5]){
        energyColor= "#ff0000";
    }
    if(stressRatings[6]<stressRatings[5]){
        stressColor= "#ff0000";
    }
    return(
        <>
        <div className="heading">
            <h2>Weekly Analysis</h2>
        </div>
        <div className="charts">
            <div className="energy">
                <h4>Energy</h4>
                <div className="linechart">
                    <LineChart
                        xAxis={[{ 
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            scaleType: 'band'
                        }]}
                        yAxis={[{ 
                            min: 1, 
                            max: 5,
                            tickNumber: 5
                        }]}
                        series={[
                            {
                                color: energyColor,
                                data: energyRatings,
                                label: 'Mood Rating'
                            },
                        ]}
                        height={200}
                        width={400}
                        // margin={{ left: 70, right: 30, top: 30, bottom: 50 }}
                    />
                </div>
            </div>
            <div className="stress">
                <h4>Stress</h4>
                <div className="linechart">
                    <LineChart
                        xAxis={[{ 
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            scaleType: 'band'
                        }]}
                        yAxis={[{ 
                            min: 1, 
                            max: 5,
                            tickNumber: 5
                        }]}
                        series={[
                            {
                                color: stressColor,
                                data: stressRatings,
                                label: 'Mood Rating'
                            },
                        ]}
                        height={200}
                        width={400}
                        // margin={{ left: 70, right: 30, top: 30, bottom: 50 }}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default Metrics;