# pdfjs
<br/>

<div class="iframebox">
    <PdfIframe :url="url"/>
</div>
  
<script setup>
import { ref } from 'vue';
import PdfIframe from './pdf-iframe/index.vue'

const url = ref('/notebook/pdfjs/test2.pdf')

</script>
<style scoped>
.iframebox {
  height: 100vh;
}
</style>


