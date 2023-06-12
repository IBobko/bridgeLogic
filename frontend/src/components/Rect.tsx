import {Component, createSignal, onMount} from 'solid-js';
import {Block} from "../data/diagramData";

interface RectGroupProps {
    block: Block
}

const RectGroup: Component<RectGroupProps> = (props) => {
    const [isDragging, setIsDragging] = createSignal(false);
    let gRef: SVGGElement;
    let eX = 0;
    let eY = 0;

    function handleMouseDown(event: MouseEvent) {
        console.log('Mouse down event:', event);
        setIsDragging(true);
        eX = event.offsetX;
        eY = event.offsetY;
    }

    onMount(() => {
        gRef.addEventListener("mousedown", handleMouseDown);
        gRef.addEventListener("mousemove", handleMouseMove);
        gRef.addEventListener("mouseup", handleMouseUp);
        gRef.addEventListener("mouseleave", handleMouseUp);
    });

    function handleMouseMove(event: MouseEvent) {
        console.log('Mouse move event:', event);
        if (isDragging()) {
            let currentX = 0;
            let currentY = 0;

            const currentTransform = gRef.getAttribute("transform");
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
            gRef.setAttribute("transform", newTransform);
        }
    }

    function handleMouseUp() {
        setIsDragging(false);
    }

    return (
        <g ref={gRef}>
            <rect
                height={100}
                width={100}
                fill="hsl(210, 50%, 80%)"
                style={{cursor: 'move'}}
            />
            <text font-family="Verdana" font-size="16" y={20} x={5} fill="black">Text</text>
        </g>
    );
};

export default RectGroup;
