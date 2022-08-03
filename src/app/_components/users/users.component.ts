import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user.model";
import {MdbTableDirective} from "mdb-angular-ui-kit/table";
import {delay, Observable} from "rxjs";
import {UsersService} from "../../_services/users.service";
import {map} from "rxjs/operators";
import {getRoleColor, Role} from "../../models/role.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('table') table!: MdbTableDirective<User>;

  dataSource$: Observable<User[]>;
  loading = true;

  constructor(
    private _usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.loading = true;
    this.dataSource$ = this._usersService.getAllUsers().pipe(map(resp => {
      this.loading = false;
      console.log('resp', resp);
      return resp.users;
    }));
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
