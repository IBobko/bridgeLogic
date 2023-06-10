import type {Component} from 'solid-js';
import DiagramContext from "./components/DiagramContext"

import Diagram from './components/Diagram';
import DiagramEditorComponent from "./components/DiagramEditorComponent";
import {createSignal} from "solid-js";

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

    // Определение функции изменения состояния
    function incrementCount() {
        setCount(count() + 1);
    }


    return (<DiagramContext.Provider value={buttonHandlers}>
            <DiagramEditorComponent count={count()} incrementCount={incrementCount}/>
            <Diagram count={count()}/>
        </DiagramContext.Provider>

    );
};

export default App;
