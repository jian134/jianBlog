---
title: openclaw安装事故记录
date: 2026-03-06
categories: 技术
tags: openclaw, 安装, 事故
---


## 浅浅安装一下

Health check failed: gateway closed (1006 abnormal closure (no close frame)): no close reason
  Gateway target: ws://127.0.0.1:18789
  Source: local loopback
  Config: C:\Users\jee\.openclaw\openclaw.json
  Bind: loopback
|
o  Health check help --------------------------------+
|                                                    |
|  Docs:                                             |
|  https://docs.openclaw.ai/gateway/health           |
|  https://docs.openclaw.ai/gateway/troubleshooting  |
|                                                    |
+----------------------------------------------------+
|
o  Optional apps ------------------------+
|                                        |
|  Add nodes for extra features:         |
|  - macOS app (system + notifications)  |
|  - iOS app (camera/canvas)             |
|  - Android app (camera/canvas)         |
|                                        |
+----------------------------------------+
|
o  Control UI -------------------------------------------------------------------------------+
|                                                                                            |
|  Web UI: http://127.0.0.1:18789/                                                           |
|  Web UI (with token):                                                                      |
|  http://127.0.0.1:18789/#token=9e24329ce6f246a5aa9b2d49025530ea4e8d78a65d48d092            |
|  Gateway WS: ws://127.0.0.1:18789                                                          |
|  Gateway: not detected (gateway closed (1006 abnormal closure (no close frame)): no close  |
|  reason)                                                                                   |
|  Docs: https://docs.openclaw.ai/web/control-ui                                             |
|                                                                                            |
+--------------------------------------------------------------------------------------------+
|
o  Workspace backup ----------------------------------------+
|                                                           |
|  Back up your agent workspace.                            |
|  Docs: https://docs.openclaw.ai/concepts/agent-workspace  |
|                                                           |
+-----------------------------------------------------------+
|
o  Security ------------------------------------------------------+
|                                                                 |
|  Running agents on your computer is risky — harden your setup:  |
|  https://docs.openclaw.ai/security                              |
|                                                                 |
+-----------------------------------------------------------------+
|
o  Dashboard ready ----------------------------------------------------------------+
|                                                                                  |
|  Dashboard link (with token):                                                    |
|  http://127.0.0.1:18789/#token=9e24329ce6f246a5aa9b2d49025530ea4e8d78a65d48d092  |
|  Opened in your browser. Keep that tab to control OpenClaw.                      |
|                                                                                  |
+----------------------------------------------------------------------------------+
|
o  Web search (optional) -----------------------------------------------------------------+
|                                                                                         |
|  If you want your agent to be able to search the web, you’ll need an API key.           |
|                                                                                         |
|  OpenClaw uses Brave Search for the `web_search` tool. Without a Brave Search API key,  |
|  web search won’t work.                                                                 |
|                                                                                         |
|  Set it up interactively:                                                               |
|  - Run: openclaw configure --section web                                                |
|  - Enable web_search and paste your Brave Search API key                                |
|                                                                                         |
|  Alternative: set BRAVE_API_KEY in the Gateway environment (no config changes).         |
|  Docs: https://docs.openclaw.ai/tools/web                                               |
|                                                                                         |
+-----------------------------------------------------------------------------------------+
|
o  What now -------------------------------------------------------------+
|                                                                        |
|  What now: https://openclaw.ai/showcase ("What People Are Building").  |
|                                                                        |
+------------------------------------------------------------------------+
|
—  Onboarding complete. Dashboard opened; keep that tab to control OpenClaw.