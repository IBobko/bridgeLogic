import {createContext} from 'solid-js';

import {Block} from "../data/diagramData";


export type DiagramContextValue = [() => Block[], (value: Block[]) => void];
const defaultValue: DiagramContextValue = [() => [], () => {
}];

const DiagramContext = createContext<DiagramContextValue>(defaultValue);

export default DiagramContext;
