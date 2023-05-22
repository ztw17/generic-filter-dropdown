import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generic-filter-dropdown';

  public foodsDataset: KeyValue<string, string>[] = [
		{key: 'apple', value: 'Apple'},
		{key: 'banana', value: 'Banana'},
		{key: 'pretzels', value: 'Pretzels'},
		{key: 'almonds', value: 'Almonds'},
		{key: 'iceCrea,', value: 'Ice Cream'}
	];
}
