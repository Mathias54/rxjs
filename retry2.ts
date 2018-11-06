import {from, Observable, timer} from "rxjs";
import axios from "axios";
import {delayWhen, retry, retryWhen, tap} from "rxjs/operators";

const mathias54$: Observable<any> = from(axios.get('https://api.github.com/users/gurilao'));

const retryRequest = (value) => {
    return (observable: Observable<any>) => {
        return observable
            .pipe(
                retryWhen(errors => {
                    return errors
                        .pipe(
                            delayWhen(() => timer(2000)),
                            tap(() => console.log('retrying...' + value)),
                            retry(3),
                        )
                }),
            );
    }
};

mathias54$
    .pipe(
        retryRequest('gurilao')
    )
    .subscribe(response => console.log(response.data.bio));