import { NgBook2Page } from './app.po';

describe('ng-book2 App', () => {
  let page: NgBook2Page;

  beforeEach(() => {
    page = new NgBook2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
