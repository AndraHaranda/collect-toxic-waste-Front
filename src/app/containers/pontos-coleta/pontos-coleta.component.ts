import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pontos-coleta',
  templateUrl: './pontos-coleta.component.html',
  styleUrls: ['./pontos-coleta.component.css']
})
export class PontosColetaComponent implements OnInit {
  pontos_coleta: any[] = []
  showSpinner: boolean = false;
  show_navbar: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.showSpinner = true;

    setTimeout(() => {
      setTimeout(() => {

        this.show_navbar = true;
      }, 3000);
      this.showSpinner = false;
      this.pontos_coleta = [
        {
          title:'Novo cronograma da Coleta de Materiais Recicláveis contempla todas as regiões de Araxá',
          image:'../../../assets/Imagens/coleta_principal.jpeg',
          link:'https://www.araxa.mg.gov.br/noticia/5719/novo-cronograma-da-coleta-de-materiais-reciclaveis-contempla-todas-as-regioes-de-araxa#:~:text=%2D%20SETOR%20NORTE%3A%20Morada%20do%20Sol,Teixeira%20e%20Cincinato%20de%20%C3%81vila.&text=%2D%20SETOR%20LESTE%3A%20Recanto%20do%20Bosque,e%202%20e%20Residencial%20Vit%C3%B3ria',
          descricao: `Nessa marcha sem parar, caminhar é resistir e se unir é reciclar". A melodia, já conhecida pelos araxaenses, é um convite à comunidade para separar materiais recicláveis que serão recolhidos pela cooperativa e associações de reciclagem`
        },
        {
          title:'CRONOGRAMA REGIÃO CENTRAL (segunda a sexta, a partir das 18h, e aos sábados, das 12h30 às 15h)',
          image:'../../../assets/Imagens/coleta_3.jpeg',
          link:'https://www.araxa.mg.gov.br/noticia/5719/novo-cronograma-da-coleta-de-materiais-reciclaveis-contempla-todas-as-regioes-de-araxa#:~:text=%2D%20SETOR%20NORTE%3A%20Morada%20do%20Sol,Teixeira%20e%20Cincinato%20de%20%C3%81vila.&text=%2D%20SETOR%20LESTE%3A%20Recanto%20do%20Bosque,e%202%20e%20Residencial%20Vit%C3%B3ria',
          descricao: `- Av. Amazonas, Av. Vereador João Sena, Av. Getúlio Vargas, Av. Prefeito Aracely de Paula, Av. Wilson Borges, Av. Dâmaso Drummond, Av. Senador Montandon, Av. Imbiara, Av. João Paulo II, R. Calimério Guimarães, R. Capitão Izidro, R. Dom José Gaspar, etc...`
        },
        {
          title:'CRONOGRAMA SETOR LESTE',
          image:'../../../assets/Imagens/coleta_1.jpeg',
          link:'https://www.araxa.mg.gov.br/noticia/5719/novo-cronograma-da-coleta-de-materiais-reciclaveis-contempla-todas-as-regioes-de-araxa#:~:text=%2D%20SETOR%20NORTE%3A%20Morada%20do%20Sol,Teixeira%20e%20Cincinato%20de%20%C3%81vila.&text=%2D%20SETOR%20LESTE%3A%20Recanto%20do%20Bosque,e%202%20e%20Residencial%20Vit%C3%B3ria',
          descricao: `
          <strong>- Segunda:</strong> Odilon José Carneiro, Santo Antônio, Recanto das Mangueiras, José Ferreira Guimarães, Vila Andrea, Veredas da Cidade, Portal Veredas e Veredas do Belvedere. <br />
          <strong>- Terça:</strong> Padre Alaor, Vila Estância, Lamartine, Primavera, Adhemar Rodrigues Valle, Novo Santo Antônio, Parque das Flores, Residencial Flora Urciano e Jardim Cecília. <br />
          <strong>- Quarta:</strong> Recanto do Bosque, Bouganville 1 e 2, Recanto dos Pássaros, Bela Vista, Residencial Solaris 1 e 2, Roberto Pedrina 1 e 2 e Residencial Vitória.`
        },
        {
          title:'CRONOGRAMA SETOR OESTE/SUL',
          link:'https://www.araxa.mg.gov.br/noticia/5719/novo-cronograma-da-coleta-de-materiais-reciclaveis-contempla-todas-as-regioes-de-araxa#:~:text=%2D%20SETOR%20NORTE%3A%20Morada%20do%20Sol,Teixeira%20e%20Cincinato%20de%20%C3%81vila.&text=%2D%20SETOR%20LESTE%3A%20Recanto%20do%20Bosque,e%202%20e%20Residencial%20Vit%C3%B3ria',
          image:'../../../assets/Imagens/coleta_2.jpeg',
          descricao: `
          <strong>- Segunda:</strong> Distrito Industrial 1 e 2, Aeroporto, Max Neumann 1 e 2, Jardim América 1 e 2, Abolição, Santa Mônica, Leblon, São Geraldo, Novo São Geraldo, João Ribeiro e São Francisco. <br />
          <strong>- Terça:</strong> Alvorada, São Domingos e Serra Morena. <br />
          <strong>- Quarta:</strong> Boa Vista 1 e 2, Camuá, Fenícia, Rancho das Orquídeas, Vila Universitária, Quintas do Lago, Riviera do Lago, Santa Luzia, São Cristóvão e Barreirinho.`
        },
        {
          title:'CRONOGRAMA SETOR NORTE',
          link:'https://www.araxa.mg.gov.br/noticia/5719/novo-cronograma-da-coleta-de-materiais-reciclaveis-contempla-todas-as-regioes-de-araxa#:~:text=%2D%20SETOR%20NORTE%3A%20Morada%20do%20Sol,Teixeira%20e%20Cincinato%20de%20%C3%81vila.&text=%2D%20SETOR%20LESTE%3A%20Recanto%20do%20Bosque,e%202%20e%20Residencial%20Vit%C3%B3ria',
          image:'../../../assets/Imagens/coleta_4.jpeg',
          descricao: `
          <strong>- Segunda:</strong> Ana Pinto de Almeida, Salomão Drummond, Francisco Duarte, Tiradentes e Bom Jesus. <br />
          <strong>- Terça:</strong> Morada do Sol, Vale dos Araxás, Santa Rita, Orozino Teixeira, Ana Antônia, João Bosco Teixeira e Cincinato de Ávila. <br />
          <strong>- Quarta:</strong>Urciano Lemos e Domingos Zema.`
        },
        {
          title:'IPDSA',
          link:'http://ipdsa.org.br/contato',
          image:'../../../assets/Imagens/IPDSA.png',
          descricao: `
          <strong>- Contato:</strong> Entre em contato com nossa equipe através dos seguintes meios de comunicação: <br />
          <strong>Telefones:</strong> 38.183.190 - (34) 3661-3675 / 3612-2498 / 3612-9276<br />
          <strong>E-mail:</strong> ipdsa@ipdsa.org.br`
        },
      ]
    }, 1000);
  }


}
