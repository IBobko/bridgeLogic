// DiagramContext.js
import { createContext } from 'solid-js';

const DiagramContext = createContext({
  handleClick: () => {},
  handleMouseOver: () => {},
});

export default DiagramContext;