
![Deskripsi Gambar](images/gambar.png)



TRAC ADDRESS : trac1mwmydhujvp784krx0lqzy0vlxkukhmewzvtkg448nukt6c254q5s7nhtmu
---
name: degenwatch-pro
description: Advanced Web3 Degen Dashboard for token analysis, wallet tracking, and real-time insights. Built with Node.js (Express) and vanilla frontend. No database required.
---

# ⚡ DegenWatch PRO

## 🚀 Description
DegenWatch PRO is a lightweight Web3 dashboard designed for **degen traders** and crypto enthusiasts.  
It provides real-time token insights, wallet tracking, and analytics without relying on a database.

This project is optimized for **Termux environments** and uses live APIs to fetch blockchain data.

---

## ✨ Features

- 🦊 **Wallet Connection**
  - Connect via browser wallets like MetaMask
- 🔍 **Token Scanner**
  - Analyze token data (price, liquidity, volume)
- 📊 **Live Chart**
  - Real-time token price visualization
- 🔥 **Trending Tokens**
  - Discover trending tokens instantly
- 💰 **Wallet Tracker**
  - Check wallet balances and activity
- ⚡ **No Database**
  - Fully API-driven for fast deployment

---

## 🧱 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js + Express
- **APIs:**
  - Dexscreener
  - Etherscan
- **Charting:**
  - Chart.js

---

## 📁 Project Structure

degenwatch/ ├── server.js └── public/ ├── index.html ├── style.css └── app.js

---

## ⚙️ Installation (Termux)

```bash
pkg update && pkg upgrade
pkg install nodejs git

git clone <your-repo-link>
cd degenwatch

npm init -y
npm install express

▶️ Run Project

node server.js


🔧 Configuration


Etherscan API Key


Replace this line in app.js

apikey=YourApiKey


With your API key from: https://etherscan.io/apis�


📊 API Usage

Dexscreener

Used for:
•Token data
•Trending tokens
•Price info

Etherscan

Used for:
•Wallet balance tracking


⚠️ Disclaimer

This tool is for educational and research purposes only.
Always do your own research (DYOR) before interacting with any token.


