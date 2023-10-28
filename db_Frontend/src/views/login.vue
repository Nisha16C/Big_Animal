<template>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Big Animal
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                  </h1>
                  <div class="space-y-4 md:space-y-6">
                      <div>
                          <label for="username" class="block mb-2 text-sm ml-5 font-medium text-gray-900 dark:text-white">Your username</label>
                          <input type="username" v-model="username" class="input-field" placeholder="username" required="">
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password"  v-model="password" placeholder="••••••••" class="input-field" required="">
                      </div>
                      <div class="flex items-center justify-between">                  
                          <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                      </div>
                      <div v-if="error" class="text-red-500 text-center mb-4">{{ error }}</div>
                      <button type="submit" @click="login" class="button-primary">Login</button>
                    </div>
              </div>
          </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        username: null,
        password: null,
        error: null,
      }
    },
    methods: {
      login() {
        const formData = {
          username_or_email: this.username,
          password: this.password
        }
        axios
          .post('http://127.0.0.1:8000/api/v1/login/', formData)
          .then((response) => {
            const token = response.data.token
            this.userdata = response.data.user_data
            const user_id = this.userdata.id
            const username = this.userdata.username
  
            sessionStorage.setItem('user_id', user_id);
            sessionStorage.setItem('username', username);
  
            this.$router.push('/home')
          })
          .catch((error) => {
            this.error = error.response.data.error;
          })
      },
    }
  }
  </script>
  
  <style scoped>
  .input-field {
    width: 100%;
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
  }
  
  .button-primary {
    width: 100%;
    padding: 8px;
    background-color: #4b5563;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .button-primary:hover {
    background-color: #374151;
  }
  
  </style>