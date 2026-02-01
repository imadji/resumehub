<template>
  <div class="register-container">
    <el-card class="register-card">
      <template #header>
        <h2 class="register-title">Создать аккаунт</h2>
      </template>
      <el-form @submit.prevent="handleRegister">
        <el-form-item>
          <el-input v-model="name" placeholder="Имя" size="large" clearable />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="email"
            placeholder="Email"
            size="large"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="password"
            type="password"
            placeholder="Пароль"
            size="large"
            show-password
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="confirmPassword"
            type="password"
            placeholder="Подтвердите пароль"
            size="large"
            show-password
            clearable
          />
        </el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          size="large"
          class="register-button"
        >
          Зарегистрироваться
        </el-button>
      </el-form>
      <div class="register-footer">
        <span class="register-text">Уже есть аккаунт? </span>
        <router-link to="/login" class="register-link">Войти</router-link>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    ElMessage.error("Пароли не совпадают");
    return;
  }
  console.log("Register attempt:", {
    name: name.value,
    email: email.value,
    password: password.value,
  });
  ElMessage.success("Регистрация успешна");
};
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  padding: 20px;
}

.register-card {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  background-color: #1e1e1e;
  border: 1px solid #333;
}

.register-title {
  font-size: 20px;
  font-weight: 600;
  color: #e0e0e0;
  text-align: center;
  margin: 0;
}

.register-button {
  width: 100%;
  margin-top: 10px;
}

.register-footer {
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #333;
}

.register-text {
  color: #999;
  font-size: 14px;
}

.register-link {
  color: #409eff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
