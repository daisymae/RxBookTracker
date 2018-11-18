// manually applying an operator

let source$ = of(1, 2, 3, 4, 5);

// map returns a function
// capturing that function in the variable doubler
// this returned function takes an observable as a parameter
// and returns an observable
let doubler = map(value => value * 2);

// doubled$ is the returned observable
let doubled$ = doubler(source$);

// still need subscribe to start it
doubled$.subscribe(
  value => console.log(value)
);