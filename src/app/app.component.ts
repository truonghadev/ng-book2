import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('AngularJS', 'http://angularjs.org'),
      new Article('Ionic Framework', 'http://ionicframework.com'),
      new Article('Angular', 'http://angular.io')
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    let article = new Article(title.value, link.value);
    this.articles.push(article);
    title.value = '';
    link.value = '';
    return false;
  }

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
