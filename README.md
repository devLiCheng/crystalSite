# crystalSite

Full-stack project with a Next.js frontend and Go backend.

## 目录结构

- `frontend/` - Next.js 14 应用
- `backend/` - Go 后端服务
- `backend/db/schema.sql` - MySQL 数据库表结构

## 数据库配置

- 主机: `localhost`
- 端口: `3306`
- 用户名: `root`
- 密码: `root`
- 数据库名: `crystal`

## 运行方式

### 前端
```bash
cd frontend
npm install
npm run dev
```

### 后端
```bash
cd backend
go mod tidy
go run main.go
```

### 创建数据库
```bash
mysql -u root -proot < backend/db/schema.sql
```
