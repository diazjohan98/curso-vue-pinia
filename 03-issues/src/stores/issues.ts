import { defineStore } from "pinia";
import { ref } from "vue";

export const useIssuesStore = defineStore('issues', () => {

  const state = ref('');
  const labels = ref<string[]>([]);

  return {
    //State
    state,
    labels,

    //Getters

    //Actions
    toggleLabel(labelName: string) {
      throw new Error('Method not implemented.');
    }
  }
})
