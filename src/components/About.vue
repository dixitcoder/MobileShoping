<template>
    <div>
      <br><br>
      <h2>About</h2>
      <ol v-for="student in artists" :key="student.id">
        <li>{{ student.student }}</li>
      </ol>
    </div>
  </template>
  <script>
export default {
  name:'AboutVue',
    data(){
      return{
        artists: [
         {student: 'Davido', genre: 'afrobeats', country: 'Nigeria'},
         {student: 'Burna Boy', genre: 'afrobeats', country: 'Nigeria'},
         {student: 'AKA', genre: 'hiphop', country: 'South-Africa'},
         {student: 'Sarkodie', genre: 'hiphop', country: 'Ghana'},
         {student: 'Stormzy', genre: 'hiphop', country: 'United Kingdom'},
         {student: 'Lil Nas', genre: 'Country', country: 'United States'},
         {student: 'Nasty C', genre: 'hiphop', country: 'South-Africa'},
         {student: 'Shatta-walle', genre: 'Reagae', country: 'Ghana'},
         {student: 'Khalid', genre: 'pop', country: 'United States'},
         {student: 'ed-Sheeran', genre: 'pop', country: 'United Kingdom'}
        ]
      }
    }
}
</script>