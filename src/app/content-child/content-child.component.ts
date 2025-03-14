import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child',
  imports: [],
  standalone: true,
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css',
})
export class ContentChildComponent {
  @ContentChild('valueFromParent') valueFromParent: ElementRef | undefined;

  ngAfterContentInit() {
    // Trythis
    console.log(this.valueFromParent?.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log(this.valueFromParent?.nativeElement.textContent);
  }
}
