import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
