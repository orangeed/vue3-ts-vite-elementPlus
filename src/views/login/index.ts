import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { login } from "../../server";

export default defineComponent({
  name: "",
  components: {},
  setup() {
    const router = useRouter();
    login({
      username: "1".trim(),
      password: "1".trim(),
    }).then((res) => {
      console.log("login", res);
    });
    const handleGoToIndex = () => {
      router.push("/");
    };
    return {
      handleGoToIndex,
    };
  },
});
