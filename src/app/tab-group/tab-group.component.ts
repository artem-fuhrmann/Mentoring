import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, QueryList, Renderer2, ViewChild } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterContentInit, AfterViewInit{
  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>;

  activeTab!: TabComponent;

  constructor() {}

  ngAfterViewInit(): void {
  }


  ngAfterContentInit(): void {
    this.activeTab = this.tabs.first;
    console.log(this.activeTab)
  }

  onTabButtonClick(tab: TabComponent) {
   this.activeTab = tab;
  }
}
