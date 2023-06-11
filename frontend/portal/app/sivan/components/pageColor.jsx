'use client'
import React, { useState } from "react";

export default function PageColor({ children }) {
    const [color, setColor] = useState('Purple');
  
    const divStyle = {
      backgroundColor: color,
      width: '100vw', // Use viewport width
      height: '100vh', // Use viewport height
      margin: 0, // Remove default margin
      padding: 0, // Remove default padding
    };
  
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
        <div style={divStyle}>
          {children}
        </div>
      </div>
    );
  }
