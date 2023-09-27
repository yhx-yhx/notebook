import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// 自动导入 Element-plus
export default function createComponents() {
  return Components({
    resolvers: [ElementPlusResolver()],
  });
}
