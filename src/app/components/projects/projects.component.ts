import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('easy2edi | Projects');
  }

}
