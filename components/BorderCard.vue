<template>
   <div class="container m-auto">
            <div class="w-full flex flex-wrap">
                <div v-for="(border, index) in borders" :key="index"
                    class="basis-1/4 flex justify-center items-center bg-gray-100">
                    <CardItem v-if="isShow" :country="border" />
                </div>
            </div>
        </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    country: {
        type: Object,
       
    },
   
})
const isShow = ref(false)

 const borders = computed(() =>{
      debugger
      if (!!props.country.borders) {
        const borderCodes = props.country.borders.flat().join(",");
        const { data: response } = useFetch(
          `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
        );
        
        return response;
        isShow.value = true;
      }
      return [];
    })
</script>