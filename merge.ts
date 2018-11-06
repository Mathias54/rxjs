import axios from 'axios';
import {concat, from, merge, Observable, of, timer} from 'rxjs';
import {catchError, delay, delayWhen, retry, retryWhen, tap} from "rxjs/operators";


const prm1 = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(value === 'mathias') {
                reject('erro')
            } else {
                resolve(value);
            }
        }, 1000);
    });
};

const retryRequest = (value) => {
    return (observable: Observable<any>) => {
        return observable
            .pipe(
                retryWhen(errors => {
                    return errors
                        .pipe(
                            delayWhen(() => timer(2000)),
                            tap(() => console.log('retrying...' + value)),
                        )
                }),
            );
    }
};

// const valores$ = merge(
//     from(prm1('mathias')),
//     from(prm1('kataliny')),
//     from(prm1('leonite')),
//     from(prm1('amelio')),
// );
//
// valores$.subscribe(console.log);


const valoresConcat$ = concat(
    from(prm1('kataliny')).pipe(tap(() => console.log('fazendo kata dnv'))),
    from(prm1('leonite')).pipe(tap(() => console.log('fazendo leo dnv'))),
    from(prm1('mathias')).pipe(tap(() => console.log('fazendo kata dnv')), retryRequest('mathias')),
    from(prm1('amelio')).pipe(tap(() => console.log('fazendo amelio dnv'))),
);

valoresConcat$.subscribe(console.log);