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
  public fruitsDataset: KeyValue<string, string>[] = [
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
	public nationalParksDataset: KeyValue<string, string>[] = [
		{key: 'blackCanyon', value: 'Black Canyon'},
		{key: 'glacier', value: 'Glacier'},
		{key: 'grandCanyon', value: 'Grand Canyon'},
		{key: 'grandTeton', value: 'Grand Teton'},
		{key: 'olympic', value: 'Olympic'},
		{key: 'redWood', value: 'Red Wood'},
		{key: 'rockyMountain', value: 'Rocky Mountain'},
		{key: 'sequoia', value: 'Sequoia'}
	];
	public datasetOptions: string[] = ['Cities', 'Composers', 'Fruits', 'Music Genres', 'National Parks'];
	public limitOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
	public selectedDatasetOne: KeyValue<string, string>[] = [];
	public selectedDatasetTwo: KeyValue<string, string>[] = [];
	public selectedDatasetOneLabel = '';
	public selectedDatasetTwoLabel = '';
	public datasetOneChanged$: Subject<KeyValue<string, string>[]> = new Subject<KeyValue<string, string>[]>();
	public datasetTwoChanged$: Subject<KeyValue<string, string>[]> = new Subject<KeyValue<string, string>[]>();
	public datasetOneIcon = '';
	public datasetTwoIcon = '';
	public selectedLimit = 0;
	public dropdownHidden = false;

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

	public selectDataset(value: string, dropdownNumber: number): void {
		if (dropdownNumber === 0) {
			switch (value) {
				case 'Cities': 
					this.selectedDatasetOne = this.citiesDataset;
					this.datasetOneChanged$.next(this.citiesDataset);
					this.selectedDatasetOneLabel = 'city';
					this.datasetOneIcon = 'location_city';
					break;
				case 'Composers':
					this.selectedDatasetOne = this.composersDataset;
					this.datasetOneChanged$.next(this.composersDataset);
					this.selectedDatasetOneLabel = 'composer';
					this.datasetOneIcon = 'person';
					break;
				case 'Fruits':
					this.selectedDatasetOne = this.fruitsDataset;
					this.datasetOneChanged$.next(this.fruitsDataset);
					this.selectedDatasetOneLabel = 'fruit';
					this.datasetOneIcon = 'fastfood';
					break;
				case 'Music Genres':
					this.selectedDatasetOne = this.musicGenresDataset;
					this.datasetOneChanged$.next(this.musicGenresDataset);
					this.selectedDatasetOneLabel = 'music genre';
					this.datasetOneIcon = 'library_music';
					break;
				case 'National Parks':
					this.selectedDatasetOne = this.nationalParksDataset;
					this.datasetOneChanged$.next(this.nationalParksDataset);
					this.selectedDatasetOneLabel = 'national park';
					this.datasetOneIcon = 'landscape';
					break;
				default:
					this.selectedDatasetOne = [];
					break;
			}
		} else if (dropdownNumber === 1) {
			switch (value) {
				case 'Cities': 
					this.selectedDatasetTwo = this.citiesDataset;
					this.datasetTwoChanged$.next(this.citiesDataset);
					this.selectedDatasetTwoLabel = 'city';
					this.datasetTwoIcon = 'location_city';
					break;
				case 'Composers':
					this.selectedDatasetTwo = this.composersDataset;
					this.datasetTwoChanged$.next(this.composersDataset);
					this.selectedDatasetTwoLabel = 'composer';
					this.datasetTwoIcon = 'person';
					break;
				case 'Fruits':
					this.selectedDatasetTwo = this.fruitsDataset;
					this.datasetTwoChanged$.next(this.fruitsDataset);
					this.selectedDatasetTwoLabel = 'fruit';
					this.datasetTwoIcon = 'fastfood';
					break;
				case 'Music Genres':
					this.selectedDatasetTwo = this.musicGenresDataset;
					this.datasetTwoChanged$.next(this.musicGenresDataset);
					this.selectedDatasetTwoLabel = 'music genre';
					this.datasetTwoIcon = 'library_music';
					break;
				case 'National Parks':
					this.selectedDatasetTwo = this.nationalParksDataset;
					this.datasetTwoChanged$.next(this.nationalParksDataset);
					this.selectedDatasetTwoLabel = 'national park';
					this.datasetTwoIcon = 'landscape';
					break;
				default:
					this.selectedDatasetTwo = [];
					break;
			}
		}
	}

	public selectLimit(limit: number): void {
		this.selectedLimit = limit;
		this.fourthOptions = [];
	}
}
