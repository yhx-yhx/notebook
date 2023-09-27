import autoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// 自动导入 vue vue-router pinia Element-plus
export default function createAutoImport() {
  return autoImport({
    resolvers: [ElementPlusResolver()],
    imports: [
      'vue',
      'vue-router',
      'pinia',
    ],
    dts: false,
  });
}
