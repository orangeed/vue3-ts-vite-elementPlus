import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  computed,
  onMounted,
} from "vue";

// import SidebarItem from "./components/SidebarItem/index.vue";

// import TagsView from "./components/TagsView/index.vue";

import { useRouter, useRoute } from "vue-router";

const menuOptions = [
  {
    label: "且听风吟",
    key: "hear-the-wind-sing",
  },
  {
    label: "1973年的弹珠玩具",
    key: "pinball-1973",
    disabled: true,
    children: [
      {
        label: "鼠",
        key: "rat",
      },
    ],
  },
  {
    label: "寻羊冒险记",
    key: "a-wild-sheep-chase",
    disabled: true,
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
          },
          {
            label: "羊男",
            key: "sheep-man",
          },
        ],
      },
      {
        label: "饮品",
        key: "beverage",
        children: [
          {
            label: "威士忌",
            key: "whisky",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];

export default defineComponent({
  name: "",
  // components: { SidebarItem, TagsView },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    // 下拉菜单
    const dropdownList = [
      {
        label: "退出",
        key: "logout",
        props: {
          onClick: () => {
            // logout事件
          },
        },
      },
    ];
    // 选中下拉菜单
    const handleSelect = (key: string | number) => {
      console.log("选中下拉菜单", key);
    };

    // 这个菜单是后端返回的
    const permission_routes = [
      {
        path: "/dashboard",
        meta: {
          hidden: false,
          title: "首页",
          icon: "el-icon-delete-solid",
        },
      },
      {
        path: "/",
        meta: {
          hidden: false,
          title: "多级菜单",
          icon: "el-icon-delete-solid",
        },
        children: [
          {
            path: "/categreg",
            meta: {
              hidden: false,
              title: "二级菜单",
              icon: "el-icon-delete-solid",
            },
            children: [
              {
                path: "/categregChild",
                meta: {
                  hidden: false,
                  title: "三级菜单",
                  icon: "el-icon-delete-solid",
                },
              },
            ],
          },
        ],
      },
    ];
    // 是否展开
    const isCollapse = ref(false);
    // 打开菜单
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    // 关闭菜单
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    // 给页面绑定的key
    const key = computed(() => {
      route.path;
    });
    // 当前点亮的菜单
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta?.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });

    // 改变项目的模式，明亮或者黑暗
    const themeData = reactive({
      isDark: false,
    });
    const handleChangeMode = (mode: string) => {
      // root.$store.commit("app/CHANGE_MODE", mode);
      // if (!themeData.isDark) {
      //   window.document.documentElement.setAttribute("data-theme", "light");
      // } else {
      //   window.document.documentElement.setAttribute("data-theme", "dark");
      // }
      // themeData.isDark = !themeData.isDark;
    };

    return {
      isCollapse,
      handleOpen,
      handleClose,
      key,
      permission_routes,
      activeMenu,
      handleChangeMode,
      dropdownList,
      handleSelect,
    };
  },
});
