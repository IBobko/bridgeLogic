import type {Component} from 'solid-js';
import {createSignal} from "solid-js";
import DiagramContext from "./components/DiagramContext"

import Diagram from './components/Diagram';
import DiagramEditorComponent from "./components/DiagramEditorComponent";
import DataService from "./services/DataService";
import {Block} from "./data/diagramData";

const App: Component = () => {


    function handleClick() {
        console.log("Кнопка нажата!");
    }

    function handleMouseOver() {
        console.log("Курсор наведен на кнопку!");
    }

    const buttonHandlers = {
        handleClick, handleMouseOver,
    };


    const [count, setCount] = createSignal(0);


    function incrementCount() {
        setCount(count() + 1);
        const block: Block = {
            id: "1",
            x: 10,
            y: 20,
        };
        DataService.addBlock(block);
    }


    return (<DiagramContext.Provider value={buttonHandlers}>
            <DiagramEditorComponent count={count()} incrementCount={incrementCount}/>
            <Diagram count={count()} blocks={DataService.fetchData()}/>
        </DiagramContext.Provider>

    );
};

export default App;
