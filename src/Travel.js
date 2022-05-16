import React from 'react';
import './App.css';
export default function Travel(props)
{
    return(
        <main>
          <div className="traveldetails">
            <img src={`${props.img}`}  className="image1" />
           <div>
                <h4>{props.location}</h4>
                <h2>{props.title}</h2>
                <h5>{props.Date}</h5>
                <h6 class="description">{props.description}</h6>
            </div>
            
          </div>
         
        </main>
       
          

    );
}