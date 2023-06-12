// DiagramEditorComponent.js
import {v4 as uuidv4} from 'uuid';
import {Component, useContext} from 'solid-js';
import Ctx from "./DiagramContext";

interface DiagramEditorProps {
    count: number;
    incrementCount: () => void;
}

let i = 0;

const DiagramEditorComponent: Component<DiagramEditorProps> = (props) => {
    const [getBlocks, setBlocks] = useContext(Ctx);
    const {incrementCount} = props;


    function addBlockClick() {
        const blocks = [...getBlocks()];
        const uid = uuidv4();
        blocks.push({
            id: uid,
            x: 10,
            y: 20
        });
        setBlocks(blocks);
        incrementCount();
    }

    return (
        <div id={"button-container"}>
            {/* Button for adding a block */}
            <button class="managing-button" onClick={addBlockClick}>Add block</button>
            {/* Other markup and editor logic */}
        </div>
    );
};

export default DiagramEditorComponent;