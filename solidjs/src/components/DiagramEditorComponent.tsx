// DiagramEditorComponent.js
import {Component, useContext} from 'solid-js';
interface DiagramEditorProps {
    count: number;
    incrementCount: () => void;
}

const DiagramEditorComponent: Component<DiagramEditorProps> = (props) => {
    const {incrementCount} = props;
    return (
        <div>
            {/* Button for adding a block */}
            <button class="managing-button" onClick={incrementCount}>Add block</button>
            {/* Other markup and editor logic */}
        </div>
    );
};

export default DiagramEditorComponent;