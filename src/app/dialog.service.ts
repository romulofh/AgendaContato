import { Injectable } from '@angular/core';

@Injectable()
export class DialogSerivce {

    confirm(message?: string){
        return new Promise(resolve => {
            return resolve(window.confirm(message || 'Confirmar?'));
        });
    }

}