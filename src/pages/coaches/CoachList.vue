<template>
  <section>
<coach-filter @change-filter="setFilters"></coach-filter>
    
  </section>
  <section>

    <base-card>
    <div class="controls">

      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register"> Register as coach</base-button>
    </div>
    <ul v-if="hasCoaches">
      <coach-item v-for="coach in filterCoaches" :key="coach.id" 
      :id="coach.id" 
      :firstName="coach.firstName" 
      :lastName="coach.lastName" 
      :rate="coach.hourlyRate"
      :areas="coach.areas" >
      </coach-item>
    </ul>
<h3 v-else> there is no coaches </h3>

    List of Coaches
    </base-card>
  </section>
</template>

<script>

import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  components:{
    CoachItem,
    CoachFilter
  },
  data()
  {
    return {
      activeFilter:{
        frontend:true,
        backend:true,
        career:true

      }
    }
  },
 computed:{
filterCoaches()
{
  const coach= this.$store.getters['coaches/coaches'];
  return coach.filter(coach=>{
if(this.activeFilter.frontend&&coach.areas.includes('frontend')
)
{
  return true;
}
if(this.activeFilter.backend&&coach.areas.includes('backend')
)
{
  return true;
}
if(this.activeFilter.career&&coach.areas.includes('career')
)
{
  return true;
}
return false;
  });
},
hasCoaches()
{
  return this.$store.getters['coaches/hasCoaches'];
}

 },
 methods:{
   setFilters(updatedFilter)
   {
     this.activeFilter=updatedFilter;

   }
 }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>