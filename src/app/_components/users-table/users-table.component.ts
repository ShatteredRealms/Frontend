import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user.model";
import {MdbTableDirective} from "mdb-angular-ui-kit/table";
import {getRoleBadgeClasses, Role} from "../../models/role.model";
import {advancedFilterFn} from "../../_helpers/filter.table";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  @ViewChild('table') table!: MdbTableDirective<User>;

  @Input() dataSource: User[] | null;
  @Input() loading = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  advancedSearch(value: string): void {
    this.table.search(value);
  }

  filterFn(data: any, searchTerm: string): boolean {
    return advancedFilterFn(data, searchTerm);
  }

  getRoleHTMLClasses(role: Role): string {
    return getRoleBadgeClasses(role);
  }
}
