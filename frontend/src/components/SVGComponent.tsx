import React, { useState } from 'react';

function SVGComponent() {
  const [rectangles, setRectangles] = useState<React.ReactElement[]>([]);

  const handleButtonClick = () => {
    const newRectangle = <rect x="100" y="100" width="50" height="50" fill="blue" />;
    setRectangles(prevRectangles => [...prevRectangles, newRectangle]);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Добавить прямоугольник</button>
      <svg>
      {rectangles.map((rectangle, index) => (
        <React.Fragment key={index}>{rectangle}</React.Fragment>
      ))}
    </svg>
    </div>
  );
}

export default SVGComponent;
