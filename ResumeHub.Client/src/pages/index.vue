<template>
  <div class="feed-container">
    <header class="feed-header">
      <h1 class="feed-title">Лента</h1>
      <div class="header-actions">
        <el-badge :value="3" class="header-badge">
          <el-icon :size="24" class="header-icon"><Bell /></el-icon>
        </el-badge>
        <el-avatar size="default">U</el-avatar>
      </div>
    </header>
    <main class="feed-main">
      <el-card class="create-post-card">
        <el-input
          v-model="newPostContent"
          type="textarea"
          :rows="3"
          placeholder="Что у вас нового?"
          resize="none"
        />
        <div class="post-actions">
          <div class="post-actions-left">
            <el-button :icon="Picture" circle />
            <el-button :icon="ChatDotRound" circle />
          </div>
          <el-button type="primary" @click="createPost">Опубликовать</el-button>
        </div>
      </el-card>
      <div class="posts-list">
        <el-card v-for="post in posts" :key="post.id" class="post-card">
          <div class="post-content">
            <div class="post-header">
              <el-avatar size="large">{{ post.authorInitials }}</el-avatar>
              <div class="post-info">
                <h3 class="post-author">{{ post.author }}</h3>
                <p class="post-time">{{ post.timeAgo }}</p>
              </div>
              <el-button :icon="MoreFilled" circle text />
            </div>
            <p class="post-text">{{ post.content }}</p>
            <div class="post-actions">
              <el-button :icon="Star" text @click="toggleLike(post)">
                {{ post.likes }}
              </el-button>
              <el-button :icon="ChatLineRound" text>
                {{ post.comments }}
              </el-button>
              <el-button :icon="Share" text>Поделиться</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import {
  Bell,
  Picture,
  ChatDotRound,
  MoreFilled,
  Star,
  ChatLineRound,
  Share,
} from "@element-plus/icons-vue";

const newPostContent = ref("");

const posts = ref([
  {
    id: 1,
    author: "Дмитрий Чернов",
    authorInitials: "ДЧ",
    timeAgo: "2 часа назад",
    content:
      "Привет всем! Хочу начать проект, наконец-то решились с ребятами что-то запилить!",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    author: "Клим Кадыков",
    authorInitials: "КК",
    timeAgo: "5 часов назад",
    content: "Vue намного круче React и это факт!",
    likes: 8,
    comments: 5,
  },
  {
    id: 3,
    author: "Иван Ежов",
    authorInitials: "ИЕ",
    timeAgo: "1 день назад",
    content: "Куда же меня занесло...",
    likes: 24,
    comments: 12,
  },
]);

const createPost = () => {
  if (!newPostContent.value.trim()) return;

  const newPost = {
    id: Date.now(),
    author: "Вы",
    authorInitials: "В",
    timeAgo: "Только что",
    content: newPostContent.value,
    likes: 0,
    comments: 0,
  };

  posts.value.unshift(newPost);
  newPostContent.value = "";
  ElMessage.success("Пост опубликован");
};

const toggleLike = (post: any) => {
  post.likes++;
  ElMessage.success("Лайк добавлен");
};
</script>

<style scoped>
.feed-container {
  min-height: 100vh;
  background-color: #121212;
}

.feed-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #1e1e1e;
  border-bottom: 1px solid #333;
}

.feed-title {
  font-size: 24px;
  font-weight: 600;
  color: #e0e0e0;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-badge {
  cursor: pointer;
}

.header-icon {
  color: #999;
  transition: color 0.2s;
}

.header-icon:hover {
  color: #409eff;
}

.feed-main {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.create-post-card {
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  background-color: #1e1e1e;
  border: 1px solid #333;
  margin-bottom: 20px;
}

.post-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #333;
}

.post-actions-left {
  display: flex;
  gap: 8px;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.post-card {
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  background-color: #1e1e1e;
  border: 1px solid #333;
}

.post-content {
  padding: 16px 0;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.post-info {
  flex: 1;
}

.post-author {
  font-size: 16px;
  font-weight: 600;
  color: #e0e0e0;
  margin: 0 0 4px 0;
}

.post-time {
  font-size: 13px;
  color: #999;
  margin: 0;
}

.post-text {
  font-size: 15px;
  color: #e0e0e0;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.post-actions {
  display: flex;
  gap: 8px;
}

.post-actions .el-button {
  color: #999;
  font-size: 14px;
}

.post-actions .el-button:hover {
  color: #409eff;
}
</style>
