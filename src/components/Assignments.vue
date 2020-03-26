<template>
  <div id="assignments">
    <h2>Assignments by topics</h2>
    <h4>Events</h4>
    <input-event></input-event>
  </div>
</template>

<script>
import InputEvent from './Assignments/InputEvents';

export default {
  components: {
    'input-event': InputEvent,
  },
};
</script>
<style>
  #assignments {
    text-align: left;
  }
</style>
