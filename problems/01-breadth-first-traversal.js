/*
Write a function called printBreadthFirst that will traverse the given graph
breadth-first, printing each node when visited exactly once, on a newline.
*/

// Breadth-first traversal algorithm

// 1. Create a queue and enqueue the starting node
// 2. Create a set to store visited nodes
// 3. While the queue is not empty, repeat steps 4-6
// 4. Dequeue the first node
// 5. DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
// 6. For each unvisited neighbor, add it to the visited nodes and to the back of the queue

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printBreadthFirst(start) {
    // step 2 - create a set to store visited nodes
    const visited = new Set();
    visited.add(start);
    // step 1 - create a queue for breadth first traversal & enqueue starting node
    let q = [start];

    // step 3 - while there are nodes in the queue...
    while(q.length) {
        // step 4 - dequeue (shift off) the first node
        let node = q.shift();
        // step 5 - DO THE THING
        console.log(node);
        // step 6 - Add neighbors to the queue using adjacency list variable /\
        for(let neighbor of adjList[node]) {  // [node] keys into the node we're on, w/ values = neighbor nodes
            if(!visited.has(neighbor)) {    // if we haven't visited the next node yet,
                visited.add(neighbor);        // add it to the visited set
                q.push(neighbor);       // and push it into the queue to be visited next
            }
        }
    }
}

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                      // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                      // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                      // One possible solution:  4, 3, 5, 6, 2, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printBreadthFirst;
