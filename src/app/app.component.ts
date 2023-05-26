import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

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
		{key: 'blueberry', value: 'Blueberry'},
		{key: 'kiwi,', value: 'Kiwi'},
		{key: 'orange', value: 'Orange'},
		{key: 'raspberry,', value: 'Raspberry'},
		{key: 'starFruit,', value: 'Star Fruit'},
		{key: 'strawberry,', value: 'Strawberry'}
	];
  public composersDataset: KeyValue<string, string>[] = [
		{key: 'bach', value: 'Bach'},
		{key: 'mozart', value: 'Mozart'},
		{key: 'beethoven', value: 'Beethoven'},
		{key: 'berlioz', value: 'Berlioz'},
		{key: 'wagner', value: 'Wagner'},
		{key: 'bruckner', value: 'Bruckner'},
		{key: 'mahler', value: 'Mahler'},
		{key: 'strauss', value: 'Strauss'}
	];
  public citiesDataset: KeyValue<string, string>[] = [
		{key: 'bloomington', value: 'Bloomington'},
		{key: 'chicago', value: 'Chicago'},
		{key: 'denver', value: 'Denver'},
		{key: 'losAngeles', value: 'Los Angeles'},
		{key: 'saintLouis', value: 'Saint Louis'},
		{key: 'sanFrancisco', value: 'San Francisco'},
		{key: 'seattle', value: 'Seattle'},
		{key: 'washingtonDc', value: 'Washington, D.C.'}
	];
	public musicGenresDataset: KeyValue<string, string>[] = [
		{key: 'alternative', value: 'Alternative'},
		{key: 'classical', value: 'Classical'},
		{key: 'chillWave', value: 'Chill Wave'},
		{key: 'folk', value: 'Folk'},
		{key: 'hipHop', value: 'Hip Hop'},
		{key: 'house', value: 'House'},
		{key: 'rock', value: 'Rock'},
		{key: 'rb', value: 'R&B'}
	];
	public datasetOptions: string[] = ['Foods', 'Composers', 'Cities', 'Music Genres'];
	public selectedDataset: KeyValue<string, string>[] = [];
	public selectedDatasetLabel: string = '';
	public datasetChanged$: Subject<KeyValue<string, string>[]> = new Subject<KeyValue<string, string>[]>();
	public datasetIcon: string = '';

	public updateSelectedItemsOne(options: KeyValue<string, string>[]): void {
		this.firstOptions = options;
	}

	public updateSelectedItemsTwo(options: KeyValue<string, string>[]): void {
		this.secondOptions = options;
	}

	public updateSelectedItemsThree(options: KeyValue<string, string>[]): void {
		this.thirdOptions = options;
	}

	public updateSelectedItemsFour(options: KeyValue<string, string>[]): void {
		this.fourthOptions = options;
	}

	public selectDataset(value: string): void {
		switch (value) {
			case 'Foods':
				this.selectedDataset = this.foodsDataset;
				this.datasetChanged$.next(this.foodsDataset);
				this.selectedDatasetLabel = 'food';
				this.datasetIcon = 'fastfood';
				break;
			case 'Composers':
				this.selectedDataset = this.composersDataset;
				this.datasetChanged$.next(this.composersDataset);
				this.selectedDatasetLabel = 'composer';
				this.datasetIcon = 'person';
				break;
			case 'Cities': 
				this.selectedDataset = this.citiesDataset;
				this.datasetChanged$.next(this.citiesDataset);
				this.selectedDatasetLabel = 'city';
				this.datasetIcon = 'location_city';
				break;
			case 'Music Genres':
				this.selectedDataset = this.musicGenresDataset;
				this.datasetChanged$.next(this.musicGenresDataset);
				this.selectedDatasetLabel = 'music genre';
				this.datasetIcon = 'library_music';
				break;
			default:
				this.selectedDataset = [];
				break;
		}
	}

	// public remove(option: KeyValue<string, string>): void {
	// 	const index = this.citiesDataset.indexOf(option);

	// 	if (index >= 0) {
	// 		this.citiesDataset.splice(index, 1)
	// 	}
	// }
}
