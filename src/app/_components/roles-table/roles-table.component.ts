import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective} from "mdb-angular-ui-kit/table";
import {User} from "../../models/user.model";
import {getRoleColor, Role} from "../../models/role.model";
import {advancedFilterFn} from "../../_helpers/filter.table";

@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.scss']
})
export class RolesTableComponent implements OnInit {
  @ViewChild('table') table!: MdbTableDirective<User>;

  @Input() dataSource: Role[] | null;
  @Input() loading = true;
  @Input() showActions = false;
  @Input() searchable = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  search(searchTerm: string): void {
    this.table.search(searchTerm);
  }

  getRoleHTMLClass(role: Role): string {
    return `bg-${getRoleColor(role)}`;
  }
}
