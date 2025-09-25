---
title: LobeHub 自托管服务器数据库 - Docker Compose 部署指南
date: 2025-09-25 17:55:00
tags:
  - Docker
  - LobeHub
  - 自托管
  - 数据库
categories:
  - 技术
  - 部署
---

# LobeHub 自托管服务器数据库 - Docker Compose 部署指南

## 简介

[LobeHub](https://github.com/lobehub/lobe-chat) 是一个开源的聊天机器人框架，支持语音合成、多模态和可扩展的函数调用插件系统。本文将详细介绍如何使用 Docker Compose 部署 LobeHub 的服务器数据库。

## 前提条件

在开始部署之前，请确保您的系统已经安装了以下软件：

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 部署步骤

### 1. 创建 Docker Compose 配置文件

首先，创建一个名为 `docker-compose.yml` 的文件，内容如下：

```yaml
version: '3'

services:
  postgres:
    image: postgres:16-alpine
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: lobe-chat
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 2. 启动 PostgreSQL 服务

在包含 `docker-compose.yml` 文件的目录中运行以下命令：

```bash
docker-compose up -d
```

这将在后台启动 PostgreSQL 服务。

### 3. 配置环境变量

为了让 LobeHub 连接到 PostgreSQL 数据库，您需要设置以下环境变量：

```bash
DATABASE_URL=postgres://postgres:postgres@localhost:5432/lobe-chat
```

如果您使用的是 `.env` 文件，可以将上述环境变量添加到该文件中。

### 4. 验证连接

您可以使用以下命令验证 PostgreSQL 服务是否正常运行：

```bash
docker-compose ps
```

如果服务正常运行，您应该能看到 `postgres` 服务的状态为 `Up`。

## 数据库配置详解

### 连接字符串格式

PostgreSQL 连接字符串的格式如下：

```
postgres://[用户名]:[密码]@[主机]:[端口]/[数据库名]
```

例如：

```
postgres://postgres:postgres@localhost:5432/lobe-chat
```

### 环境变量说明

| 环境变量 | 描述 | 示例 |
|---------|------|------|
| `DATABASE_URL` | PostgreSQL 连接字符串 | `postgres://postgres:postgres@localhost:5432/lobe-chat` |

## 高级配置

### 自定义用户名和密码

您可以通过修改 `docker-compose.yml` 文件中的环境变量来自定义 PostgreSQL 的用户名和密码：

```yaml
environment:
  POSTGRES_USER: your_username
  POSTGRES_PASSWORD: your_password
  POSTGRES_DB: lobe-chat
```

记得同时更新 `DATABASE_URL` 环境变量中的用户名和密码。

### 数据持久化

Docker Compose 配置中已经包含了数据持久化的设置，PostgreSQL 的数据将存储在名为 `postgres_data` 的 Docker 卷中。

## 故障排除

### 无法连接到数据库

如果您遇到无法连接到数据库的问题，请检查：

1. PostgreSQL 服务是否正在运行
2. 连接字符串是否正确
3. 防火墙设置是否允许连接到 PostgreSQL 端口

### 数据库权限问题

如果遇到权限问题，可能需要为用户授予适当的权限：

```sql
GRANT ALL PRIVILEGES ON DATABASE "lobe-chat" TO postgres;
```

## 结论

通过本指南，您应该能够成功使用 Docker Compose 部署 LobeHub 的服务器数据库。这种方法简单高效，适合开发和小型生产环境使用。

对于生产环境，建议进一步加强安全措施，如使用更强的密码、限制网络访问等。

## 参考资料

- [LobeHub 官方文档](https://lobehub.com/zh/docs)
- [PostgreSQL 官方文档](https://www.postgresql.org/docs/)
- [Docker Compose 官方文档](https://docs.docker.com/compose/)