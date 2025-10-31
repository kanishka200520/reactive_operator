import { merge, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const obs1$ = of('A', 'B').pipe(delay(1000));
const obs2$ = of('1', '2');

merge(obs1$, obs2$).subscribe(result => console.log(result));
