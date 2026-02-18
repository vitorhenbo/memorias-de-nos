import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chapter">
      <h1>Capítulo 2 - Início de tudo</h1>
      <div class="chapter-content">
        <p>O primeiro contato que nós tivemos foi pela rede social. Ela respondeu algo meu. Eu lembro que era algo da faculdade, perguntando sobre as aulas ou qualquer coisa do tipo. Foi simples. Mas foi o pontapé inicial.</p>

        <p>Na verdade, foi o pontapé inicial de algo que cresceu tanto, mas tanto, que hoje eu acho até impossível encontrar aquela primeira mensagem dentro da nossa conversa. Tudo cresceu muito, muito, muito. Deve estar perdido lá no meio de milhares de mensagens. E seria praticamente impossível localizar aquele começo. Isso talvez seja algo bom, talvez seja algo ruim. Mas mostra como, a partir de um simples gesto que ela teve, tudo ficou tão grande e tão incrível quanto se tornou.</p>

        <p>Depois de um tempo, ela chegou a me confidenciar que tinha segundas intenções quando respondeu aquela mensagem da faculdade. E, na real, ainda bem que tinha.</p>

        <p>De lá pra cá, nós fomos conversando. Tiveram momentos em que o interesse dela parecia estar mais alto e outros em que parecia ter diminuído bastante. Eu, por outro lado, fiquei bem interessado desde o começo. E isso fez com que, nas vezes — e foram algumas — em que ela respondia de forma monossilábica ou não devolvia o mesmo investimento, eu continuasse tentando manter a conversa.</p>

        <p>Eu perguntava bastante, puxava assunto, interagia. Porque eu tinha gostado dela de verdade. Mas ela parecia estar meio… sei lá. Ao mesmo tempo interessada e ao mesmo tempo distante. Era difícil de entender. No futuro, algo que eu já imaginava se confirmou: ela estava conhecendo outros carinhas e tudo mais. E estava tudo bem. Inclusive, isso virou assunto entre a gente depois, algo que nós dois rimos junto. No fim das contas, não deu certo com as pessoas que ela estava conhecendo na época. E surgiu a oportunidade de a gente se ver.</p>

        <p>Marcamos de ir ao shopping da cidade dela. O rolê mais clichê possível para dois jovens no primeiro encontro: cinema. Eu nunca tive muita experiência com date, então talvez por isso o convite tenha sido tão básico assim. Mas era um lugar que ela já frequentava, onde tinha certa segurança. Na minha cabeça, fazia sentido.</p>

        <p>Eu cheguei no horário combinado — talvez até um pouco antes — e fiquei esperando por um tempo que pareceu gigantesco. Eu cheguei a pensar que, no meu primeiro encontro, eu tomaria um bolo. Mas não aconteceu.</p>

        <p>Depois de muitos minutos — que na minha cabeça pareceram horas — eu vi ela vindo lá de longe, na entrada do Paço Municipal de São Bernardo, caminhando na minha direção. Ela estava super bonita. E ali estava, de verdade, a pessoa que eu só tinha visto por foto e conversado durante semanas.</p>

        <p>Ela era muito reservada. Eu tive dificuldade de extrair algumas informações. Ela parecia um pouco nervosa de estar ali. Talvez também fosse uma experiência nova pra ela, como era pra mim. No começo, a troca não foi tão natural. Mas isso passou.</p>

        <p>Depois nós conversamos bastante. O clima ficou leve. Foi um momento muito agradável. Eu lembro exatamente o dia: 26 de setembro de 2021. A gente assistiu Shang-Chi no cinema.</p>

        <p>Eu consegui beijar ela de forma rápida na sala. E depois, de novo, quando estávamos nos despedindo. Ela continuava reservada, e eu respeitei o espaço dela. Mas isso não me fez ficar menos interessado. Muito pelo contrário.</p>

        <p>Depois que o filme acabou, ela voltou pra casa dela de trólebus e eu fui pra minha. Assim que ela embarcou, poucos segundos depois, chegou uma mensagem:</p>

        <p>“Adorei ter te conhecido.”</p>

        <p>Talvez tenha sido a primeira vez que eu li algo assim na minha vida.</p>

        <p>E eu acho que ali foi colocado o primeiro tijolo da coisa mais incrível que nós construímos durante os últimos anos.</p>

        <div class="chapter-image">
          <img src="/capitulo-2.png" alt="Imagem capítulo 2" />
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host { display: block; padding: 2rem; }
      .chapter { max-width: 900px; margin: 2rem auto; background: #ffffff; padding: 2.25rem 2rem; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); font-family: Menlo, Monaco, "Courier New", ui-monospace, SFMono-Regular, "Roboto Mono", monospace; color: #111827; }
      .chapter h1 { font-size: 2rem; margin: 0 0 1rem 0; font-weight: 700; text-align: left; }
      .chapter-content p { margin: 0 0 1rem 0; line-height: 1.6; font-size: 1rem; }

      .chapter-image { display: flex; justify-content: center; margin-top: 1.5rem; }
      .chapter-image img { width: 100%; max-width: 900px; height: auto; border-radius: 8px; box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
      @media (max-width: 640px) { .chapter { padding: 1rem; margin: 1rem; } .chapter h1 { font-size: 1.5rem; } }
    `,
  ],
})
export class Capitulo2Component {}
