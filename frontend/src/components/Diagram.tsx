import {Component, createEffect, createSignal, onCleanup, onMount, useContext} from 'solid-js';
import '../styles/main.scss';
import {Block} from "../data/diagramData";
import Ctx from "./DiagramContext";

interface DiagramProps {
    count: number;
    blocks: Block[];
}

const Diagram: Component<DiagramProps> = (props) => {
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

    let ofX = 0;
    let ofY = 0;

    let eX = 0;
    let eY = 0;

    createEffect(() => {
        getBlocks();
        const elements = document.querySelectorAll(".draggable");
        elements.forEach((element: Element) => {
            (element as HTMLElement).addEventListener("mousedown", handleMouseDown);
            (element as HTMLElement).addEventListener("mousemove", handleMouseMove);
            (element as HTMLElement).addEventListener("mouseup", handleMouseUp);
            (element as HTMLElement).addEventListener("mouseleave", handleMouseUp);
        });
    });

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
            ofX = event.offsetX;
            ofY = event.offsetY;
        });
    });

    const [isDragging, setIsDragging] = createSignal(false);

    function handleMouseDown(event: MouseEvent) {
        console.log('Mouse down event:', event);
        setIsDragging(true);
        eX = event.offsetX;
        eY = event.offsetY;
    }

    onCleanup(() => {
        const elements = document.querySelectorAll('.draggable');
        elements.forEach((element: Element) => {
            (element as HTMLElement).removeEventListener('mousedown', handleMouseDown);
            (element as HTMLElement).removeEventListener('mousemove', handleMouseMove);
            (element as HTMLElement).removeEventListener('mouseup', handleMouseUp);
            (element as HTMLElement).removeEventListener('mouseleave', handleMouseUp);
        });
    });

    function handleMouseMove(event: MouseEvent) {
        console.log('Mouse move event:', event);
        if (isDragging()) {
            const targetElement = event.target as HTMLElement;
            const parentElement = targetElement.closest('.draggable') as HTMLElement;
            console.log(parentElement)

            console.log("eX =", eX);
            console.log("event.offsetX =", event.offsetX);
            console.log("eX !== event.offsetX:", eX !== event.offsetX);


            let currentX = 0;
            let currentY = 0;

            const currentTransform = parentElement.getAttribute("transform");
            if (currentTransform) {
                const currentTranslate = currentTransform.match(/translate\(([^,]+),([^)]+)\)/);
                if (currentTranslate) {
                    currentX = parseInt(currentTranslate[1], 10);
                    currentY = parseInt(currentTranslate[2], 10);
                }
            }

            currentX += event.offsetX - eX;
            eX = event.offsetX;

            currentY += event.offsetY - eY;
            eY = event.offsetY;

            let newTransform = "translate(" + currentX + ", " + currentY + ")";
            parentElement.setAttribute("transform", newTransform);

            console.log("eY =", eY);
            console.log("eX =", eX);
            console.log("event.offsetY =", event.offsetY);
            console.log("eY !== event.offsetY:", eY !== event.offsetY);
        }
    }

    function handleMouseUp() {
        console.log('Mouse up event');
        setIsDragging(false);
    }

    return (<div>
        Page Coordinates: X: {getPageX()} Y: {getPageY()}<br/>
        Offset Coordinates: X: {getOffsetX()} Y: {getOffsetY()}<br/>
        Client Coordinates: X: {getClientX()} Y: {getClientY()}<br/>
        Screen Coordinates: X: {getScreenX()} Y: {getScreenY()}<br/>
        <svg class={"editable-field"} ref={svgRef}>
            {getBlocks().map((block: Block, index: number) => (<g data-id={block.id} class="draggable">
                <rect
                    x={0}
                    y={index * 200}
                    height={100}
                    width={100}
                    fill="blue"
                    style={{cursor: 'move'}}
                >
                    <text font-family="Verdana" font-size="35" fill="blue" x={10} color={"red"}
                          y={index * 150 + 20}>{block.id}</text>

                </rect>
            </g>))}
        </svg>
    </div>);
};

export default Diagram;