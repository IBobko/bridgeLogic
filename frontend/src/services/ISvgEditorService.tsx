import React from "react";

export interface ISvgEditorService {
  addSquare(): void;

  setSvgElement(current: SVGSVGElement|null): void;
}
