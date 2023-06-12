import {Component, createSignal, onMount, useContext} from 'solid-js';
import '../styles/main.scss';
import {Block} from "../data/diagramData";
import Ctx from "./DiagramContext";
import RectGroup from "./Rect";

const Diagram: Component = (props) => {
    let svgRef: any;
    let [getBlocks, setBlocks] = useContext(Ctx);

    const [getScreenX, setScreenX] = createSignal(0);
    const [getScreenY, setScreenY] = createSignal(0);

    const [getPageX, setPageX] = createSignal(0);
    const [getPageY, setPageY] = createSignal(0);

    const [getOffsetX, setOffsetX] = createSignal(0);
    const [getOffsetY, setOffsetY] = createSignal(0);

    const [getClientY, setClientY] = createSignal(0);
    const [getClientX, setClientX] = createSignal(0);


    onMount(() => {
        svgRef.addEventListener("mousemove", (event: MouseEvent) => {
            setPageX(event.x)
            setPageY(event.y)
            setOffsetX(event.offsetX);
            setOffsetY(event.offsetY);
            setClientX(event.clientX);
            setClientY(event.clientY);
            setScreenX(event.screenX);
            setScreenY(event.screenY);
        });
    });

    return (<div>
        Page Coordinates: X: {getPageX()} Y: {getPageY()}<br/>
        Offset Coordinates: X: {getOffsetX()} Y: {getOffsetY()}<br/>
        Client Coordinates: X: {getClientX()} Y: {getClientY()}<br/>
        Screen Coordinates: X: {getScreenX()} Y: {getScreenY()}<br/>
        <svg class={"editable-field"} ref={svgRef}>
            {getBlocks().map((block: Block, index: number) => (
                <RectGroup block={block}/>
            ))}
        </svg>
    </div>);
};

export default Diagram;