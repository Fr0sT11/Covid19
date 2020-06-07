import React from 'react';
import './Data.css';
import Map from '../Map/Map.js'

const Data = ({active,recovered,death, provinceCases,statesGeojson}) =>{
    const sortedData = provinceCases.sort((a,b)=>{
        const dataA = a.province;
        const dataB = b.province;
      
        let comparison = 0;
        if (dataA > dataB) {
          comparison = 1;
        } else if (dataA < dataB) {
          comparison = -1;
        }
        return comparison;
      })
    return(
        <React.Fragment>
            <div className='data-grid'>
                <div className='data-box box1'><h1>Total Cases <br/>{active+recovered+death}</h1></div>
                <div className='data-box box2'><h3>Active Cases<br/> {active}</h3></div>
                <div className='data-box box3'><h3>Recovered Cases<br/> {recovered}</h3></div>
                <div className='data-box box4'><h3>Deaths<br/> {death}</h3></div>
                <Map 
                    sortedData={sortedData} 
                    statesGeojson={statesGeojson}
                />
            </div>
            
        </React.Fragment>
    )
}

export default Data;