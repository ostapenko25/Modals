<template>

    <modals 
        title="Login"      
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
                    <input type="password"
                        v-model="password"
                        :class="{ error: $v.password.$error }"
                        @change="$v.password.$touch">
                </div>                      

                <button class="btn btnPrimary" >Login</button>
            </form>
        </div>

        <div slot="switch">
             <button class="btn btnWhite" @click="$emit('switch')">I want to register</button>
        </div>

    </modals> 
    
</template>

<script>
//Plugins
import { required, email} from 'vuelidate/lib/validators';

import Modals from '@/components/Modal.vue';
export default {
    components: {
        Modals
    },
    data() {
        return {          
            email: '',
            password: ''           
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required           
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
                this.$v.$reset();
                this.$emit("close")
            }           
        },
        onClose() {           
            this.email = '';
            this.password = '';           
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
