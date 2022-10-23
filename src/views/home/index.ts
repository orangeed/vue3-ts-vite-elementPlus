import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
  name: "",
  components: {},
  setup(prop, { root }) {
    const data = reactive({});
    console.log('prop',prop);
    console.log('root',root);
    return {
      ...toRefs(data),
    };
  },
});
