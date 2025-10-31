import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const letters$ = of('A', 'B', 'C');

letters$
  .pipe(
    mergeMap(letter => of(`${letter}1`, `${letter}2`))
  )
  .subscribe(result => console.log(result));
