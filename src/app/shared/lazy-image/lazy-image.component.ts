import { Component, Input } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent {
  @Input()
  public url!: string;

  @Input()
  public title!: string;

  public hasLoaded = false;

  onLoad() {
    this.hasLoaded = true;
  }
}
