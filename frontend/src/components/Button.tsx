import React from 'react';
import { useContainer } from 'inversify-react';
import { ISvgEditorService } from '../services/ISvgEditorService';

const Button: React.FC = () => {
  const container = useContainer();
  const svgEditorService = container.get<ISvgEditorService>('ISvgEditorService');

  const handleAddCircle = () => {
    svgEditorService.addSquare();
  };

  return (
    <button onClick={handleAddCircle}>Add circle</button>
  );
};

export default Button;
