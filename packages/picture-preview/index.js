import PicturePreview from './src/main';

/* istanbul ignore next */
PicturePreview.install = function(Vue) {
  Vue.component(PicturePreview.name, PicturePreview);
};

export default PicturePreview;
