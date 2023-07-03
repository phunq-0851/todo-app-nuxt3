<template>
  <div>
    <h1 class="font-bold underline">Welcome to the homepage</h1>
    <h2 class="text-color">Color change</h2>
    <button @click="changeColor">Change color</button>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
  </div>
</template>

<script setup>
    const color = ref("red")

    function changeColor () {
        color.value = 'green'
    }
</script>

<style scoped lang="scss">
h1 {
    color: $secondary;
}

.text-color {
    color: v-bind(color);
}
</style>