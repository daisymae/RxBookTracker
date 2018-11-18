// import { Observable } from "rxjs";

// // Observers vs Subscribers

// let myNumbers = [1,3,5];
// // The Observer interface used in 2 ways
// // Here it's used to produce values from an observable.
// let numberObservable$ = new Observable(subscriber => {

//   if (myNumbers.length === 0) { subscriber.error('No values'); }

//   for (let num of myNumbers) {
//     subscriber.next(num);
//   }

//   subscriber.complete();
// });

// let myObserver = {
//   next: value => console.log(`value produced: ${value}`),
//   error: err => console.log(`ERROR: ${err}`),
//   complete: () => console.log(`All done producing values.`)
// };
// // and when you subscribe to the observable,
// // it's used on an observer instance to receive those values.
// // These are really two sides of the same coin,
// // and since there are only three operations,
// // it makes sense to use the same interface
// numberObservable$.subscribe(myObserver);
