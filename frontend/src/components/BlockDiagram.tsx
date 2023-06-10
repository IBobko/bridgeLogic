import {Component, createSignal, useContext} from 'solid-js';
// import {Block, DiagramData} from './diagramData';
// import {select, Selection} from "d3-selection";
// import {D3DragEvent, drag} from "d3-drag";
import DiagramContext from "./DiagramContext";

interface BlockDiagramProps {
    count: number
}

const BlockDiagram: Component<BlockDiagramProps> = (props) => {
    const {count} = props;
    const [blockMapSignal, setBlockMapSignal] = createSignal(new Map());
    const handleAddBlock = useContext(DiagramContext);

    function updateBlockMap() {
        const newBlockMap = new Map(blockMapSignal());
        newBlockMap.set('key', 'block'); // Добавление нового блока в Map
        setBlockMapSignal(newBlockMap);

    }

    //
    // = ({data, onChange}: { data: DiagramData; onChange: (newData: DiagramData) => void }) => {
    // const [activeBlock, setActiveBlock] = useState<Block | null>(null);
    // const [initialCoordinates, setInitialCoordinates] = useState<{ x: number; y: number } | null>(null);
    // let yOffset = 0; // Изначальное смещение по оси Y
    // // Логика компонента
    //
    // // Обработчик события начала перемещения блока
    // const handleBlockDragStart = (block: Block, event: React.MouseEvent<SVGRectElement>) => {
    //     event.stopPropagation();
    //     setActiveBlock(block);
    //     setInitialCoordinates({x: event.clientX, y: event.clientY});
    // };
    //
    // useEffect(() => {
    //     const square: any | Selection<SVGGElement, null, null, undefined> = select('g');
    //     const dragHandler = drag<Element, null>()
    //         .on('drag', (event: D3DragEvent<Element, null, null>) => {
    //             const element = select(event.sourceEvent.srcElement);
    //             const squareWidth = +element.attr('width');
    //             const squareHeight = +element.attr('height');
    //             const newX = event.x - squareWidth / 2 + event.dx;
    //             const newY = event.y - squareHeight / 2 + event.dy;
    //             element.attr('x', newX).attr('y', newY);
    //         });
    //     square.call(dragHandler);
    // }, []);
    //
    //

    //         {/* Рендер блоков */}
    //         {data.blocks.map((block) => {
    //             const {id, x, y} = block;
    //             const blockY = y + yOffset; // Вычисление вертикальной позиции блока с учетом смещения
    //
    //             return (
    //                 <g key={id} width={1500}>
    //                     <rect
    //                         x={x}
    //                         y={blockY}
    //                         height={150}
    //                         width={150}
    //                         fill="blue"
    //                         style={{cursor: 'move'}}
    //                     />
    //                     {/* Разметка для каждого блока */}
    //                     <text x={x + 5} y={blockY + 30} fill="white">
    //                         Block ID: {id}
    //                     </text>
    //                 </g>
    //             );
    //         })}
    return (

        <g>
            <text
                x={0}
                y={10}
                fill="blue"
                style={{cursor: 'move'}}
            >
                {count}
            </text>
        </g>);
};

export default BlockDiagram;
