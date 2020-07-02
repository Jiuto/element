import { createTest, destroyVM } from '../util';
import PicturePreview from 'packages/picture-preview';

describe('PicturePreview', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PicturePreview, true);
    expect(vm.$el).to.exist;
  });
});

