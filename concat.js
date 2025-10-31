import { concat, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const obs1$ = of('A', 'B');
const obs2$ = of('1', '2');

concat(obs1$, obs2$).subscribe(result => console.log(result));
