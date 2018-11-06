import {merge, Observable, timer} from 'rxjs';
import {delayWhen, map, retryWhen, tap} from "rxjs/operators";
import axios from 'axios';


const get = (url) => {
    return axios.get(`https://api.github.com/users/${url}`)
};

const valoresConcat$ = merge(
    get('mathias54'),
    get('sindresorhus'),
).pipe(
    map(r => r.data.name),
    retryRequest()
);

valoresConcat$.subscribe(console.log);

/**
 * Mathias Gheno Azzolini
 * Sindre Sorhus
 **/



// const valores$ = merge(
//     from(prm1('mathias')),
//     from(prm1('kataliny')),
//     from(prm1('leonite')),
//     from(prm1('amelio')),
// );
//
// valores$.subscribe(console.log);

const retryRequest = (value?) => {
    return (observable: Observable<any>) => {
        return observable
            .pipe(
                retryWhen(errors => {
                    return errors
                        .pipe(
                            delayWhen(() => timer(2000)),
                            tap(() => console.log('retrying...' + value ? value : '')),
                        )
                }),
            );
    }
};
