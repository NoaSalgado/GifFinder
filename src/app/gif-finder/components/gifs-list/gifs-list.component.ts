import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.css'],
})
export class GifsListComponent {
  @Input()
  public gifsList: Gif[] = [];
}
