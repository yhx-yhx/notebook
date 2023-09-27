 <template>
  <div class="demo">
    Type a number: <el-input-number :controls="false" v-model="number" />
    <p class="big-number">{{ tweened.number.toFixed(2) }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { ElInputNumber} from "element-plus"
import gsap from 'gsap'


const number = ref(0)
const tweened = reactive({
  number: 0
})

watch(
  number,
  (n) => {
    gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
  }
)
</script>
<style lang="scss" scoped>
:deep(.el-input-number .el-input__inner){
   text-align: left;
}
.big-number{
  font-size: 2em;
  border: 2px solid blueviolet;
  border-radius: 4px;
  width: fit-content;
  padding: 5px 10px;
}
</style>
