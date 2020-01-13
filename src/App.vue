<template>
  <div id="app">
    <ol>
      <li v-for="(person, index) in persons" :key="index">
        {{ person.getName() }} ({{ person.age }}) - {{ person.gender }}
      </li>
    </ol>
  </div>
</template>

<script>
import { Person, GenderedPerson } from "./models/Person";

let persons = [
  new GenderedPerson("Bill", "Gates", 64, "male"),
  new GenderedPerson("Steve", "Jobs", 65, "male"),
  new GenderedPerson("Ilon", "Musk", 45, "male"),
  new GenderedPerson("Pamela", "Anderson", 60, "female"),
  new Person("Steve", "Wozniak", 60),
];

export default {
  data() {
    return {
      persons,
    }
  }
}
</script>
