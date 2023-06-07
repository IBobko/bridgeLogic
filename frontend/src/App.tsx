import React from 'react';
import 'reflect-metadata';
import { DiagramData } from "./diagramData";
import BlockDiagram from "./BlockDiagram";
import DiagramEditorComponent from "./DiagramEditorComponent";

type DiagramContextType = {
    diagramData: DiagramData;
    updateDiagramData: (data: DiagramData) => void;
};

const defaultValue: DiagramContextType = {
    diagramData: {
        blocks: [],
        connections: [],
    },
    updateDiagramData: () => {},
};

const DiagramContext = React.createContext<DiagramContextType>(defaultValue);

// Component that displays the block diagram
const Diagram = () => {
    const { diagramData, updateDiagramData } = React.useContext(DiagramContext);

    // Handler for diagram changes
    const handleDiagramChange = (newData: DiagramData) => {
        updateDiagramData(newData);
    };

    return (
        <svg className={"editable-field"}>
            {/* Display the block diagram using diagramData */}
            <BlockDiagram data={diagramData} onChange={handleDiagramChange} />
        </svg>
    );
};

// Component that edits the block diagram
const DiagramEditor = () => {
    const { diagramData, updateDiagramData } = React.useContext(DiagramContext);

    // Handler for diagram changes in the editor
    const handleEditorChange = (newData: DiagramData) => {
        // Only update the diagram data in the context
        updateDiagramData(newData);
    };

    return (
        <div id={"button-container"}>
            {/* Block diagram editor using diagramData */}
            <DiagramEditorComponent data={diagramData} onChange={handleEditorChange} />
        </div>
    );
};

const initialDiagramData: DiagramData = {
    blocks: [], // Initial blocks
    connections: [], // Initial connections
};

// Container component that provides the context
const App = () => {
    const [diagramData, setDiagramData] = React.useState(initialDiagramData);

    // Function to update the diagram data
    const updateDiagramData = (newData: DiagramData) => {
        setDiagramData(newData);
    };

    return (
        <DiagramContext.Provider value={{ diagramData: diagramData, updateDiagramData: updateDiagramData }}>
            {/* Render components that need access to the diagram data */}
            <DiagramEditor />
            <Diagram />
        </DiagramContext.Provider>
    );
};

export default App;
