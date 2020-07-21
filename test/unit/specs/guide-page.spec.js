import { createTest, destroyVM } from '../util';
import GuidePage from 'packages/guide-page';

describe('GuidePage', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(GuidePage, true);
    expect(vm.$el).to.exist;
  });
});

