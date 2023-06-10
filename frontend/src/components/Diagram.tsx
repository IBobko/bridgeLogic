import {Component, createEffect, createSignal, onCleanup} from 'solid-js';
import '../styles/main.scss';
import {select, Selection} from "d3-selection";
import {D3DragEvent, drag} from "d3-drag";

interface DiagramProps {
    count: number;
}

const Diagram: Component<DiagramProps> = (props) => {
    const [divs, setDivs] = createSignal<Array<string>>([]);

    createEffect(() => {
        const newDivs: Array<string> = [];
        for (let i = 0; i < props.count; i++) {
            newDivs.push(`Див ${i + 1}`);
        }
        setDivs(newDivs);

        const square: any | Selection<SVGGElement, null, null, undefined> = select('g');
        const dragHandler = drag<Element, null>()
            .on('drag', (event: D3DragEvent<Element, null, null>) => {
                const element = select(event.sourceEvent.srcElement);
                const squareWidth = +element.attr('width');
                const squareHeight = +element.attr('height');
                const newX = event.x - squareWidth / 2 + event.dx;
                const newY = event.y - squareHeight / 2 + event.dy;
                element.attr('x', newX).attr('y', newY);
            });
        square.call(dragHandler);
    });

    console.log('Diagram render'); // Добавлено для наглядности

    return (
        <svg class={"editable-field"}>
            <g>
                {divs().map((div, index) => (
                    <rect
                        x={10}
                        y={index * 50 + 20}
                        height={150}
                        width={150}
                        fill="blue"
                        style={{cursor: 'move'}}
                    >
                        <text y={index * 50 + 20}>{div}</text>
                    </rect>
                ))}
            </g>
        </svg>
    );
};

export default Diagram;