<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import BiographicalNotes from '../../pages/Components/BiographicalNotes/index.vue'
import Comment from "../Components/comment/index.vue"

const members = [
  {
    avatar: '/images/avatar/logo.png',
    name: 'YHX',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yhx-yhx' },
      { icon: 'twitter', link: 'https://gitee.com/yhx825' },
      { icon: 'github', link: 'https://github.com/yhx-yhx' }
    ]
  }, {
    avatar: '/images/avatar/logo.png',
    name: '...',
    title: '...',
    links: [
      { icon: 'github', link: 'https://github.com/yhx-yhx' },
      { icon: 'github', link: 'https://gitee.com/yhx825' }
    ]
  }
]
</script>


<VPTeamMembers size="small" :members="members" />

<BiographicalNotes />

<Comment/>

<style scoped>

</style>