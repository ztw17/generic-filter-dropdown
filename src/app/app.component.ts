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
		{key: 'iceCream,', value: 'Ice Cream'}
	];
  public composersDataset: KeyValue<string, string>[] = [
		{key: 'mahler', value: 'Mahler'},
		{key: 'strauss', value: 'Strauss'},
		{key: 'wagner', value: 'Wagner'},
		{key: 'berlioz', value: 'Berlioz'},
		{key: 'bruckner', value: 'Bruckner'}
	];
  public citiesDataset: KeyValue<string, string>[] = [
		{key: 'denver', value: 'Denver'},
		{key: 'chicago', value: 'Chicago'},
		{key: 'bloomington', value: 'Bloomington'},
		{key: 'saintLouis', value: 'Saint Louis'},
		{key: 'sanFrancisco', value: 'San Francisco'}
	];
}
