import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Components
import { PointCalculatorComponent } from './point-calculator/point-calculator.component';
import { BonusOffersComponent } from './bonus-offers/bonus-offers.component';

const routes: Routes = [
    {path: 'point-calculator', component: PointCalculatorComponent},
    {path: 'bonus-offers', component: BonusOffersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PointCalculatorComponent, BonusOffersComponent]; // add new components here to use router