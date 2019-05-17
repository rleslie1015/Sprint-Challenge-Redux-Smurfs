import React from 'react';


function Smurf({smurf}) {

  console.log(smurf);

  return (

    <div>

      <h2>{smurf.name} Smurf</h2>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
     

    </div>

  );

}

export default Smurf;