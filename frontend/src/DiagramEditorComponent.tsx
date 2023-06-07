import React from 'react';
import { Block, DiagramData } from "./diagramData";

import './index.scss';

const DiagramEditorComponent = ({ data, onChange }: { data: DiagramData; onChange: (newData: DiagramData) => void }) => {
  const handleAddBlock = () => {
    // Logic for creating a new block
    const newBlock: Block = {
      id: "some-id",
      x: 0,
      y: 0,
      // Other block properties
    };
    const newData: DiagramData = {
      ...data,
      blocks: [...data.blocks, newBlock],
    };
    onChange(newData);
  };

  return (
    <div>
      {/* Button for adding a block */}
      <button className="managing-button" onClick={handleAddBlock}>Add block</button>
      {/* Other markup and editor logic */}
    </div>
  );
};
export default DiagramEditorComponent;
