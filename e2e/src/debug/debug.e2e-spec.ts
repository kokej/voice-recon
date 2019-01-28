import { DebugPage } from './debug';

describe('workspace-project debug', () => {
  let page: DebugPage;

  beforeEach(() => {
    page = new DebugPage();
  });

  it('should display debug works! message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('debug works!');
  });
});
