import { CointoTemplatePage } from './app.po';

describe('Cointo App', function() {
  let page: CointoTemplatePage;

  beforeEach(() => {
    page = new CointoTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
