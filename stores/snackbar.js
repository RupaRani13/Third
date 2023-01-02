import { defineStore } from 'pinia';


export const useSnackbar = defineStore('snackbar', {
  state: () => {
    return {
      display: false,
      displayText : 'Snackbar text'
    }
  },
  actions: {
    showSnackbar(text) {
      this.display = true;
      this.displayText = text;
    },
  } 
})