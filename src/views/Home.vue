<script setup lang="ts">
import {ref} from "vue";

const home = ref('home');
</script>

<template>
    <div id="home">
      {{home}}
      <el-button>默认按钮</el-button>
    </div>
</template>

<style scoped>

</style>