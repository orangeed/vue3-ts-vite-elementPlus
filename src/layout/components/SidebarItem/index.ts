import { isExternal } from "../../../utils/validate";
import path from "path-browserify";
import { defineComponent, reactive, toRefs, ref } from "@vue/composition-api";

export default defineComponent({
  name: "SidebarItem",
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  setup(prop, { root }) {
    const resolvePath = (routePath: string) => {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(prop.basePath)) {
        return prop.basePath;
      }
      return path.resolve(prop.basePath, routePath);
    };
    return { resolvePath };
  },
});
