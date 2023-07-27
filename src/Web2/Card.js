// Card.js
import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (

  <div className='row'>
    <div className='col'><div className="card">
      <div style={{justifyContent:"space-between",flexDirection:"row"}}>
      <div>
      <h2>{title}</h2>
      <p>{description}</p>
      </div>
      <img src={imageUrl} style={{width:50,height:50}} alt={title} />
      </div>
      <div class="card-header">
         Featured
       </div>
    </div></div>
    <div className='col'><div className="card">
      <div style={{justifyContent:"space-between",flexDirection:"row"}}>
      <div>
      <h2>{title}</h2>
      <p>{description}</p>
      </div>
      <img src={imageUrl} style={{width:50,height:50}} alt={title} />
      </div>
      <div class="card-header">
         Featured
       </div>
    </div></div>
  </div>




    // <div className="card">
    //   <div style={{justifyContent:"space-between",flexDirection:"row"}}>
    //   <div>
    //   <h2>{title}</h2>
    //   <p>{description}</p>
    //   </div>
    //   <img src={imageUrl} style={{width:50,height:50}} alt={title} />
    //   </div>
    //   <div class="card-header">
    //      Featured
    //    </div>
    // </div>
  );
};

export default Card;
