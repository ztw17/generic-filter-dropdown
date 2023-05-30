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
	public selectedDatasetOne: KeyValue<string, string>[] = [];
	public selectedDatasetTwo: KeyValue<string, string>[] = [];
	public selectedDatasetOneLabel: string = '';
	public selectedDatasetTwoLabel: string = '';
	public datasetOneChanged$: Subject<KeyValue<string, string>[]> = new Subject<KeyValue<string, string>[]>();
	public datasetTwoChanged$: Subject<KeyValue<string, string>[]> = new Subject<KeyValue<string, string>[]>();
	public datasetOneIcon: string = '';
	public datasetTwoIcon: string = '';
	public dropdownHidden: boolean = false;

	public updateSelectedItems(options: KeyValue<string, string>[], dropdownNumber: number): void {
		switch (dropdownNumber) {
			case 0:
				this.firstOptions = options;
				break;
			case 1:
				this.secondOptions = options;
				break;
			case 2:
				this.thirdOptions = options;
				break;
			case 3:
				this.fourthOptions = options;
				break;
			default:
				break;
		}
	}

	public selectDatasetOne(value: string): void {
		switch (value) {
			case 'Foods':
				this.selectedDatasetOne = this.foodsDataset;
				this.datasetOneChanged$.next(this.foodsDataset);
				this.selectedDatasetOneLabel = 'food';
				this.datasetOneIcon = 'fastfood';
				break;
			case 'Composers':
				this.selectedDatasetOne = this.composersDataset;
				this.datasetOneChanged$.next(this.composersDataset);
				this.selectedDatasetOneLabel = 'composer';
				this.datasetOneIcon = 'person';
				break;
			case 'Cities': 
				this.selectedDatasetOne = this.citiesDataset;
				this.datasetOneChanged$.next(this.citiesDataset);
				this.selectedDatasetOneLabel = 'city';
				this.datasetOneIcon = 'location_city';
				break;
			case 'Music Genres':
				this.selectedDatasetOne = this.musicGenresDataset;
				this.datasetOneChanged$.next(this.musicGenresDataset);
				this.selectedDatasetOneLabel = 'music genre';
				this.datasetOneIcon = 'library_music';
				break;
			default:
				this.selectedDatasetOne = [];
				break;
		}
	}

	public selectDatasetTwo(value: string): void {
		switch (value) {
			case 'Foods':
				this.selectedDatasetTwo = this.foodsDataset;
				this.datasetTwoChanged$.next(this.foodsDataset);
				this.selectedDatasetTwoLabel = 'food';
				this.datasetTwoIcon = 'fastfood';
				break;
			case 'Composers':
				this.selectedDatasetTwo = this.composersDataset;
				this.datasetTwoChanged$.next(this.composersDataset);
				this.selectedDatasetTwoLabel = 'composer';
				this.datasetTwoIcon = 'person';
				break;
			case 'Cities': 
				this.selectedDatasetTwo = this.citiesDataset;
				this.datasetTwoChanged$.next(this.citiesDataset);
				this.selectedDatasetTwoLabel = 'city';
				this.datasetTwoIcon = 'location_city';
				break;
			case 'Music Genres':
				this.selectedDatasetTwo = this.musicGenresDataset;
				this.datasetTwoChanged$.next(this.musicGenresDataset);
				this.selectedDatasetTwoLabel = 'music genre';
				this.datasetTwoIcon = 'library_music';
				break;
			default:
				this.selectedDatasetTwo = [];
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
