import React, { useState, Suspense } from 'react';
import Tilt from 'react-parallax-tilt';
import CanvasLoader from "../Loader";
import "../../index.css";

function BallCanvas({ icon, name, tooltipText }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => setShowTooltip(true), 500); // adjust delay here, currently 500ms
    setTimeoutId(id);
  }

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowTooltip(false);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showTooltip && 
        <div style={{position: 'absolute', backgroundColor: 'black', color: 'white', zIndex: 1000, fontSize: '0.8rem', padding: '5px'}}>
          {tooltipText}
        </div>
      }
      <Suspense fallback={<CanvasLoader />}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 150,
          }}
          className='w-[100px] h-[100px] rounded-full bg-[#333333bb] p-4 ball_card glow'
        >
          <img src={icon} alt={name} className="w-full h-full object-cover" />
        </Tilt>
      </Suspense>
    </div>
  );
}

export default BallCanvas;
