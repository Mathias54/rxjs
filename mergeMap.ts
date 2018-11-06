import axios from 'axios';
import { from, Observable } from 'rxjs';
import {mergeMap} from "rxjs/operators";

const getEmail = (mathiasData) => {
    return new Promise(resolve =>
        resolve({ email: 'mathiasgheno@gmail.com', nome: mathiasData.data.name}));
};

const mathias54$: Observable<any> = from(axios.get('https://api.github.com/users/mathias54'));

mathias54$
    .pipe(
        mergeMap(getEmail)
    )
    .subscribe(response => console.log(response));

/**
 * { email: 'mathiasgheno@gmail.com',
 *   nome: 'Mathias Gheno Azzolini' }
 **/