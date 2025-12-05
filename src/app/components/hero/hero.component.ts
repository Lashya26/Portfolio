import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('typed') typedEl!: ElementRef<HTMLSpanElement>;

  ngAfterViewInit(): void {
    const el = this.typedEl.nativeElement;
    const words = ['| Angular', '| Dashboards', '| ML experiments', '| GenAI'];
    let i = 0, j = 0, forward = true;

    const tick = () => {
      const w = words[i];
      if (forward) {
        j++;
        el.textContent = w.substring(0, j);
        if (j === w.length) {
          forward = false;
          setTimeout(tick, 900);
          return;
        }
      } else {
        j--;
        el.textContent = w.substring(0, j);
        if (j === 0) {
          forward = true;
          i = (i + 1) % words.length;
        }
      }
      setTimeout(tick, 80);
    };

    tick();
  }
}
