import { map } from "rxjs/operators";

// creating an operator
let source$ = of(1, 2, 3, 4, 5);

// this is a simplistic example of an operator 
// that wraps another operator
function doublerOperator() {
  return map(value => value * 2);
}

source$.pipe(
  doublerOperator()
)
.subscribe(
  doubledValue => console.log(doubledValue)
);