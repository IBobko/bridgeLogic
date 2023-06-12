// DataService.js

import {Block} from "../data/diagramData";

class DataService {
  private data: Block[]; // Define the data type as an array of Block objects

  constructor() {
    this.data = [];
  }

  fetchData() {
    return this.data;
  }

  updateData(newData: Block[]) {
    // Logic for updating the data
    this.data = newData;
  }

  addBlock(newBlock: Block) {
    this.data.push(newBlock); // Add a new block to the array
  }

  removeBlock(blockId: string) {
    this.data = this.data.filter((block) => block.id !== blockId); // Remove a block based on its ID
  }

  // Additional methods for data processing, if needed
}

export default new DataService();
