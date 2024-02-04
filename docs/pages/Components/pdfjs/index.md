# pdfjs
<br/>

<div class="iframebox">
    <PdfIframe :url="url"/>
    <hr/>
    <Comment />
</div>
  
<script setup>
import { ref } from 'vue';
import PdfIframe from './pdf-iframe/index.vue'
import Comment from "../comment/index.vue"

const url = ref('/notebook/pdfjs/test2.pdf')

</script>
<style scoped>
.iframebox {
  height: 100vh;
}
</style>


