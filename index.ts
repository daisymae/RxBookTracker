import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';

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


let button = document.getElementById('readersButton');

fromEvent(button, 'click')
  .subscribe(event => {
    console.log(event);

    let readersDiv = document.getElementById('readers');

    for(let reader of allReaders) {
      readersDiv.innerHTML += reader.name + '<br>';
    }

  });
