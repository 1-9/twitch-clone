import { TwitchClonePage } from './app.po';

describe('twitch-clone App', () => {
  let page: TwitchClonePage;

  beforeEach(() => {
    page = new TwitchClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
