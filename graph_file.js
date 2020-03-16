class Graph{
  constructor(){
    this.node = [];
    this.graph = {};
    this.start = null;
    this.end = null; 
  }

  addNode(value){
    this.node.push(value);
    this.graph[value.value] = value;
  }

  getNode(actor){
    let n = this.graph[actor];
    return n;
  }

  setEnd(val){
    this.end = this.graph[val];
    return this.end;
  }

  setStart(val){
    this.start = this.graph[val];
    return this.start;
  }
}