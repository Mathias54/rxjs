import {from, Observable, of, timer} from "rxjs";
import axios from "axios";
import {catchError, delayWhen, retryWhen, tap} from "rxjs/operators";

const mathias54$: Observable<any> = from(axios.get('https://api.github.com/users/gurilao'));

const defaultValue = () => {
    return (observable: Observable<any>) => {
        return observable
            .pipe(
                catchError(e => of({email: 'mathiasgheno@hotmail.com'})),
            );
    }
};

mathias54$
    .pipe(defaultValue())
    .subscribe(response => console.log(response));

/**
 * { email: 'mathiasgheno@hotmail.com' }
 */