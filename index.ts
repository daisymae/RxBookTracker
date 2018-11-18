import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';

//#region Creating Observables
// // a stand-alone subscriber function
// function subscribe(subscriber) {

//   for (let book of allBooks) {
//     subscriber.next(book);
//   }
// }

// // pass the subscribe function to the Observable ctor
// // let allBooksObservable$ = new Observable(subscribe);

// // much more common to use arrow function:
// // alternatively could use wrapper function Observable.create in place of 'new Observable'
// // everything else remains the same
// let allBooksObservable$ = new Observable(subscriber => {
//   // 3 methods that exist on Observable interface: next, error, complete

//   // handle errors in observable
//   if (document.title !== 'RxBookTracker') {
//     subscriber.error('Incorrect page title.');
//   }

//   // handle data
//   for (let book of allBooks) {
//     subscriber.next(book);
//   }

//   // notify of completion
//   setTimeout(() => {
//     subscriber.complete();
//   }, 2000);

//   // need to return to clean up after
//   return () => console.log('Executing teardown code.');

// });

// // MUST subscribe for observable to execute
// allBooksObservable$.subscribe(book => console.log(book.title));


// 'of' returns an observable from data you already have
// let source1$ = of('hello', 10, true, allReaders[0].name);

// // source1$.subscribe(value => console.log(value));

// let source2$ = from(allBooks);

// // source2$.subscribe(book => console.log(book.title));

// // how to combine 2 observables into 1; want combined into a single 
// // will produce a single output that will have all the values of 
// // the first followed by all the values of the second
// concat(source1$, source2$)
//   .subscribe(value => console.log(value));


// let button = document.getElementById('readersButton');

// fromEvent(button, 'click')
//   .subscribe(event => {
//     console.log(event);

//     let readersDiv = document.getElementById('readers');

//     for(let reader of allReaders) {
//       readersDiv.innerHTML += reader.name + '<br>';
//     }

//   });

// let button = document.getElementById('readersButton');

// // use ajax call to server instead of using the static data file
// fromEvent(button, 'click')
//   .subscribe(event => {
//     ajax('api/readers')
//       .subscribe(ajaxResponse => {
//         console.log(ajaxResponse);
//         let readers = ajaxResponse.response;
//         let readersDiv = document.getElementById('readers');

//         for (let reader of readers) {
//           readersDiv.innerHTML += reader.name + '<br>';
//         }
//       })
//   });
//#endregion

//#region Subscribing to Observables with Observers

// let books$ = from(allBooks);

// // as an object literal:
// let booksObserver = {
//   next: book => console.log(`Title: ${book.title}`),
//   error: err => console.log(`ERROR: ${err}`),
//   complete: () => console.log(`All done!`)
// };

// books$.subscribe(booksObserver);

// // as callback functions
// // more common way done in development
// books$.subscribe(
//   book => console.log(`Title: ${book.title}`),
//   err => console.log(`ERROR: ${err}`),
//   () => console.log(`All done!`)
// );

// // to show all the functions are optional,
// // even the ones most obviously needed most of the time
// books$.subscribe(
//   null,
//   null,
//   () => console.log(`All done!`)
// );

let currentTime$ = new Observable(subscriber => {
  const timeString = new Date().toLocaleTimeString();
  subscriber.next(timeString);
  subscriber.complete();
});

currentTime$.subscribe(
  currentTime => console.log(`Observer 1: ${currentTime}`)
);

setTimeout(() => {
  
currentTime$.subscribe(
  currentTime => console.log(`Observer 2: ${currentTime}`)
);
}, 1000);

setTimeout(() => {
  
  currentTime$.subscribe(
    currentTime => console.log(`Observer 3: ${currentTime}`)
  );
  }, 2000);


let timesDiv = document.getElementById('times');
let button = document.getElementById('timerButton');

// let timer$ = interval(1000);

// another way:
let timer$ = new Observable(subscriber => {
  let i = 0;
  let intervalID = setInterval(() => {
    subscriber.next(i++);
  }, 1000);

  return () => {
    console.log('Executing teardown code.');
    clearInterval(intervalID);
  }
});

// get a handle on the subscription returned from subscribe()
let timerSubscription = timer$.subscribe(
  value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
  null,
  () => console.log('All done!')
);

let timerConsoleSubscription = timer$.subscribe(
  value => console.log(`${new Date().toLocaleTimeString()} (${value})`)
);

// by doing this, unsubscribe will unsubscribe
// from both subscriptions
timerSubscription.add(timerConsoleSubscription);
// NOTE: can also remove a subscription previously added
// timerSubscription.remove(timerConsoleSubscription);

fromEvent(button, 'click')
  .subscribe(
    // tell timerSubscription no longer interested
    event => timerSubscription.unsubscribe()
  );

//#endregion