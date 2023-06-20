import type {Component} from 'solid-js';
import {createSignal} from "solid-js";
import Ctx from "./components/DiagramContext"

import Diagram from './components/Diagram';
import DiagramEditorComponent from "./components/DiagramEditorComponent";


const App: Component = () => {
    const [getBlocks, setBlocks] = createSignal([]);
    return (<Ctx.Provider value={[getBlocks, setBlocks]}>
        <div class="container">
            <div class="header"><h1 class="text-4xl">Bridge Logic</h1></div>
            <div class="content">
                <div class="tool-column"><DiagramEditorComponent/></div>
                <div class="column"><Diagram/></div>
            </div>
        </div>
    </Ctx.Provider>);
};

export default App;
