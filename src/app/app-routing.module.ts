import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
        import('./welcome/welcome.module').then((m) => m.WelcomeModule),
    },
    {
        path: 'menu',
        loadChildren: () =>
        import('./main-menu/main-menu.module').then((m) => m.MainMenuModule),
    },
    {
        path: 'body-info',
        loadChildren: () =>
        import('./body-info/body-info.module').then((m) => m.BodyInfoModule),
    },
    {
        path: 'settings',
        loadChildren: () =>
        import('./settings/settings.module').then((m) => m.SettingsModule),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
