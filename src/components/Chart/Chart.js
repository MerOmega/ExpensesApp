import ChartBar from "./ChartBar";
import "../../componentesStyle/Chart/Chart.css";


function Chart( props ){

    return(
        <div>
            {props.dataPoints.map(dataPoint=><ChartBar 
            value={dataPoint.value} 
            maxValue ={null} 
            label={dataPoint.label}/>

            )}
        </div>
    )

}