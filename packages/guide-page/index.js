import GuidePage from './src/main';

/* istanbul ignore next */
GuidePage.install = function(Vue) {
  Vue.component(GuidePage.name, GuidePage);
};

export default GuidePage;
