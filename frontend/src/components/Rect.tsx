import {Component, createSignal, onMount} from 'solid-js';
import {Block} from "../data/diagramData";

interface RectGroupProps {
    block: Block
}

/**
 * RectGroup component represents a group of SVG elements consisting of a rectangle and a text element.
 * It allows the rectangle to be dragged within the SVG container by updating its translation transform.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Block} props.block - The Block object containing data for the component.
 * @returns {JSX.Element} The JSX element representing the RectGroup component.
 */
const RectGroup: Component<RectGroupProps> = (props) => {
    const [isDragging, setIsDragging] = createSignal(false);
    let gRef: SVGGElement;
    let eX = 0;
    let eY = 0;

    /**
     * Event handler for the "mousedown" event.
     * Sets the isDragging signal to true and updates the initial event coordinates.
     *
     * @param {MouseEvent} event - The mousedown event object.
     */
    function handleMouseDown(event: MouseEvent) {
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


    /**
     * Event handler for the "mousemove" event.
     * Updates the position of the element if dragging is in progress.
     *
     * @param {MouseEvent} event - The mousemove event object.
     */
    function handleMouseMove(event: MouseEvent) {
        if (isDragging()) {
            let {x, y} = getTranslate();
            x += event.offsetX - eX;
            eX = event.offsetX;
            y += event.offsetY - eY;
            eY = event.offsetY;
            setPosition(x, y);
        }
    }

    /**
     * Event handler for the "mouseup" and "mouseleave" events.
     * Sets the isDragging signal to false, indicating the end of dragging.
     */
    function handleMouseUp() {
        setIsDragging(false);
    }

    /**
     * Sets the position of the SVG element by updating the transform attribute.
     *
     * @param {number} x - The new X coordinate for the translation.
     * @param {number} y - The new Y coordinate for the translation.
     */
    function setPosition(x: number, y: number) {
        let newTransform = "translate(" + x + ", " + y + ")";
        gRef.setAttribute("transform", newTransform);
    }

    /**
     * Retrieves the current translation values of an SVG G element.
     *
     * @returns {Object} An object with the current X and Y translation values.
     */
    function getTranslate() {
        let currentX = 0;
        let currentY = 0;
        const currentTransform = gRef.getAttribute("transform");
        if (currentTransform) {
            const currentTranslate = currentTransform.match(/translate\(([^,]+),([^)]+)\)/);
            if (currentTranslate) {
                try {
                    currentX = parseInt(currentTranslate[1], 10);
                    currentY = parseInt(currentTranslate[2], 10);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        return {x: currentX, y: currentY}
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
