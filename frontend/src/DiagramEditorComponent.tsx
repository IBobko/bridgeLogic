import React from 'react';
import {Block, DiagramData} from "./diagramData";

const DiagramEditorComponent = ({ data, onChange }: { data: DiagramData; onChange: (newData: DiagramData) => void }) => {
  const handleAddBlock = () => {
    // Логика создания нового блока
    const newBlock: Block = {
      id: "some-id",
      x: 0,
      y: 0,
      // Другие свойства блока
    };
    const newData: DiagramData = {
      ...data,
      blocks: [...data.blocks, newBlock],
    };
    onChange(newData);
  };

  return (
    <div>
      {/* Кнопка для добавления блока */}
      <button onClick={handleAddBlock}>Добавить блок</button>
      {/* Остальная разметка и логика редактора */}
    </div>
  );
};
export default DiagramEditorComponent;