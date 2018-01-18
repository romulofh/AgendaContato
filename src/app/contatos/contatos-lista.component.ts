import { Component } from '@angular/core';

import { Contato } from './contato.model';
import { Contatos } from './contatos-mock';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent{

    contatos: Contato[] = Contatos;

}