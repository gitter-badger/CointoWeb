import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboardContainer/dashboardContainer.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [DashboardContainerComponent],
    imports: [CommonModule, SharedModule],
    exports: [DashboardContainerComponent],
    providers: [],
})
export class DashboardModule { }
