
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PurchasepartsComponent } from './purchaseparts/purchaseparts.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';


const APP_ROUTES = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'purchaseparts', component: PurchasepartsComponent},
    { path: 'help', component: HelpComponent},
    { path: 'contact', component: ContactComponent}
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);