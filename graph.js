class Graph{
  constructor(){
    this.node = [];
    this.graph = {};
  }

  addNode(value){
    this.node.push(value);
    this.graph[value.value] = value;
  }

  getNode(actor){
    let n = this.graph[actor];
    return n;
  }

}

module.exports = Graph; 