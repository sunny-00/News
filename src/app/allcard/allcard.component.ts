import { Component, OnInit } from '@angular/core';
import { allcardInterface } from 'src/allcard';
import { AllcardService } from '../allcard.service';

@Component({
  selector: 'app-allcard',
  templateUrl: './allcard.component.html',
  styleUrls: ['./allcard.component.scss']
})
export class AllcardComponent implements OnInit {

  constructor(private allcard: AllcardService) { }

  articles: allcardInterface[] = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.allcard.getAllnews().subscribe(data => {
      this.articles = data;
    });
  }

  nextArticle(): void {
    this.currentIndex++;
  }

  get currentArticle(): allcardInterface {
    return this.articles[this.currentIndex];
  }
}