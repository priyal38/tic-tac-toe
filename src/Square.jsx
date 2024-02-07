import React, { useEffect, useState } from 'react';

const Square = ({ value, onClick }) => {

  const [bgColor , setBgColor] = useState('')
  useEffect(() => {
    if (value === 'X'){
      setBgColor('#6699FF');
    }
     else if(value === 'O'){
      setBgColor('#99CC66')
    }
    else{
      setBgColor('white')
    }
    
  }, [value])
  

  return (
    <div className="square" style={{backgroundColor:bgColor}} onClick={onClick}>
      {value}
    </div>
  );
};

export default Square;
