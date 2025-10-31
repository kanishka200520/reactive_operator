import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
  .pipe(
    map(num => num * 10)
  )
  .subscribe(result => console.log(result));
