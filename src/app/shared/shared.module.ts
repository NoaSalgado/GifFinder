import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from './lazy-image/lazy-image.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [LazyImageComponent, SidenavComponent],
  imports: [CommonModule],
  exports: [LazyImageComponent, SidenavComponent],
})
export class SharedModule {}
