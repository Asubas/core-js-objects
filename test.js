function sellTickets(queue) {
  const delivery = Array.from(queue);
  if (queue[0] !== 25) return false;
  let count = queue[0];
  let bol;
  delivery.shift();
  for (let i = 1; i < queue.length - 1; i += 1) {
    if (delivery[i] === 25) {
      count += delivery[i];
      delivery.shift();
    }
    if (delivery[i] > 25 && delivery[i] > count) bol = false;
    if (delivery[i] > 25 && delivery[i] < count) {
      count -= 25;
      delivery.shift();
    }
    if (delivery.length === 0) bol = true;
  }
  return bol;
}

console.log(sellTickets([25, 25, 50]));
