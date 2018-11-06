import axios from 'axios';
import { from, Observable } from 'rxjs';
import {map, shareReplay, tap} from "rxjs/operators";

const getNome = (mathiasData) => mathiasData.name;
const getID = (mathiasData) => mathiasData.id;

const mathias54$: Observable<any> = from(axios.get('https://api.github.com/users/mathias54'));

const link0 = mathias54$.pipe(
        tap(() => console.log('executou')),
        map((response) => response.data),
        shareReplay(),
    );

const link1 = link0.pipe(map(getNome));
const link2 = link0.pipe(map(getID));

link1.subscribe((data) => console.log(data));
link2.subscribe((data) => console.log(data));

/**
 * executou
 * Mathias Gheno Azzolini
 * 14915619
 **/