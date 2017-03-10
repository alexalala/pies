<template>
  <div class="hello">
    <h1>Pie Selector</h1>
    <select>
      <option value="steph">Steph</option>
      <option value="alex">Alex</option>
    </select>
    <br>
    <input type="radio" value="pleaseSelect" name="pies" id="pleaseSelect" v-model="picked">
      <label for="pleaseSelect">Please Select</label>
      <br>
    <input type="radio" value="theMatch" name="pies" id="theMatch" v-model="picked">
      <label for="theMatch">The Match</label>
      <br>
    <input type="radio" value="theAussie" name="pies" id="theAusie" v-model="picked">
      <label for="theAussie">The Aussie</label>
      <br>
    <button type="submit">Submit</button>
    <span>Picked: {{ picked }}</span>
  </div>
</template>

<script>
  export default {
  };
</script>
