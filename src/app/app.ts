import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Memórias de nós');

  private chapters = ['capitulo-1', 'capitulo-2'];

  constructor(private router: Router) {}

  getCurrentPath(): string {
    const url = this.router.url.split('?')[0] || '';
    return url.startsWith('/') ? url.slice(1) : url;
  }

  previousChapter(): string | null {
    const path = this.getCurrentPath();
    const idx = this.chapters.indexOf(path);
    if (idx > 0) return this.chapters[idx - 1];
    if (path === '' || idx === -1) return null;
    return null;
  }

  nextChapter(): string | null {
    const path = this.getCurrentPath();
    const idx = this.chapters.indexOf(path);
    // do not show "next" on the home (empty path)
    if (idx === -1) return null;
    if (idx < this.chapters.length - 1) return this.chapters[idx + 1];
    return null;
  }
}
