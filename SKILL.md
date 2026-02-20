---
name: degenwatch
description: Skill module for Web3 Degen Dashboard. Provides real-time token analytics, wallet tracking, and decentralized data insights using public APIs without database dependencies.
---

# ⚡ DegenWatch Skill

## 📖 Description
DegenWatch is a lightweight skill module designed to power a **Web3 Degen Dashboard**.  
It enables real-time access to token analytics, wallet tracking, and trending market data using external APIs.

This skill is optimized for:
- Fast deployment (no database)
- Termux environments
- Lightweight Web3 experimentation

---

## 🎯 Purpose
The purpose of this skill is to:
- Provide quick access to on-chain data
- Help users analyze tokens before interacting
- Enable real-time monitoring of wallets and trends
- Simulate a professional degen trading toolkit

---

## ⚙️ Core Capabilities

### 🔍 Token Analysis
- Fetch token data from DEX aggregators
- Display:
  - Price (USD)
  - Liquidity
  - Volume
  - Pair info

---

### 📊 Price Visualization
- Generate live charts using Chart.js
- Lightweight rendering without historical storage
- Simulated real-time updates based on current price

---

### 🔥 Trending Discovery
- Fetch trending tokens from live search endpoints
- Display top active pairs for quick discovery

---

### 💰 Wallet Tracking
- Retrieve wallet balance using blockchain explorers
- Supports Ethereum-based wallets
- Can be extended to multi-chain tracking

---

### 🦊 Wallet Integration
- Connect browser wallets (e.g., MetaMask)
- Read user address
- Enable interaction-ready UI

---

## 🧱 Architecture

**Frontend**
- Static UI (HTML, CSS, JS)
- Runs in browser
- No build tools required

**Backend**
- Node.js + Express
- Serves static files
- No database layer

**Data Layer**
- External APIs only:
  - Dexscreener (market data)
  - Etherscan (wallet data)

---

## 🔌 Entry Flow

1. User opens dashboard
2. Connects wallet (optional)
3. Inputs token or wallet address
4. System fetches data via APIs
5. Results rendered instantly in UI

---

## 🧩 Usage Modes

### 1. Read-Only Mode
- Token scanning
- Chart viewing
- Trending discovery

### 2. Interactive Mode
- Wallet connection
- Address-based tracking

---

## 🔐 Constraints

- No persistent storage
- Dependent on external API availability
- Limited historical data (real-time focused)

---

## ⚠️ Risk Notes

- Data accuracy depends on API providers
- Not suitable for financial decision automation
- No transaction execution or signing

---

## 🧠 Design Principles

- Simplicity over complexity
- No database dependency
- Fast load & execution
- Clean UI for rapid analysis

---

## 🔮 Future Extensions

- Multi-chain support (BSC, Solana, Base)
- Whale tracking system
- Smart contract risk analyzer
- Real candlestick chart integration
- Alert & notification engine

---

## 🏁 Conclusion

DegenWatch Skill provides a **minimal yet powerful foundation** for building Web3 analytics dashboards.  
It is ideal for learning, prototyping, and lightweight degen tooling without infrastructure overhead.
