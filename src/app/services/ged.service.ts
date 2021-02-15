import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as gedcom from 'gedcom-d3';
import * as d3 from 'd3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GedService {
  gedUrl:string = 'assets/fam.ged';

  constructor(private http: HttpClient) {

  }

  fetch(): Observable<any> {
    return this.http.get(this.gedUrl, {
      responseType : 'text'
    });
  }

  parse(gedFile): any {
    return gedcom.parse(gedFile);
  }

  convertForTheD3(parsedData) {
    let data = gedcom.d3ize(parsedData);
    console.log(data);
    return data;
  }
}
