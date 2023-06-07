
export type DiagramData = {
  blocks: Block[];
  connections: Connection[];
};

export type Block = {
  id: string;
  x: number;
  y: number;
  // Другие свойства блока
};


export type Connection = {
  id: string;
  fromBlockId: string;
  toBlockId: string;
  // Другие свойства связи
};

export type DiagramContextType = {
  diagramData: DiagramData;
  updateDiagramData: (data: DiagramData) => void;
};
