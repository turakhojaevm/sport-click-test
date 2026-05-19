import { Component } from '@angular/core';
import { Select } from '../select/select';

@Component({
  selector: 'app-sidebar',
  imports: [Select],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {}
