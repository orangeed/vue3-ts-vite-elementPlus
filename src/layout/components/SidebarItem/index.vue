<!-- SidebarItem -->
<template>
  <div v-if="!item.meta.hidden">
    <template v-if="!item.children || item.children.length === 0">
      <router-link :to="resolvePath(item.path)">
        <el-menu-item
          :index="resolvePath(item.path)"
          class="submenu-title-noDropdown"
        >
          <span>
            <i :class="[item.meta && item.meta.icon, 'sub-el-icon']" />
            <span v-if="!isCollapse">{{ item.meta.title }}</span>
          </span>
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <span>
          <i :class="[item.meta && item.meta.icon, 'sub-el-icon']" />
          <span v-if="!isCollapse">{{ item.meta.title }}</span>
        </span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
