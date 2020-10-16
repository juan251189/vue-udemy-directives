<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
    <h1>Directives</h1>
  </div>


  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
    <h1 v-highlight:background.delayed.blink="'lightblue'">Custom Directives </h1>
    <h2 v-localHighlight:background.delayed.blink="{mainColor:'yellow',secondColor:'gren'}">Local directive</h2>
  </div>
</div>
</template>

<script>
export default {
  directives: {
    'localHighlight': {
      bind(el, binding) {

        //el.style.backgroundColor = binding.value;
        //now with arguments
        var delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;


          setTimeout(() => {
            setInterval(() => {

              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }

            }, 1000);
          }, delay)
        }
        else{
          setTimeout(()=>{
            if(binding.arg == 'background'){
              el.style.backgroundColor=binding.value;
            }
          },delay)
        }
      }
    }
  }
}
</script>
<style>
</style>
