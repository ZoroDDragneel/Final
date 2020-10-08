import React from 'react';
import '../../App.css';
import data from './data.json';
import BarChart from './BarChart';

function StartUp(){
    return(
        <>
        <h1 className='start-up'>My Experience</h1>
        <div className="App">
            <BarChart data={data} />
        </div>
      </>
    );
}
export default StartUp