<script setup lang="ts">
import {getAllUser,addUser,updateUser,deleteUser} from "@/requests";
import {ref} from "vue";

const get = () => {
  getAllUser().then(res => {
    alert(JSON.stringify(res.data,null,2));
  });
};

const user = ref({
  username: 'admin',
  password: '123456'
})

const obj = ref({
  id : 3,
  username: 'mike',
  password: '123456'
})


const add = () => {
  addUser(user.value).then(res => {
    alert(res.data);
  });
};

const put = () => {
  updateUser(obj.value).then(res => {
    alert(res.data);
  });
};

const del = () => {
  deleteUser(2).then(res => {
    alert(res.data);
  });
};





</script>

<template>
  <div id="user">
    <el-button type="primary" @click="get">查询</el-button>
    <el-button type="primary" @click="add">添加</el-button>
    <el-button type="primary" @click="put">编辑</el-button>
    <el-button type="primary" @click="del">删除</el-button>
  </div>
</template>

<style scoped>

</style>