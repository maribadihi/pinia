import { defineStore } from "pinia";
import { remove } from "lodash";
import foreach from 'lodash/foreach'

export const useFavoriteFlagStore = defineStore("countires", {
  state: () => {
    return {
      selectedCountries: [],
    };
  },
  actions: {
    isInFav(country) {
      return this.selectedCountries.some((selectedCountry) => {
        return selectedCountry.cca2 === country.cca2;
      });
    },
    removeFromFav(country) {
      remove(this.selectedCountries, (selectedCountry) => {
        return selectedCountry.cca2 === country.cca2;
      });
    //  debugger
    //  foreach(country.borders, (cborder)=> {
    //   remove(this.borders,(border)=>{
    //     return border.cca3===cborder;
    //   })
    //    });
    },
    addToFav(country) {
      if (!this.isInFav(country)) {
        this.selectedCountries.push(country);
      }
    },

  },
  getters: {
   
  },
  computed:{
    
  }
});
