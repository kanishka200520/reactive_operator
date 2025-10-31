import { of, zip } from 'rxjs';

const obs1$ = of('A', 'B', 'C');
const obs2$ = of(1, 2, 3);

zip(obs1$, obs2$).subscribe(([letter, number]) => console.log(letter, number));

