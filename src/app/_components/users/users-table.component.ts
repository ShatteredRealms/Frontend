import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user.model";
import {MdbTableDirective} from "mdb-angular-ui-kit/table";
import {getRoleColor, Role} from "../../models/role.model";

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
    let [phrase, columns] = searchTerm.split(' in:').map((str) => str.trim());
    return Object.keys(data).some((key: any) => {
      if (columns?.length) {
        let result;
        columns.split(',').forEach((column) => {
          if (
            column.toLowerCase().trim() === key.toLowerCase() &&
            data[key].toLowerCase().includes(phrase.toLowerCase())
          ) {
            result = true;
          }
        });
        return result;
      }
      if (data[key] && !columns?.length) {
        return JSON.stringify(data).toLowerCase().includes(phrase.toLowerCase());
      }
      return [];
    });
  }

  getRoleHTMLClass(role: Role): string {
    return `bg-${getRoleColor(role)}`;
  }
}
