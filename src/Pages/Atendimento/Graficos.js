import React from 'react';
import  CanvasJSReact from './canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Graficos() {
    
        const options = {
          title: {
            text: "Basic Column Chart in React"
          },
          data: [{				
                    type: "column",
                    dataPoints: [
                        { label: "Apple",  y: 10  },
                        { label: "Orange", y: 15  },
                        { label: "Banana", y: 25  },
                        { label: "Mango",  y: 30  },
                        { label: "Grape",  y: 28  }
                    ]
           }]
       }
    
       return (
          <div>
            <CanvasJSChart options = {options}/>
          </div>
        );
     
}

export default Graficos;
