import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: MenuItem[] = [
    {
      text: 'basics',
      route: './template/basics'
    },
    {
      text: 'dynamics',
      route: './template/dynamics'
    },
    {
      text: 'switches',
      route: './template/switches'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
