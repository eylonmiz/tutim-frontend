import React, { useState } from "react";

export default function PageColor() {
    const [color, setColor] = useState('Purple');
  
   const divStyle = {backgroundColor: color, innerWidth: '100%'};
  
    return (
      <div style={divStyle}>
        <button onClick={() => setColor('Aquamarine')}>
          Aquamarine
        </button>
        <button onClick={() => setColor('BlueViolet')}>
          BlueViolet
        </button>
        <button onClick={() => setColor('Chartreuse')}>
          Chartreuse
        </button>
        <button onClick={() => setColor('CornflowerBlue')}>
          CornflowerBlue
        </button>
      </div>
    );
  }
