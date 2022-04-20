import { NgModule } from "@angular/core";
import { TemplateRegistry } from "@backbase/foundation-ang/core";
import { AccountsTransactionsJourneyModule } from "@backbase/accounts-transactions-journey-ang";

@NgModule({
    imports: [
        AccountsTransactionsJourneyModule.forRoot()
    ],
    providers: [
        TemplateRegistry
    ]
})
export class AccountTransactionBundleModule {}