import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="index">
      <h1>Índice</h1>
      <ul>
        <li><a class="link" [routerLink]="['/capitulo-1']">Capítulo 1 - Sobre ela</a></li>
        <li><a class="link" [routerLink]="['/capitulo-2']">Capítulo 2 - Início de tudo</a></li>
      </ul>
    </section>
  `,
  styles: [
    `
      :host { display: block; padding: 2rem; }
      .index { max-width: 760px; margin: 0 auto; font-family: Menlo, Monaco, "Courier New", ui-monospace, SFMono-Regular, "Roboto Mono", monospace; }
      .index h1 { font-size: 2rem; margin-bottom: 1rem; }
      .index ul { padding-left: 1rem; }
      .index li { margin: 0.5rem 0; }
      .link { text-decoration: none; color: #0f172a; background: color-mix(in srgb, #0f172a 6%, transparent); padding: 0.5rem 0.75rem; border-radius: 999px; }
    `,
  ],
})
export class IndiceComponent {}
