import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5, 6);

numbers$
  .pipe(
    filter(num => num % 2 === 0)
  )
  .subscribe(result => console.log(result));
