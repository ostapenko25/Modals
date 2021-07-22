<template>

    <modals 
        title="Register"      
        @close = "onClose">

        <div slot="body">
            <form @submit.prevent="onSubmit">  
                <!---email -->
                <div class="form-item" :class="{ errorInput: $v.email.$error }">
                    <label>Email</label>
                    <p class="errorText" v-if="!$v.email.required"> Email is required </p>
                    <p class="errorText" v-if="!$v.email.minLength"> Email is not correct </p>                  
                    <input 
                        v-model="email"
                        :class="{ error: $v.email.$error }"
                        @change="$v.email.$touch">
                </div>
                 <!---password -->
                <div class="form-item" :class="{ errorInput: $v.password.$error }">
                    <label>Password</label>
                    <p class="errorText" v-if="!$v.password.required"> Password is required </p>
                    <p class="errorText" v-if="!$v.password.minLength"> Password must have at least {{ $v.password.$params.minLength.min }} symbols  </p>                  
                    <input type="password"
                        v-model="password"
                        :class="{ error: $v.password.$error }"
                        @change="$v.password.$touch">
                </div>
                 <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
                    <label>Repeat password</label>                   
                    <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword"> Password is not the same!  </p>                  
                    <input type="password"
                        v-model="repeatPassword"
                        :class="{ error: $v.repeatPassword.$error }"
                        @change="$v.repeatPassword.$touch">
                </div>               

                <button class="btn btnPrimary" >Register</button>
            </form>
        </div>

         <div slot="switch">
             <button class="btn btnWhite" @click="$emit('switch')">I want to login</button>
        </div>

    </modals> 
    
</template>

<script>
//Plugins
import { required, minLength, email, sameAs} from 'vuelidate/lib/validators';

import Modals from '@/components/Modal.vue';
export default {
    components: {
        Modals
    },
    data() {
        return {          
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
             required,
            sameAsPassword: sameAs('password')
        }
    },
    methods: {
        onSubmit () {
            this.$v.$touch();
            if (!this.$v.$invalid) {//если форма валидна
                const user = {                  
                    email:  this.email,
                    password: this.password
                }
                console.log(user);

                //When done               
                this.email = '';
                this.password = '';
                this.repeatPassword = '';
                this.$v.$reset();
                this.$emit("close")
            }           
        },
        onClose() {           
            this.email = '';
            this.password = '';
            this.repeatPassword = '';
            this.$v.$reset();
            this.$emit("close")
        }
    }
  
}
</script>

<style lang="scss">

.form-item .errorText {
    display: none;
    margin-bottom: 8px;
    font-size: 13px;
    color: red
}

.form-item {
    &.errorInput .errorText {
        display: block;  
    } 
}

input.error {
    border-color: red
}
</style>
