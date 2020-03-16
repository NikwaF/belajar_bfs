(function(){
  fetch('http://localhost/belajar_bfs/artis.json').then(res => {
    return res.json();
  }).then(data => {

    const film = data.movies;
    const graph = new Graph();

    film.forEach(item => {
      let judul = item.title;
      let pemain = item.cast;
      
      let node_film = new Node(judul);
      graph.addNode(node_film);
      

      pemain.forEach(item2 => {
        let node_aktor = graph.getNode(item2);
        if(node_aktor === undefined){
          node_aktor = new Node(item2);
        }
        graph.addNode(node_aktor);
        node_film.addEdges(node_aktor);
      });

    });


    const akhir = graph.setEnd("Frances Lee McCain");
    const mulai = graph.setStart("Luca Argentero");

    let antrian = [];
    mulai.searched = true;
    antrian.push(mulai);

    while(antrian.length > 0){
      let node_sekarang = antrian.shift();

      if(node_sekarang == akhir){
        break;
      }

      let edges = node_sekarang.edges;
      edges.forEach(item => {
        let neighbor = item;
        if(!neighbor.searched){
          neighbor.searched = true;
          neighbor.parent = node_sekarang;
          antrian.push(neighbor);
        }
      });
    }

    const path = [];
    
    path.push(akhir);
    let next = akhir.parent;
    while(next != null){
      path.push(next);
      next = next.parent;
    }

    let txt = '';
    for(let i = path.length -1 ; i >= 0 ; i--){
      txt += path[i].value;

      if(i !== 0){
        txt += ' => ';
      }
    }
    console.log(txt);
    console.log(path);
    console.log(akhir);
    document.querySelector('.isi').innerHTML = txt;
  });


  
})();