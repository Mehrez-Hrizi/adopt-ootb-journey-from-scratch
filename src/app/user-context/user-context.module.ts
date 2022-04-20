import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserContextRoutingModule} from './user-context-routing.module';
import {SelectContextComponent} from './select-context/select-context.component';
import {SelectContextWidgetModule} from '@backbase/select-context-widget-ang';
import {WebSdkModule} from '@backbase/foundation-ang/web-sdk';
import {TemplateRegistry} from '@backbase/foundation-ang/core';

@NgModule({
    declarations: [SelectContextComponent],
    imports: [
        CommonModule,
        SelectContextWidgetModule,
        UserContextRoutingModule,
        WebSdkModule.forRoot(),
    ],
    providers: [
        TemplateRegistry,
    ],
})
export class UserContextModule {
}
