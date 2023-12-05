<script setup >
import { ref } from "vue"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();

loader.load( 'path/to/model.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
</script>

<template>
    <div class="container"></div>
</template>

<style scoped lang="scss">

</style>