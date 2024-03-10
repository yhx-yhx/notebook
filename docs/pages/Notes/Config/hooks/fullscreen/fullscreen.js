// 按照惯例，组合式函数名以“use”开头

import { isRef, unref, ref } from "vue";

// 实现组合式函数 全屏
export function useFullscreen(target = document.body) {

  target = unref(target);
  // 状态信息
  const isFullscreen = ref(false)

  // 实现进入全屏
  const enter = () => {
    target = unref(target)
    if (!target) {
      console.warn('target is null')
      return
    }
    if (target.requestFullscreen) {
      target.requestFullscreen()
    } else if (target.mozRequestFullScreen) {
      target.mozRequestFullScreen()
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen()
    } else if (target.msRequestFullscreen) {
      target.msRequestFullscreen()
    }
  }

  // 实现退出全屏
  const exit = () => {
    if (!target) {
      console.warn('target is null')
      return
    }
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
    // isFullscreen.value = false

  }

  const toggle = () => {
    isFullscreen.value ? exit() : enter()
  }

  document.addEventListener("fullscreenchange", (event) => {
    if (document.FullScreenElement) {
      isFullscreen.value = true
    } else {
      isFullscreen.value = false
    }
  });

  return { enter, exit, isFullscreen, toggle }
}


// 使用示例
// const mapViewer = ref(null) // domEl
// const mapViewerCom = computed(() => mapViewer) // 确保更新
// const { isFullscreen, enter, exit, toggle } = useFullscreen(mapViewerCom)