import { Observable } from 'rxjs';
import { allBooks } from './data';

// a stand-alone subscriber function
function subscribe(subscriber) {

  for (let book of allBooks) {
    subscriber.next(book);
  }
}

// pass the subscribe function to the Observable ctor
// let allBooksObservable$ = new Observable(subscribe);

// much more common to use arrow function:
// alternatively could use wrapper function Observable.create in place of 'new Observable'
// everything else remains the same
let allBooksObservable$ = new Observable(subscriber => {
  // 3 methods that exist on Observable interface: next, error, complete

  // handle errors in observable
  if (document.title !== 'RxBookTracker') {
    subscriber.error('Incorrect page title.');
  }

  // handle data
  for (let book of allBooks) {
    subscriber.next(book);
  }

  // notify of completion
  setTimeout(() => {
    subscriber.complete();
  }, 2000);

  // need to return to clean up after
  return () => console.log('Executing teardown code.');

});

// MUST subscribe for observable to execute
allBooksObservable$.subscribe(book => console.log(book.title));
