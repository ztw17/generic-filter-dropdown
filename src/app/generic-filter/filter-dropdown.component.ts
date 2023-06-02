import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import * as _ from 'lodash';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
})

export class FilterDropdownComponent implements OnInit, OnChanges, OnDestroy {
  @Output() dropdownSelectionChange: EventEmitter<KeyValue<string, string>[]> = new EventEmitter<KeyValue<string, string>[]>();
  
  @Input() label = '';
  @Input() dataset: KeyValue<string, string>[] = [];
  @Input() searchOnly = false;
  @Input() icon = '';
  @Input() limit: number = Number.MAX_VALUE;
  @Input() showBadge = false;
  @Input() datasetChanged$: Subject<KeyValue<string, string>[]> = new Subject<KeyValue<string, string>[]>();

	public searchableData: KeyValue<string, string>[] = [];
	public filterValue = '';
	public selectAll = false;
	public selectedOptions: KeyValue<string, string>[] = [];
	public displayedOptions: KeyValue<string, string>[] = [];
  public limitTooltip = '';
  public NUM_MAX_VALUE = Number.MAX_VALUE;

	private unsubscribe$: Subject<void> = new Subject<void>();

	constructor() { }
    
	ngOnInit(): void {
		this.searchableData = this.dataset;

    this.datasetChanged$?.pipe(
      takeUntil(this.unsubscribe$),
      tap((updatedDataset) => {
        this.searchableData = [...updatedDataset];
        this.dataset = [...updatedDataset];
        this.selectedOptions = [];
        this.selectAll = false;
        this.dropdownSelectionChange.emit([]);
      })
    ).subscribe();
	}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['limit']) {
      this.selectedOptions = [];

      if (this.limit !== 1) {
        this.limitTooltip = `You can select up to ${this.limit} options`;
      } else {
        this.limitTooltip = `You can select up to ${this.limit} option`;
      }
    }
  }

	ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	public applySearch(event: KeyboardEvent): void {
		const target = event.target as HTMLInputElement;
    this.filterValue = _.toLower(_.trimStart(target?.value));
    this.searchableData = _.filter([...this.dataset], data => _.includes(_.toLower(data.value), this.filterValue));
  }

  public clearSearch(input: string): void {
    this.filterValue = _.toLower(_.trimStart(input));
    this.searchableData = _.filter([...this.dataset], data => _.includes(_.toLower(data.value), this.filterValue));
  }

	public selectAllToggle(event: MatSlideToggleChange): void {
    this.selectAll = event.checked;
    if (this.selectAll) {
      this.selectedOptions = [...this.dataset];
      this.displayedOptions = [...this.dataset];
    } else {
      this.selectedOptions = [];
      this.displayedOptions = [];
    }
    this.dropdownSelectionChange.emit(this.selectedOptions);
  }

	public selectionChange(values: KeyValue<string, string>[]): void {
    if (this.filterValue.length !== 0) {
      const checkedItems: KeyValue<string, string>[] = [];

      _.each(this.dataset, data => {
        const isCurrentlyDisplayed = !!_.find(this.searchableData, sd => this.isKeyValueEqual(sd, data));
        if (isCurrentlyDisplayed) {

          const isCurrentlyDisplayedAndChecked = !!_.find(values, v => this.isKeyValueEqual(v, data));
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
    this.dropdownSelectionChange.emit(this.selectedOptions);

    this.selectAll = this.dataset.length === this.selectedOptions.length;
  }

  public isSelected(option: KeyValue<string, string>): boolean {
    return _.includes(_.map(this.selectedOptions, so => so.key), option.key);
  }

  public selectMenuItem(item: KeyValue<string, string>, event: any): void {
    event.stopPropagation();

    if (this.isSelected(item)) {
      const index = _.indexOf(_.map(this.selectedOptions, so => so.key), item.key);
      _.pullAt(this.selectedOptions, index);
    } else {
      this.selectedOptions.push(item);
    }
    this.dropdownSelectionChange.emit(this.selectedOptions);

    this.selectAll = this.dataset.length === this.selectedOptions.length;
  }

  public menuOpened(): void {
    if (this.limit && this.limit !== this.NUM_MAX_VALUE) {
      this.dataset = this.dataset;
      this.searchableData = this.dataset;
    }
  }

	public compareObjects(o1: KeyValue<string, string>, o2?: KeyValue<string, string>): boolean {
    return o1.key === o2?.key && o1.value === o2?.value;
  }

	private isKeyValueEqual(k1: KeyValue<string, string>, k2: KeyValue<string, string>): boolean {
    return k1.key === k2.key;
  }
}