import axios from 'axios';
import { from, Observable } from 'rxjs';

const mathias54$: Observable<any> = from(axios.get('https://api.github.com/users/mathias54'));

mathias54$
    .subscribe(response => console.log(response.data.name));

/**
 *  Mathias Gheno Azzolini
 **/