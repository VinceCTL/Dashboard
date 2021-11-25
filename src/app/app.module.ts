import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ViewsModule} from './Views/Views.Module';
import {ButtonModule} from 'primeng/button';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './Views/home/home.component';
import {TabViewModule} from 'primeng/tabview';
import {ContextMenuModule} from 'primeng/contextmenu';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        ButtonModule,
        AppRoutingModule,
        TabViewModule,
        ViewsModule,
        ContextMenuModule,
        OverlayPanelModule,
        FormsModule,
        // FontAwesomeModule,
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
