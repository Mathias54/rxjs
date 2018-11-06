import axios from 'axios';
import { from, Observable, of } from 'rxjs';
import {retry, tap, catchError } from 'rxjs/operators';

const mathias54$: Observable<any> = from(axios.get('https://api.github.com/users/gurilao'));

const retryRequest = (times) => {
    return (observable: Observable<any>) => {
        return observable
            .pipe(
                catchError( (erro) => {
                    return of({erro: erro});
                }),
                tap((retorno) => {
                    console.log('erro');
                    if(retorno.erro) {
                        throw 'Erro ao consultar';
                    }
                }),
                retry(times),
            );
    }
};

mathias54$
    .pipe(
        retryRequest(3),
    )
    .subscribe(
        response => console.log(response.data.bio),
        error => console.log(`Ocorreu um erro: ${error}`)
    );

/**
 * Tentativas de retantar sem interval
 **/