import { AngularLatamSitePage } from './app.po';

describe('angular-latam-site App', () => {
  let page: AngularLatamSitePage;

  beforeEach(() => {
    page = new AngularLatamSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
