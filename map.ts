import axios from 'axios';
import { from, Observable } from 'rxjs';
import {map} from "rxjs/operators";

const getNome = (mathiasData) => mathiasData.data.name;

const mathias54$: Observable<any> = from(axios.get('https://api.github.com/users/mathias54'));

mathias54$
    .pipe(
        map(getNome)
    )
    .subscribe(response => console.log(response));

/**
 * Mathias Gheno Azzolini
 **/