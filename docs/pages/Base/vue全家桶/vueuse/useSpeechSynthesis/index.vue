<script setup>
import { onMounted, ref } from 'vue'
import { useSpeechSynthesis } from '@vueuse/core'

const voice = ref()
const text = ref('Hello, everyone! Good morning!')
const pitch = ref(1)
const rate = ref(1)

const speech = useSpeechSynthesis(text, {
    voice,
    pitch,
    rate,
})

let synth

const voices = ref([])

onMounted(() => {
    if (speech.isSupported.value) {
        // load at last
        setTimeout(() => {
            synth = window.speechSynthesis
            voices.value = synth.getVoices()
            voice.value = voices.value[0]
        })
    }
})

function play() {
    if (speech.status.value === 'pause') {
        console.log('resume')
        window.speechSynthesis.resume()
    }
    else {
        speech.speak()
    }
}

function pause() {
    window.speechSynthesis.pause()
}

function stop() {
    speech.stop()
}
</script>

<template>
    <div class="card-page">
        <div v-if="!speech.isSupported">
            Your browser does not support SpeechSynthesis API,
            <a href="https://caniuse.com/mdn-api_speechsynthesis" target="_blank">more details</a>
        </div>
        <div v-else>
            <label class="font-bold mr-2">Spoken Text</label>
            <input v-model="text" class="!inline-block" type="text">

            <br>

            <label class="font-bold mr-2">Language</label>
            <div class="select" bg="$vp-c-bg" border="$vp-c-divider 1" inline-flex items-center relative rounded>
                <i i-carbon-language absolute left-2 opacity-80 pointer-events-none />
                <select v-model="voice" px-8 border-0 bg-transparent h-9 rounded appearance-none>
                    <option bg="$vp-c-bg" disabled>
                        Select Language
                    </option>
                    <option v-for="(voice, i) in voices" :key="i" bg="$vp-c-bg" :value="voice">
                        {{ `${voice.name} (${voice.lang})` }}
                    </option>
                </select>
                <i i-carbon-chevron-down absolute right-2 opacity-80 pointer-events-none />
            </div>

            <br>
            <div inline-flex items-center>
                <label class="font-bold mr-2">Pitch</label>
                <div class="mt-1" inline-flex>
                    <input v-model="pitch" type="range" min="0.5" max="2" step="0.1">
                </div>
            </div>

            <br>
            <div inline-flex items-center>
                <label class="font-bold mr-3">Rate</label>
                <div class="mt-1" inline-flex>
                    <input v-model="rate" type="range" min="0.5" max="2" step="0.1">
                </div>
            </div>

            <div class="mt-2">
                <button :disabled="speech.isPlaying.value" @click="play">
                    {{ speech.status.value === 'pause' ? 'Resume' : 'Speak' }}
                </button>
                <button :disabled="!speech.isPlaying.value" class="orange" @click="pause">
                    Pause
                </button>
                <button :disabled="!speech.isPlaying.value" class="red" @click="stop">
                    Stop
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
button {
    background-color: #5352ed;
    padding: 6px 10px;
    cursor: pointer;
    border-radius: 5px;

    &:nth-child(n+1) {
        margin-left: 10px;
    }
}


input,
select {
    margin-left: 10px;
    border: 1px solid #5352ed;
    border-radius: 5px;
    padding: 6px 10px;
    display: inline-block;
    cursor: pointer;
}

.select {
    display: inline-block;
}


.dark {
    button {
        background-color: #3742fa;
    }

    input,
    select {
        border: 1px solid #3742fa;
    }
}
</style>