import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() label!:string;

  @ContentChild('contentTemplate')
  contentTemplate!: TemplateRef<unknown>;

  @ContentChild('labelTemplate')
  labelTemplate!: TemplateRef<unknown>;

  @ViewChild('tabTemplate') 
  tabTemlate!: TemplateRef<unknown>;


}
