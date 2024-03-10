<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import BiographicalNotes from '../Base/Components/BiographicalNotes/index.vue'
import Comment from "../Base/Components/comment/index.vue"

const members = [
  {
    avatar: '/notebook/images/avatar/logo.png',
    name: 'YHX',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yhx-yhx' },
      { icon: 'gitee', link: 'https://gitee.com/yhx825' },
      { icon: 'github', link: 'https://github.com/yhx-yhx' }
    ]
  }
]
</script>


<VPTeamMembers size="small" :members="members" />

<BiographicalNotes />

<Comment/>

<style scoped>

</style>