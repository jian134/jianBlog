---
title: claude忽然失效
date: 2026-05-29
categories: 技术
tags: [cli, claude, cc-switch, 安装, 事故]
---

## 事故开始

在 2026-05-29，`claude-code@2.1.156` 自动更新后，导致所有 `cc-switch` 相关工具不可用。整整一上午都在排查和尝试修复。

## 自己尝试的办法

先后尝试安装旧版本：

```bash
npm view @anthropic-ai/claude-code versions --json

# 1
npm install -g @anthropic-ai/claude-code@2.1.155
# 失败：没有该版本

# 2
npm install -g @anthropic-ai/claude-code@2.1.154
# 依然不成功

# 3
npm install -g @anthropic-ai/claude-code@2.1.150
# 成功
```

写了一会代码，忽然想到去 L 站（论坛）发帖寻求帮助，没想到真的有人遇到并提供了解法。

## 一劳永逸的解决方法（来自哈雷）

关键点：`messages` 数组中不应包含 `system` role。通过分析发现，这是由新 beta 请求头 `mid_conversation_system` 引入的行为变化，三方厂商的适配尚未跟上。

下面以 DeepSeek 为例给出可用的路由配置：

```json
{
  "env": {
    "CLAUDE_CODE_USE_FOUNDRY": "1",
    "ANTHROPIC_FOUNDRY_BASE_URL": "https://api.deepseek.com/anthropic",
    "ANTHROPIC_FOUNDRY_API_KEY": "sk-",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES": "thinking,adaptive_thinking,temperature,effort,max_effort",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-flash[1m]",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES": "thinking,adaptive_thinking,temperature,effort,max_effort",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash[1m]",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES": "thinking,adaptive_thinking,temperature,effort,max_effort"
  },
  "model": "opus",
  "effortLevel": "max"
}
```

启动示例（使用指定设置文件）：

```bash
claude --settings ~/.claude/settings.deepseek.json
```

说明：关于模型 ID 中的 `[1m]` 标注——该标注只能出现在一处配置中。最初有些实现把 `[1m]` 写在模型 ID（例如 `opus[1m]`）上，但由于 `*_SUPPORTED_CAPABILITIES` 需要匹配模型 ID，`opus[1m]` 无法匹配到预期值，因此改为在路由（或 env）中指定带 `[1m]` 的模型映射。

我写这个是为了方便使用 Claude Desktop 的同学，省得去改 bun 打包的客户端或捣鼓各种本地依赖。

## 我自己的解决

我使用了雷总提供的 Mimo 路由（免费试用），在 ccswitch 的默认模型后添加了 `[1m]`，实测可用，问题解决。

--- 
