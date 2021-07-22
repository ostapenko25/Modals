<template>
  <div class="wrapper">

     <!-- <wrapper-header> -->

    <div class="wrapper-content">   
      <section>
         <div class="container">  

          <!-- Login with Validate -->
          <button class="btn btnPrimary" @click="modalLogin = !modalLogin">Login</button>
          <modalLogin 
            v-show="modalLogin"
            @close="modalLogin = false"
            @switch="modalLogin = false; modalRegister = true"           
          >
          </modalLogin>

          <!-- Register with Validate -->
          <button class="btn btnPrimary" @click="modalRegister = !modalRegister">Register</button>
           <modalRegister 
            v-show="modalRegister"
            @close="modalRegister = false"
            @switch="modalRegister = false; modalLogin = true"           
          >
          </modalRegister>

         </div>
      </section>
    </div>

     <!-- <wrapper-footer> -->

  </div> 
</template>

<script>

//Components
import ModalLogin from '@/components/ModalLogin.vue';
import ModalRegister from '@/components/ModalRegister.vue';

export default {
  components: {   
    modalLogin: ModalLogin,
    modalRegister: ModalRegister
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
         show: false,
         name: '',
         email: ''
      },    
      modalLogin: false,
      modalRegister: false
    }
  },
  methods: {
  }
}
</script>

<style >

</style>
