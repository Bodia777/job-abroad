import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PrivacyPolicyComponent} from "./pages/home/components/privacy-policy/privacy-policy.component";
import {VacancyComponent} from "./pages/vacancy/vacancy.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'policy', component: PrivacyPolicyComponent },
    { path: 'vacancy/:id', component: VacancyComponent },
    { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
