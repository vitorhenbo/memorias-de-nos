import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chapter">
      <h1>Capítulo 1 - Sobre ela</h1>

      <div class="chapter-content">
        <p>Hoje é dia 18 de fevereiro de 2026. Faz exatamente um dia que eu terminei o meu namoro e eu resolvi escrever aqui para ter um registro de tudo que eu vivi, para ter o registro dos erros, dos acertos.</p>

        <p>Há quem diga que nós não fizemos a nossa parte — não plantamos uma árvore, não escrevemos um livro e não tivemos um filho. Por enquanto, eu só tenho a possibilidade de escrever um livro. E, na real, eu nem sei se isso vai virar um livro. Eu acho que não. Eu acho que isso é mais baseado em ter um registro e fazer uma ode a um amor que eu vivi do que necessariamente transformar isso num livro, num artigo ou em alguma coisa monetizável ou não. Não é a minha intenção no momento.</p>

        <p>Também porque eu li que escrever, às vezes, ajuda a digerir algumas experiências assim.</p>

        <p>No atual momento, eu me encontro de férias do trabalho, prestes a fazer aniversário, cada vez mais próximo dos 30 e cada vez mais fora da casa dos 20. E acometido por essa terrível experiência que me assolou.</p>

        <p>Eu sempre admirei e achei muito foda aqueles músicos que criavam grandes obras de arte nos seus términos e tudo mais. Mas eu não nasci com esse dom — ou pelo menos não tenho essa capacidade desenvolvida. Então, talvez escrever e, com a ajuda de algumas ferramentas, formatar — visto que eu não sou uma pessoa de humanas, eu sou formado em exatas e escrever não é tanto o meu forte — seja a minha única maneira de deixar um legado disso tudo.</p>

        <p>Aprender com os erros. Lembrar das coisas boas. E é isso.</p>

        <p>Acho que o primeiro passo aqui é falar sobre ela.</p>

        <p>Eu a conheci pela internet, no Instagram. Isso é fruto, basicamente, de uma facilidade que eu tive tanto pela rede social quanto pela faculdade. Eu não precisei muito de aplicativos de relacionamento, embora até tenha instalado e usado uma vez ou outra, mas isso nunca me fez conhecer ninguém — diferentemente do Instagram, por exemplo, e das oportunidades que a faculdade me proporcionou.</p>

        <p>Eu conheci ela pelo Instagram. Ela era alguns anos mais nova do que eu, estava prestes a completar 18, e nós começamos a conversar.</p>

        <p>Ela era uma garota de origem humilde, com algumas irmãs por parte de pai e dois irmãos no relacionamento do pai e da mãe dela, com quem ela dividia a casa. Era uma família nordestina, de origem muito humilde. Mas isso, em momento algum, foi motivo para que ela não fosse uma garota muito à frente do seu tempo.</p>

        <p>Ela sempre foi muito curiosa. Sempre foi muito interessada. Os pais dela, desde cedo, colocavam ela nos cursos possíveis e imagináveis. Ela dizia para mim que nunca teve muita oportunidade de ficar em casa fazendo vários “nadas”. Os pais dela sempre tentaram dar o melhor para ela e para os irmãos.</p>

        <p>E ela se destaca de forma absurda nisso.</p>

        <p>Hoje, ela é uma garota de origem humilde, que veio de escolas que não são as melhores, que não teve o melhor ensino. Mas hoje ela trabalha numa das maiores instituições financeiras da América Latina. Hoje ela faz uma das melhores faculdades do país, quiçá do mundo, e tira de letra praticamente todos os objetivos que estabelece.</p>

        <p>Na verdade, ela encontra dificuldades. Mas eu não consigo mensurar, ao longo desses últimos anos, nenhuma dificuldade que ela tenha encontrado e não tenha transpassado depois disso.</p>

        <p>Ela é uma garota muito bonita. Ruiva. Era magra, mas sempre teve um corpo escultural. Sempre foi muito bonita, cheirosa, cuidada. Extremamente educada. Extremamente contida com absolutamente tudo.</p>

        <p>Aquilo já era suficiente para chamar a minha atenção e fazer com que eu abrisse a porta para essa garota incrível que ela é.</p>

        <p>O que me chamou a atenção desde o começo é que ela parecia estar muito interessada em coisas muito fora da realidade das pessoas que estavam ao redor dela.</p>

        <p>Eu fiz uma escola técnica no ensino médio. Embora o nível de aprendizado dela tenha sido muito maior do que o de muitas escolas públicas do ABC Paulista onde eu vivo, eu já tive uma dificuldade gigantesca para conseguir ingressar numa universidade pública.</p>

        <p>E ela parecia não se amedrontar com isso.</p>

        <p>O início das nossas conversas foi exatamente esse — e isso me impressionava muito. Porque ela não queria saber das dificuldades, não queria saber dos percalços. Parecia que tinha até um pouco de dificuldade para mensurar o quão burocrático, difícil e desafiador tais objetivos seriam.</p>

        <p>E eu acho que essa é a melhor maneira que ela poderia ter sido, na real.</p>

        <p>Porque, exatamente por subestimar o perigo — e por ser uma das pessoas mais fortes que eu já conheci — isso fez com que ela atropelasse as barreiras e conseguisse, efetivamente, entrar na universidade que queria e trilhar o caminho que está trilhando para se tornar uma cientista de dados.</p>

        <p>Pelo menos até agora, esse é o objetivo dela. Talvez mude com o tempo.</p>
        <div class="chapter-image">
          <img src="/capitulo-1.png" alt="Imagem capítulo 1" />
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100%;
        background: #ffffff;
        padding: 2rem;
        box-sizing: border-box;
      }

      .chapter {
        max-width: 900px;
        margin: 2rem auto;
        background: #ffffff;
        padding: 2.25rem 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        font-family: Menlo, Monaco, "Courier New", ui-monospace, SFMono-Regular, "Roboto Mono", monospace;
        color: #111827;
      }

      .chapter h1 {
        font-size: 2rem;
        margin: 0 0 1rem 0;
        font-weight: 700;
        text-align: left;
      }

      .chapter-content p {
        margin: 0 0 1rem 0;
        line-height: 1.6;
        font-size: 1rem;
      }

      .chapter-image {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
      }

      .chapter-image img {
        width: 100%;
        max-width: 900px;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 6px 18px rgba(0,0,0,0.08);
      }

      @media (max-width: 640px) {
        .chapter {
          padding: 1rem;
          margin: 1rem;
        }

        .chapter h1 {
          font-size: 1.5rem;
        }
      }
    `,
  ],
})
export class Capitulo1Component {}
