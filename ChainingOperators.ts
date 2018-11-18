// chaining operators

let source$ = of(1, 2, 3, 4, 5);

// pre 5.5 version code
// chaining operators
// source$
//   .map(value => value * 2)
//   .filter(mappedValue => mappedValue > 5)
//   // call subscribe to observe the values produced by the final observable in the chain
//   .subscribe(
//     finalValue => console.log(finalValue) // 6, 8, 10
//   );

// this performs the same as the chaining above
// but uses the new pipe() function syntax
source$.pipe(
  map(value => value *2),
  filter(mappedValue => mappedValue > 5)
)
.subscribe(
  finalValue => console.log(finalValue)
);
