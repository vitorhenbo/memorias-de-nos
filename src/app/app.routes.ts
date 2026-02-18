import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./indice.component').then(m => m.IndiceComponent),
	},
	{
		path: 'capitulo-1',
		loadComponent: () => import('./capitulo1.component').then(m => m.Capitulo1Component),
	},
	{
		path: 'capitulo-2',
		loadComponent: () => import('./capitulo2.component').then(m => m.Capitulo2Component),
	},
	// catch-all: redirect to index
	{
		path: '**',
		redirectTo: '',
	},
];
