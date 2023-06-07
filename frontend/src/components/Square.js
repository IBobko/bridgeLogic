import React, { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
import { drag } from 'd3-drag';
const Square = () => {
    const squareRef = useRef(null);
    useEffect(() => {
        if (squareRef.current) {
            const square = select(squareRef.current)
                .append('rect')
                .attr('x', 100)
                .attr('y', 100)
                .attr('width', 100)
                .attr('height', 100)
                .attr('fill', 'blue');
            const dragged = (event) => {
                square.attr('x', event.x - +square.attr('width') / 2)
                    .attr('y', event.y - +square.attr('height') / 2);
            };
            const dragHandler = drag()
                .on('drag', dragged);
            square.call(dragHandler);
            return () => {
                square.remove();
            };
        }
    }, []);
    return React.createElement("g", { ref: squareRef });
};
export default Square;
