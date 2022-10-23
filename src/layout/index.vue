<!-- layout -->
<template>
  <!-- <div>
    <el-header
      :class="[
        'flex items-center page-bgColor border-b',
        themeData.isDark ? '' : 'border-stone-500',
      ]"
      :style="{
        height: headerHight,
      }"
    >
      <div class="flex-1 basis-text-color flex items-center">
        <img
          src="../assets/logo.png"
          :style="{
            height: `calc(${headerHight} - 10px)`,
            width: `calc(${headerHight} - 10px)`,
          }"
          class="rounded-full"
        />
        <span class="text-2xl ml-5 mr-5"> 橘子的分享 </span>
        <i
          class="el-icon-s-unfold text-2xl"
          @click="handleShow"
          v-if="isCollapse"
        ></i>
        <i class="el-icon-s-fold text-2xl" @click="handleCloseMenu" v-else></i>
      </div>
      <div class="flex-1 flex justify-end items-end basis-text-color">
        <div
          class="tool mr-2 cursor-pointer"
          @click="handleChangeMode(themeData.isDark ? 'dark' : 'light')"
        >
          <i
            :class="[
              'text-2xl',
              themeData.isDark
                ? 'el-icon-moon text-sky-600'
                : 'el-icon-sunny text-orange-600',
            ]"
          ></i>
        </div>
        <el-dropdown trigger="click">
          <div class="flex items-center">
            <img
              src="https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg"
              class="w-8 rounded"
            />
            <span class="basis-text-color">王小虎</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container :style="{ height: `calc(100vh - ${headerHight})` }">
      <el-aside
        :width="asideWidth"
        :class="[
          'asideWidth shadow-lg shadow-gray-400 border-r page-bgColor',
          themeData.isDark ? '' : 'border-stone-500',
        ]"
      >
        <el-menu
          :default-active="activeMenu"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          :background-color="handleChnageAsideBgColor()"
          :text-color="handleChangeAsideTextColor()"
          :active-text-color="setting.asideActiveTextColorLight"
          :unique-opened="false"
          :collapse-transition="false"
        >
          <SidebarItem
            v-for="route in permission_routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
            :isCollapse="isCollapse"
          />
        </el-menu>
      </el-aside>
      <el-main>
        <TagsView :themeData="themeData.isDark" />
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <RouterView
              :key="key"
              class="m-3 shadow-lg shadow-gray-400 p-2 basis-text-color page-bgColor"
              :style="{
                height: `calc(100vh - ${headerHight} - 60px)`,
                backgroundColor: handleChnageAsideBgColor(),
              }"
            />
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </div> -->
  <n-layout>
    <n-layout-header>
      <div class="flex-1 basis-text-color flex items-center">
        <!-- <img
          src="../assets/logo.png"
          :style="{
            height: `calc(${headerHight} - 10px)`,
            width: `calc(${headerHight} - 10px)`,
          }"
          class="rounded-full"
        /> -->
        <span class="text-2xl ml-5 mr-5"> 橘子的分享 </span>
        <!-- <i class="el-icon-s-unfold text-2xl" @click="" v-if="isCollapse"></i>
        <i class="el-icon-s-fold text-2xl" @click="" v-else></i> -->
      </div>
      <div class="flex-1 flex justify-end items-end basis-text-color">
        <div class="tool mr-2 cursor-pointer" @click="">
          <!-- <i
            :class="[
              'text-2xl',
              themeData.isDark
                ? 'el-icon-moon text-sky-600'
                : 'el-icon-sunny text-orange-600',
            ]"
          ></i> -->
        </div>
        <!-- <el-dropdown trigger="click">
          <div class="flex items-center">
            <img
              src="https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg"
              class="w-8 rounded"
            />
            <span class="basis-text-color">王小虎</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
        <n-dropdown
          trigger="click"
          @options="dropdownList"
          @select="handleSelect"
        >
          <div>
            <img
              src="https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg"
              class="w-8 rounded"
            />
            <span class="basis-text-color">王小虎</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
        </n-dropdown>
      </div>
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
        style="max-height: 320px"
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="permission_routes"
        />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.asideWidth {
  overflow: hidden;
  transition: 0.35s all;
}

.el-menu {
  border: none;
}
.el-main {
  padding: 0;
}
</style>
