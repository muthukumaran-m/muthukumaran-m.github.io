import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  yearsOfExperience: any = '';
  constructor(private utilService: UtilService) {
    this.yearsOfExperience = utilService.getYearsOfExperience();
  }

  ngOnInit(): void {
  }

}
