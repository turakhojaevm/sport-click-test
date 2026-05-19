import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
