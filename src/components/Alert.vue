  <template>
	  <div id="alert" class="alert alert-dismissible fade show" :class="[type]" data-dismiss="alert" role="alert">
	    {{ msg }}
	  </div>
  </template>
  <script>
  	export default {
  		props: ['type','msg'],
      created: function(){
        this.deleteAlert();
      },
      methods: {
        deleteAlert(){
          setTimeout(function(){
            $('#alert').alert('close');
          },2000);
        }
      }
	}
  </script>