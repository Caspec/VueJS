new Vue({
    el: '#exercise',
    data: {
      effect: true,
	  userClass: '',
	  isVisible: true,
	  myStyle: {
    	width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    methods: {
      startEffect: function() {
        console.log(this) 
        setInterval(function() {
          this.effect = !this.effect;
          console.log(this)
          console.log(this.effect);
        }, 1000);
      }
    }
})