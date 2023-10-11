//recursion
function recursion(level, p1, p2) {
  //recursion terminator
  if (level > maxLever) {
    print - result;
    return;
  }
  //process the data
  prcesseData(level, data);
  //drill down
  recursion(level + 1, p3, p4);
  //reverse state
  revers_state(level);
}

//DFS
const visited = new Set();
const dfs = (node, visited) => {
  visited.add(node);
  //process the current node here.

  while (node.childern) {
    if (!visited(node.childern)) {
      dfs(node.childern, visited);
    }
  }
};

//BFS
const bfs = (graph, start, end) => {
  queue = [];
  queue.push(start);
  visited.add(start);

  while (queue) {
    const newNode = queue.shift();
    visited.add(newNode);

    processe(newNode);

    if (newNode.childern) {
      queue.push(newNode.childern);
    }
  }
};

//binary search

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length;
  while (left < right) {
    let mid = left + (right - left) / 2;
    if (array[mid] === target) {
      // processe data...
      return;
    } else if (array[mid] > target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
