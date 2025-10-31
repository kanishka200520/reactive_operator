import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
  .pipe(
    reduce((acc, value) => acc + value, 0)
  )
  .subscribe(result => console.log(result));
