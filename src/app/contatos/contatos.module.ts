import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosListaComponent } from './contatos-lista.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContatosListaComponent
    ],
   exports: [
       ContatosListaComponent
   ]
})
export class ContatosModules {}