<script setup lang="ts">
import { ref, computed } from 'vue'

// 1️⃣ Define the form structure with TypeScript interface
interface Form {
  name: string
  email: string
  password: string
}

// 2️⃣ Define the error structure
interface FormErrors {
  name: string
  email: string
  password: string
}

// 3️⃣ Reactive form and errors
const form = ref<Form>({
  name: '',
  email: '',
  password: ''
})

const errors = ref<FormErrors>({
  name: '',
  email: '',
  password: ''
})

// 4️⃣ Regex patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

// 5️⃣ Validation functions
const validateName = (): void => {
  errors.value.name = form.value.name.trim() ? '' : 'Name is required'
}

const validateEmail = (): void => {
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!emailPattern.test(form.value.email)) {
    errors.value.email = 'Email is invalid'
  } else {
    errors.value.email = ''
  }
}

const validatePassword = (): void => {
  if (!form.value.password) {
    errors.value.password = 'Password is required'
  } else if (!passwordPattern.test(form.value.password)) {
    errors.value.password = 'Password must be at least 6 characters and include a number'
  } else {
    errors.value.password = ''
  }
}

// 6️⃣ Computed property to check if the form is valid
const isFormValid = computed<boolean>(() => {
  return !errors.value.name &&
         !errors.value.email &&
         !errors.value.password &&
         Boolean(form.value.name) &&
         Boolean(form.value.email) &&
         Boolean(form.value.password)
})

// 7️⃣ Submit handler
const handleSubmit = (): void => {
  validateName()
  validateEmail()
  validatePassword()

  if (isFormValid.value) {
    console.log('Form submitted:', form.value)
    alert('Form submitted successfully!')
    // Example: call your Nuxt API here
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div>
      <label>Name:</label>
      <input type="text" v-model="form.name" @blur="validateName" />
      <span class="error">{{ errors.name }}</span>
    </div>

    <div>
      <label>Email:</label>
      <input type="email" v-model="form.email" @blur="validateEmail" />
      <span class="error">{{ errors.email }}</span>
    </div>

    <div>
      <label>Password:</label>
      <input type="password" v-model="form.password" @blur="validatePassword" />
      <span class="error">{{ errors.password }}</span>
    </div>

    <button type="submit" :disabled="!isFormValid">Submit</button>
  </form>
</template>

<style scoped>

.error {
  color: red;
  font-size: 12px;
}

input {
  display: block;
  margin-bottom: 5px;
  padding: 6px;
  width: 250px;
}

button {
  padding: 8px 16px;
  margin-top: 10px;
}
</style>
