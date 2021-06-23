<template>
  <section>Filter</section>
  <section>
    <div class="controls">

      <button>Refresh</button>
      <router-link to="/register"> Register as coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in filterCoaches" :key="coach.id">
        {{coach.firstName}}
      </li>
    </ul>
<h3 v-else> there is no coaches </h3>

    List of Coaches
  </section>
</template>

<script>
export default {
 computed:{
filterCoaches()
{
  return this.$store.getters['coaches/coaches'];
},
hasCoaches()
{
  return this.$store.getters['coaches/hasCoaches'];
}

 },
}
</script>