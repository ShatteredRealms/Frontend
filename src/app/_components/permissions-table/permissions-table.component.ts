import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective} from "mdb-angular-ui-kit/table";
import {User} from "../../models/user.model";
import {UserPermission} from "../../models/user-permission.model";

@Component({
  selector: 'app-permissions-table',
  templateUrl: './permissions-table.component.html',
  styleUrls: ['./permissions-table.component.scss']
})
export class PermissionsTableComponent implements OnInit {
  @ViewChild('table') table!: MdbTableDirective<User>;

  @Input() dataSource: UserPermission[] | null;
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
}
