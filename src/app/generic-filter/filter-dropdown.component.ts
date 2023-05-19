import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
})

export class FilterDropdownComponent implements OnInit, OnDestroy {
	public testData: KeyValue<string, string>[] = [
		{key: 'test0', value: 'Test0'},
		{key: 'test1', value: 'Test1'},
		{key: 'test2', value: 'Test2'},
		{key: 'test3', value: 'Test3'},
		{key: 'test4', value: 'Test4'}
	];
	public label: string = 'Option';
	public searchableData: KeyValue<string, string>[] = [];
	public filterValue: string = '';
	public selectAll: boolean = false;
	public selectedOptions: KeyValue<string, string>[] = [];
	public displayedOptions: KeyValue<string, string>[] = [];

	private unsubscribe$: Subject<void> = new Subject<void>();

	constructor() { }
    
	ngOnInit() {
		this.searchableData = this.testData;
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	public applySearch(event: KeyboardEvent) {
		const target = event.target as HTMLInputElement;
    this.filterValue = _.toLower(_.trimStart(target?.value));
    this.searchableData = _.filter([...this.testData], data => _.includes(_.toLower(data.value), this.filterValue));
  }

	public selectAllToggle(event: MatSlideToggleChange) {
    this.selectAll = event.checked;
		console.log(this.selectAll)
    if (this.selectAll) {
      this.selectedOptions = [...this.testData];
      this.displayedOptions = [...this.testData];
    } else {
      this.selectedOptions = [];
      this.displayedOptions = [];
    }
  }

	public selectionChange(values: KeyValue<string, string>[]) {
    if (this.filterValue.length !== 0) {
      const checkedItems: KeyValue<string, string>[] = [];

      _.each(this.testData, data => {

        const isCurrentlyDisplayed: boolean = !!_.find(this.searchableData, sd => this.isKeyValueEqual(sd, data));
        if (isCurrentlyDisplayed) {

          const isCurrentlyDisplayedAndChecked: boolean = !!_.find(values, v => this.isKeyValueEqual(v, data));
          if (!isCurrentlyDisplayedAndChecked) {
            return;
          }

          checkedItems.push(data);
        }
      });

      this.selectedOptions = checkedItems;
      this.displayedOptions = checkedItems;
    } else {
      this.selectedOptions = values;
      this.displayedOptions = values;
    }

    this.selectAll = this.testData.length === this.selectedOptions.length;
  }

	public compareObjects(o1: KeyValue<string, string>, o2?: KeyValue<string, string>): boolean {
    return o1.key === o2?.key && o1.value === o2?.value;
  }

	private isKeyValueEqual(k1: KeyValue<string, string>, k2: KeyValue<string, string>): boolean {
    return k1.key === k2.key;
  }
}