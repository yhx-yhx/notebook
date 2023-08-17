<script setup >
import { computed } from "vue"
const props = defineProps(['name', 'content', "color", "bgcColor", "open","showArrow","arrowIcon"])
const defaultIcon = '/images/poster.jpg'
const showArrowComputed = computed(() =>  props.showArrow == null || props.showArrow === true ? props.arrowIcon == null ? `url(${defaultIcon})` : props.arrowIcon : '')

</script>

<template>
    <div class="details_wrap">
        <details :open="$props.open === '' || $props.open === true ? true : false">
            <summary :data-showArrow="showArrowComputed">
                <span v-if="$props.name">{{ props.name }}{{ $props.open }}</span>
                <template v-else>
                    <slot name="name"></slot>
                </template>
            </summary>
            <div class="details_content">
                <div v-if="$props.content">{{ props.content }}</div>
                <template v-else>
                    <slot name="content"></slot>
                </template>
            </div>
        </details>
    </div>
</template>

<style scoped lang="scss">
// .details_wrap {
//     .details_content {}
// }

details {
    background-color: v-bind("props.bgcColor");
    color: v-bind("props.color");
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 0.5em 0.5em 0;
}

summary {
    font-weight: bold;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    cursor: pointer;
      &::marker {
        content: attr(data-showArrow);
    }
}

details[open] {
    padding: 0.5em;

    &:summary {
        border-bottom: 1px solid #aaa;
        margin-bottom: 0.5em;
    }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>