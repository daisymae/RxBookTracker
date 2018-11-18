// import { of } from "rxjs";

// // subscribing with an Observer

// let myObserver = {
//   next: value => console.log(`value produced: ${value}`),
//   error: err => console.log(`ERROR: ${err}`),
//   complete: () => console.log(`All done producing values.`)
// };

// // once have an observer, can pass
// // as a parameter on the subscribe method of an observable
// let sourceObservable$ = of(1,3,5);
// sourceObservable$.subscribe(myObserver);
