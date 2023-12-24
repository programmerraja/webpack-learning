import { sqrt } from "./math.js";

console.log("HAI");

console.log(sqrt(Math.random()));
console.log(sqrt(3));

// if NICE_FEATURE is true in webapack config the below code will present in the bundle js if not it won't 
if (NICE_FEATURE) {
  console.log("HAI");

  console.log(sqrt(Math.random()));
  console.log(sqrt(3));

  console.log("HAI");

  console.log(sqrt(Math.random()));
  console.log(sqrt(3));

  console.log("HAI");

  console.log(sqrt(Math.random()));
  console.log(sqrt(3));
}
