import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filter-dropdown';
	public firstOptions: KeyValue<string, string>[] = [];
	public secondOptions: KeyValue<string, string>[] = [];
	public thirdOptions: KeyValue<string, string>[] = [];
	public fourthOptions: KeyValue<string, string>[] = [];
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

	public updateSelectedItemsOne(options: KeyValue<string, string>[]) {
		this.firstOptions = options;
	}

	public updateSelectedItemsTwo(options: KeyValue<string, string>[]) {
		this.secondOptions = options;
	}

	public updateSelectedItemsThree(options: KeyValue<string, string>[]) {
		this.thirdOptions = options;
	}

	public updateSelectedItemsFour(options: KeyValue<string, string>[]) {
		this.fourthOptions = options;
	}
}
