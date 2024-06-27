import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    this.pages = this.getPages(this.currentPage, this.totalPages);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['currentPage'] && changes['currentPage'].currentValue) ||
      (changes['totalPages'] && changes['totalPages'].currentValue)
    ) {
      this.pages = this.getPages(this.currentPage, this.totalPages);
    }
  }
  public onChangePage(page: number): void {
    this.changePage.emit(page);
  }

  public onNext(): void {
    this.onChangePage(this.currentPage + 1);
  }

  public onPrevious(): void {
    this.onChangePage(this.currentPage - 1);
  }

  public onFirst(): void {
    this.onChangePage(1);
  }

  public onLast(): void {
    this.onChangePage(this.totalPages);
  }

  private getPages(current: number, total: number): number[] {
    if (total <= 3) {
      return [...Array(total).keys()].map((x) => ++x);
    }

    if (current >= 3) {
      if (current >= total - 2) {
        return [total - 2, total - 1, total];
      } else {
        return [current - 1, current, current + 1];
      }
    }

    return [1, 2, 3];
  }

  public pages: number[] = [];

  @Input() totalPages!: number;
  @Input() currentPage!: number;

  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() previous: EventEmitter<number> = new EventEmitter<number>();
}
