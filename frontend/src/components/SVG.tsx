// components/SVG.js
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {ISvgEditorService} from "../services/ISvgEditorService";
import {useInjection} from "inversify-react";


const SVG: React.FC = () => {
    const [count, setCount] = useState(0);
    const svgRef = useRef<SVGSVGElement>(null);
    const svgEditorService = useInjection<ISvgEditorService>('ISvgEditorService');
    useEffect(() => {
        if (svgEditorService) {
            svgEditorService.setSvgElement(svgRef.current);
        }
    }, [svgEditorService]);
    return <svg ref={svgRef} style={{width: '100%', height: '100vh'}}></svg>;
};

export default SVG;
