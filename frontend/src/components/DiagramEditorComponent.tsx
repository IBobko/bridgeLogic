// DiagramEditorComponent.js
import {v4 as uuidv4} from 'uuid';
import {Component, useContext} from 'solid-js';
import Ctx from "./DiagramContext";

const DiagramEditorComponent: Component = (props) => {
    const [getBlocks, setBlocks] = useContext(Ctx);

    function addBlockClick() {
        const blocks = [...getBlocks()];
        const uid = uuidv4();
        blocks.push({
            id: uid,
            x: 10,
            y: 20
        });
        setBlocks(blocks);
    }

    return (
        <div id={"button-container"}>
            <button class="tool-button" onClick={addBlockClick}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 2h16v16H2V2zm2 2v12h12V4H4z"/>
                </svg>
                <span class="tooltip">Add square block</span>
            </button>
        </div>
    );
};

export default DiagramEditorComponent;