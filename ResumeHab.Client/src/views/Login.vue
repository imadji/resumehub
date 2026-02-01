<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <h2 class="login-title">Вход в систему</h2>
      </template>
      <el-form @submit.prevent="handleLogin">
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
        <el-button
          type="primary"
          native-type="submit"
          size="large"
          class="login-button"
        >
          Войти
        </el-button>
      </el-form>
      <div class="login-footer">
        <span class="login-text">Нет аккаунта? </span>
        <router-link to="/register" class="login-link"
          >Зарегистрироваться</router-link
        >
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Login attempt:", {
    email: email.value,
    password: password.value
  });
  ElMessage.success("Вход выполнен успешно");
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  background-color: #1e1e1e;
  border: 1px solid #333;
}

.login-title {
  font-size: 20px;
  font-weight: 600;
  color: #e0e0e0;
  text-align: center;
  margin: 0;
}

.login-button {
  width: 100%;
  margin-top: 10px;
}

.login-footer {
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #333;
}

.login-text {
  color: #999;
  font-size: 14px;
}

.login-link {
  color: #409eff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
