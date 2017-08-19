import { RestProjectPage } from './app.po';

describe('rest-project App', () => {
  let page: RestProjectPage;

  beforeEach(() => {
    page = new RestProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
