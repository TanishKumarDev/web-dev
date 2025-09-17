// Concept: Node.js uses callbacks for async tasks like setTimeout or fs operations

console.log('Start');

setTimeout(() => {
    console.log('Inside callback after 2 seconds');
}, 2000); // 2-second delay

console.log('End');