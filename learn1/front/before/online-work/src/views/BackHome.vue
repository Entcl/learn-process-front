<template>
  <!-- <div>123</div> -->
  <div>
    <!-- 主体 -->
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>会员管理
            </template>

            <!-- <router-link :to="{ name: 'MemberLevel', params: { id: 2, UserName } }"> -->
            <router-link :to="{ name: 'MemberLevel', params: { id: 2 } }">
              <!-- <router-link to="/member/level/1"> -->
              <el-menu-item index="1-1">
                会员等级
              </el-menu-item>
            </router-link>

            <router-link to="/member/list">
              <el-menu-item index="1-2">
                会员列表
              </el-menu-item>
            </router-link>

            <!-- <router-link :to="{ name: 'ToBackHome', params: { id: 2, UserName } }"> -->
            <router-link to="/backHome/admin">
              <el-menu-item index="1-3">
                回到首页
              </el-menu-item>
            </router-link>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>商品管理
            </template>
            <el-menu-item index="1-1">商品分类</el-menu-item>
            <el-menu-item index="1-2">商品列表</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-message"></i>其他
            </template>
            <router-link to="/login">
              <el-menu-item index="1-1">
                回到登录页
              </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <span>admin</span> -->
          <span>{{ userName }}</span>
          <!-- <span>{{ $store.getters.getUser.userName }}</span> -->
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "BackHome",
  data() {
    return {
      // UserName: this.$route.params.UserName
      userName: this.$store.getters.getUser.userName
    }
  },
  mounted() {
    console.log('BackHome', this.$store.state.user);
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState() {
      console.log(123);
      console.log(sessionStorage.setItem("state", JSON.stringify(this.$store.state)))
      sessionStorage.setItem("state", JSON.stringify(this.$store.state.user));
      // sessionStorage.setItem("state", this.$store.state);
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>