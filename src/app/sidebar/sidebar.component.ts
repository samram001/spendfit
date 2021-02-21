import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuGroup = [];
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    
    this.apiService.getMenuList().then((data) => {
      this.menuGroup = data;
    });
  }

}
