import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MyDateRangePicker } from "./mydaterangepicker.component";
import { FocusDirective } from "./directives/mydaterangepicker.focus.directive";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [MyDateRangePicker, FocusDirective],
    exports: [MyDateRangePicker, FocusDirective]
})
export class MyDateRangePickerModule { }


