<script setup lang="ts">
import {ref} from "vue";
import router from "@/router";

const home = ref('home');
</script>

<template>
    <div id="home">
      {{home}}
      <el-button @click="router.push('/user')">默认按钮</el-button>
    </div>
</template>

<style scoped>

</style>