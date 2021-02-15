import { Component, OnInit } from '@angular/core';
import { GedService } from '../services/ged.service';

@Component({
  selector: 'family-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(private gedService: GedService) { }

  ngOnInit(): void {
    this.gedService.fetch().subscribe(data => {
      let parsedData = this.gedService.parse(data);
      console.log(parsedData);
      let d3ata = this.gedService.convertForTheD3(parsedData);

    });
  }

}
