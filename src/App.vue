<template>
  <div id="app">
    <ol>
      <li v-for="(person, index) in persons" :key="index">{{ person.getName() }} ({{ person.age }})</li>
    </ol>
  </div>
</template>

<script>
import Person from "./models/Person";

let persons = [
  new Person("Bill", "Gates", 64),
  new Person("Steve", "Jobs", 65),
  new Person("Ilon", "Musk", 45),
];

export default {
  data() {
    return {
      persons: persons,
    }
  }
}
</script>

