import { Component, ViewContainerRef } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  template: `
  <!-- Elemento de carga -->
  <div data-cy="cy-table-loading" class="loading position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-dark">
    <div class="spinner-border text-white" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  `,
  styles: [
    `
      .loading {
        height: 100%;
        width: 100%;
        z-index: 1000;
        opacity: 0.8;
      }
    `,
  ],
})
export class LoadingComponent {
  private componentId!: string;

  constructor(
    private loadingService: LoadingService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    // No es necesario asignar this.vcr = this.viewContainerRef;
  }

  loadComponent() {
    const { ref, id } = this.loadingService.create(
      this.viewContainerRef,
      LoadingComponent
    );
    this.componentId = id;
  }

  destroyComponent() {
    this.loadingService.close(this.componentId);
  }
}
