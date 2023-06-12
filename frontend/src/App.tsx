import type {Component} from 'solid-js';
import {createSignal} from "solid-js";
import Ctx from "./components/DiagramContext"

import Diagram from './components/Diagram';
import DiagramEditorComponent from "./components/DiagramEditorComponent";


const App: Component = () => {
    const [getBlocks, setBlocks] = createSignal([]);
    return (<Ctx.Provider value={[getBlocks, setBlocks]}>
        <DiagramEditorComponent/>
        <Diagram/>
    </Ctx.Provider>);
};

export default App;
