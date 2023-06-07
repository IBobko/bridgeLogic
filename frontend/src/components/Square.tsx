import React, { useEffect, useRef } from 'react';
import { select, Selection } from 'd3-selection';
import { drag, D3DragEvent } from 'd3-drag';

const Square = () => {
  const rectRef = useRef(null);
  const squareRef = useRef<SVGGElement | null>(null);


  useEffect(() => {
    alert("ss")
    console.log("Square->useEffect")
    if (squareRef.current) {
      const square: any| Selection<SVGGElement, null, null, undefined> = select('svg')
        .append('rect')
        .attr('x', 100)
        .attr('y', 100)
        .attr('width', 100)
        .attr('height', 100)
        .attr('fill', 'blue');

      const dragged = (event: D3DragEvent<SVGGElement, null, null>) => {
        square.attr('x', event.x - +square.attr('width') / 2)
          .attr('y', event.y - +square.attr('height') / 2);
      };

      const dragHandler = drag<SVGGElement, null>()
        .on('drag', dragged);

      square.call(dragHandler);

      return () => {
        square.remove();
      };
    }
  }, []);

  return <rect ref={rectRef} x={100} y={100} width={100} height={100} fill={"blue"}/>;
};

export default Square;
