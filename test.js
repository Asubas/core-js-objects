// function sellTickets(queue) {
//   if (queue[0] !== 25) return false;
//   let count = queue[0];
//   let i = 1;
//   while (i < queue.length) {
//     if (i === queue.length) {
//       return true;
//     }
//     if (queue[i] === 25) count += 25;
//     if (queue[i] > count) {
//       if (queue[i] === 50 && count < 25) return false;
//       if (queue[i] === 100 && count < 75) return false;
//     }
//     i += 1;
//   }
//   return true;
// }
// console.log(sellTickets([25, 25, 50]));
