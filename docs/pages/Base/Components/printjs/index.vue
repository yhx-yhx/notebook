<script setup>
import { ref } from "vue";
import printJS from "print-js";

let someJSONdata = [{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "555-1234"
}, {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "555-1234"
}, {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "555-1234"
}, {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "555-1234"
}]
</script>
<template>
    <div>
        <button type="button" @click="printJS({
    printable: someJSONdata,
    properties: ['name', 'email', 'phone'],
    type: 'json',
    gridHeaderStyle: 'color: red; border: 2px solid #3971A5;',
    gridStyle: 'border: 2px solid #3971A5;'
  })">
            Print JSON Data
        </button>

        <button type="button" @click="printJS({
 printable: ['https://printjs.crabbly.com/images/print-05.jpg', 'https://printjs.crabbly.com/images/print-05.jpg', 'https://printjs.crabbly.com/images/print-05.jpg','https://printjs.crabbly.com/images/print-05.jpg','https://printjs.crabbly.com/images/print-05.jpg','https://printjs.crabbly.com/images/print-05.jpg','https://printjs.crabbly.com/images/print-05.jpg'],
 type: 'image',
 imageStyle: 'width:100%;height:100%'
})">
            Print JSON images
        </button>
    </div>
</template>

<style lang="scss" scoped></style>
