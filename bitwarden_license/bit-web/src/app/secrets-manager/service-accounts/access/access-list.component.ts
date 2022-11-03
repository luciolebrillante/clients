import { SelectionModel } from "@angular/cdk/collections";
import { Component, Input } from "@angular/core";

import { AccessTokenView } from "../models/view/access-token.view";

@Component({
  selector: "sm-access-list",
  templateUrl: "./access-list.component.html",
})
export class AccessListComponent {
  @Input() tokens: AccessTokenView[] = [];

  protected selection = new SelectionModel<string>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tokens.length;
    return numSelected === numRows;
  }

  toggleAll() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.selection.select(...this.tokens.map((s) => s.id));
  }

  protected permission(token: AccessTokenView) {
    return "canRead";
  }
}
