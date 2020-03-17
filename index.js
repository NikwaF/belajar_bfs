const Graph = require('./graph');
const Node = require('./node');
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('artis.json'));

const movies = data.movies;
const graph = new Graph();

movies.forEach(item => {
  let movie = item.title;
  let cast = item.cast;
  let movieNode = new Node(movie);
  graph.addNode(movieNode); 

  cast.forEach(item2 => {
    let actorNode;
    actorNode = graph.getNode(item2);

    if(actorNode === undefined){
      actorNode = new Node(item2);
    }

    actorNode = new Node(item2);
    graph.addNode(actorNode);
    movieNode.addEdges(actorNode);
  });
});


console.log(graph);