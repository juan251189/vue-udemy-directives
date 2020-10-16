import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
      bind(el, binding) {
        //el.style.backgroundColor = binding.value;
        //now with arguments
        var delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value;
          let secondColor = 'blue';
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

          }, delay);

        }else{
          setTimeout(()=>{
            if(binding.arg == 'background'){
              el.style.backgroundColor=binding.value;
            }
          },delay)
        }
      }});





    new Vue({
      render: h => h(App),
    }).$mount('#app')
