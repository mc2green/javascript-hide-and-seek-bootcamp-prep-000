function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
   return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
  const list = document.quarySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
      list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
  }

function deepestChild(){
  let currentNode = document.querySelector('#grand-node')
  let nextNode = currentNode.children[0];
  
  while (nextNode) {
    currentNode = nextNode;
    nextNode = currentNode.children[0];
  }
  return (currentNode);

}
