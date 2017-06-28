import { CarServicePage } from './app.po';

describe('car-service App', () => {
  let page: CarServicePage;

  beforeEach(() => {
    page = new CarServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
