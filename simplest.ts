import { Observable } from "rxjs";

const simplest$ = Observable.create(observable => {
    observable.next('valor1');
    observable.next('valor2');
    observable.complete();
});

simplest$
    .subscribe(resultado => console.log(resultado));


/**
 * valor1
 * valor2
 */