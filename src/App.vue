<template>
  <div id="app">
    <ol>
      <li v-for="(person, index) in persons" :key="index">{{ person.name }} ({{ person.age }})</li>
    </ol>
  </div>
</template>

<script>
let persons = [
  {
    name: "Alex5",
    age: 5,
  },
  {
    name: "Alex10",
    age: 10,
  },
  {
    name: "Alex30",
    age: 30,
  },
  
];

export default {
  data() {
    return {
      persons: persons,
    }
  }
}
</script>

