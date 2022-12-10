import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  lista_artigos: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.lista_artigos = [
      {
        title:'Dia mundial do meio ambiente',
        image:'../../../assets/Imagens/imagem_1.jpeg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officiis aut veritatis at quasi nihil assumenda ullam, ut, fugit voluptatibus, neque rem molestias magni saepe? Architecto rem possimus minima aut!'
      },
      {
        title:'Reciclar é transformar!',
        image:'../../../assets/Imagens/imagem_2.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officiis aut veritatis at quasi nihil assumenda ullam, ut, fugit voluptatibus, neque rem molestias magni saepe? Architecto rem possimus minima aut!'
      },
      {
        title:'Como descartar lixo Hospitalar',
        image:'../../../assets/Imagens/imagem_3.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officiis aut veritatis at quasi nihil assumenda ullam, ut, fugit voluptatibus, neque rem molestias magni saepe? Architecto rem possimus minima aut!'
      },
      {
        title:'Riscos do Lixo Tóxico.',
        image:'../../../assets/Imagens/imagem_4.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officiis aut veritatis at quasi nihil assumenda ullam, ut, fugit voluptatibus, neque rem molestias magni saepe? Architecto rem possimus minima aut!'
      },
      {
        title:'Poluição de Lixo Tóxico',
        image:'../../../assets/Imagens/imagem_5.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officiis aut veritatis at quasi nihil assumenda ullam, ut, fugit voluptatibus, neque rem molestias magni saepe? Architecto rem possimus minima aut!'
      },
      {
        title:'Coleta Seletiva',
        image:'../../../assets/Imagens/imagem_3.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officiis aut veritatis at quasi nihil assumenda ullam, ut, fugit voluptatibus, neque rem molestias magni saepe? Architecto rem possimus minima aut!'
      },
    ]
  }


}
