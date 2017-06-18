import { AppProjectPage } from './app.po';

describe('app-project App', () => {
  let page: AppProjectPage;

  beforeEach(() => {
    page = new AppProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
