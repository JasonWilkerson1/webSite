import { Routes } from '@angular/router';
import { JasonWilkersonComponent } from './jason-wilkerson/jason-wilkerson.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/jason-wilkerson', pathMatch: 'full' },
    { path: 'jason-wilkerson', component: JasonWilkersonComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'skills', component: SkillsComponent },
    // ...other routes
];