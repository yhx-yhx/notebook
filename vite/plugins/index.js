import vue from '@vitejs/plugin-vue';

import createAutoImport from './auto-import';
import createComponents from './components';
// import cretateChangelog from './changelog';

export default function createVitePlugins() {
  const vitePlugins = [vue()];
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createComponents());
  // vitePlugins.push(cretateChangelog());
  return vitePlugins;
}
