<template>
  <div class="nav-info">
    <div class="info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            class="avatar"
            src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
          ></el-avatar>
          <span class="name">{{ name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item> 退出系统 </el-dropdown-item>
            <el-dropdown-item divided>个人信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
