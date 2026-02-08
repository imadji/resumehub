<template>
  <header class="header">
    <h1 class="title">Лента</h1>
    <div class="header__actions">
      <el-badge :value="3" class="header__badge">
        <el-icon :size="24" class="header__icon"><Bell /></el-icon>
      </el-badge>
      <el-avatar size="default">U</el-avatar>
    </div>
  </header>
</template>
<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #1e1e1e;
  border-bottom: 1px solid #333;
  z-index: 999;
  position: sticky;
  top: 0px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #e0e0e0;
  margin: 0;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header__badge {
  cursor: pointer;
}

.header__icon {
  color: #999;
  transition: color 0.2s;
}

.header__icon:hover {
  color: #409eff;
}
</style>
