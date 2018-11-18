// import { of } from "rxjs";

// // subscribing with callbacks

// // can do the same thing as before without an objectliteral
// // just pass the callback functions directly to subscribe
// // don't have to name them, just pass in the correct order
// let sourceObservable$ = of(1,3,5);
// sourceObservable$.subscribe(
//   value => console.log(`value produced: ${value}`),
//   err => console.log(`ERROR: ${err}`),
//   () => console.log(`All done producing values.`)
// );

