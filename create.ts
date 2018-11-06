import { Observable } from "rxjs";
import axios from 'axios';

const mathias54$ = Observable.create(observable => {
    axios
        .get('https://api.github.com/users/mathias54')
        .then(response => observable.next(response.data))
        .catch(erro => observable.error(erro))
        .finally(() => observable.complete());
});

mathias54$
    .subscribe(resultado => console.log(resultado.name));


/**
 * Mathias Gheno Azzolini
 */

/**
 * Encapsulando um HTTP request em um RxJS Observable
 */

