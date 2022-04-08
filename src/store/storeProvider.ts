import { reactive, toRefs, type InjectionKey } from "vue";

type state = {
  count: number;
};

export const useStore = () => {
  // state
  const globalState = reactive({
    count: 0,
  });

  // actions
  const increment = () => {
    globalState.count++;
  };

  const decrement = () => {
    globalState.count--;
  };

  return { ...toRefs(globalState), increment, decrement };
};

// storeの型を決めている
type storeType = ReturnType<typeof useStore>;
export const storeKey: InjectionKey<storeType> = Symbol("store");
