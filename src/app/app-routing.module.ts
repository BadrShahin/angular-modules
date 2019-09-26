import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

// routes 
const routes: Routes = [
    {path: 'dragdrop', component: DragDropComponent},
    {path: '', component: AppComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }