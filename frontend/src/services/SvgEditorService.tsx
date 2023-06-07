import {injectable} from 'inversify';
import {ISvgEditorService} from './ISvgEditorService';
import React from "react";
import App from "../App";
import Square from "../components/Square";
import ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom";
import SVG from "../components/SVG";
import {Provider} from "inversify-react";
import container from "../dependencies";
import reportWebVitals from "../reportWebVitals";

function createDOMElementFromString(htmlString: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body.firstChild;
}

@injectable()
class SvgEditorService implements ISvgEditorService {
    private svgElement: SVGSVGElement | null = null;

    setSvgElement(svgRef: SVGSVGElement | null) {
        this.svgElement = svgRef;
    }

    addSquare() {

        if (this.svgElement) {

            const rect = <Square/>

            console.log(rect);


            const svgNS = "http://www.w3.org/2000/svg";


            const rectElement = document.createElementNS(svgNS, "rect");
            rectElement.setAttribute("x", "100");
            rectElement.setAttribute("y", "100");
            rectElement.setAttribute("width", "100");
            rectElement.setAttribute("height", "100");
            rectElement.setAttribute("fill", "blue");

            this.svgElement.appendChild(rectElement);
        }

       // ReactDOM.render(<SVG/>,this.svgElement?.parentElement!);

        const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(<React.StrictMode>
        <Provider container={container}>
            <App/>
        </Provider>
    </React.StrictMode>, rootElement);

    reportWebVitals(console.log);
} else {
    console.error("Root element 'root' not found in the document.");
}

    }
}

export default SvgEditorService;
