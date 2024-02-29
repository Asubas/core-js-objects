// function mergeObjects(objects) {
//   const keys = [];
//   const values = [];
//   objects.forEach((obj) => {
//     keys.push(Object.keys(obj));
//     values.push(Object.values(obj));
//   });
//   let newArrKeys = [];
//   let newArrValues = [];
//   const result = [];
//   newArrKeys = newArrKeys.concat(keys[0], keys[1]);
//   newArrValues = newArrValues.concat(values[0], values[1]);

//   for (let i = 0; i < newArrKeys.length; i += 1) {
//     if (newArrKeys[i] === newArrKeys[i + 1]) {
//       const any = [];
//       any.push(newArrKeys[i]);
//       any.push(newArrValues[i] + newArrValues[i + 1]);
//       result.push(any);
//     } else if (newArrKeys[i] !== newArrKeys[i - 1]) {
//       const any2 = [];
//       any2.push(newArrKeys[i]);
//       any2.push(newArrValues[i]);
//       result.push(any2);
//     }
//   }
//   return Object.fromEntries(result);
// }

// console.log(
//   mergeObjects([
//     { a: 1, b: 2 },
//     { b: 3, c: 5 },
//   ])
// );
// function mergeObjects(objects) {
//   const newObj = { ...objects[0], ...objects[1] };
//   return newO
// }

// console.log(
//   mergeObjects([
//     { a: 1, b: 2 },
//     { b: 3, c: 5 },
//   ])
// );

// function mergeObjects(objects) {
//   if (objects.length === 0) return {};
//   if (objects.length === 1) return objects[0];
//   const firstObj = objects[0];
//   const secondObj = objects[1];
//   const result = {};
//   Object.assign(result, firstObj);
//   Object.entries(secondObj).forEach(([key, value]) => {
//     if (Object.prototype.hasOwnProperty.call(firstObj, key)) {
//       result[key] = firstObj[key] + value;
//     } else {
//       result[key] = value;
//     }
//   });
//   return result;
// }
