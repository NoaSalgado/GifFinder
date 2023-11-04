import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent {
  @ViewChild('link') copyLink!: ElementRef;

  @Input()
  public url!: string;

  @Input()
  public title!: string;

  @Input()
  public gifLink!: string;

  public hasLoaded = false;

  onLoad() {
    this.hasLoaded = true;
  }

  public copyToClipboard() {
    navigator.clipboard.writeText(this.gifLink);
    this.copyLink.nativeElement.style.backgroundColor = '#598EF3';
    this.copyLink.nativeElement.textContent = 'Link copied!';

    setTimeout(() => {
      this.copyLink.nativeElement.style.backgroundColor = '#1e293b';
      this.copyLink.nativeElement.innerHTML = `<span class="material-symbols-outlined"> link </span> Copy GIF Link`;
    }, 2000);
  }
}
