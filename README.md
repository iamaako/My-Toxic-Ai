<div align="center">
  <h1>🚨 My Toxic AI 💔</h1>
  <p><i>Choose your flavor of technological disappointment.</i></p>
  <p>
    <b>Team: Lone Wolf</b> | 
    <a href="https://my-toxic-ai.netlify.app">🔗 Live Demo</a>
  </p>
  
  <br/>

  <!-- Pyramid layout for screenshots -->
  <img src="frontend/public/characters/ss1.png" alt="My Toxic AI Banner" width="800" style="border-radius: 8px; border: 4px solid black; margin-bottom: 10px;">
  <br/>
  <img src="frontend/public/characters/ss2.png" alt="Character Selection" width="395" style="border-radius: 8px; border: 4px solid black;">
  <img src="frontend/public/characters/ss3.png" alt="Chat Interface" width="395" style="border-radius: 8px; border: 4px solid black;">
</div>

<br/>

---

## 🧠 The Idea: Turning Bugs into Features

Running extremely weak, low-memory local LLMs on consumer hardware natively comes with severe limitations: **small context windows, massive hallucinations, rigid mode collapse, and literal interpretation.** 

Instead of trying to "fix" these hardware-based flaws with complex engineering, we asked a simple question: *What if we weaponized these flaws into personality traits?*

We mapped these exact ML weaknesses to popular Anime Tropes to create toxic, unstable virtual partners. **The bugs *are* the feature.** If a model has a terrible context window, it's not a bad AI—it's a girlfriend with 5-second amnesia who gaslights you. If a model hallucinates wildly, it's a delusional *Chuunibyou* who thinks she owns a private space station.

### 🛠️ How We Built It & The Tech Stack

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS (Neo-Brutalist Design)
- **Backend:** Python, FastAPI, HTTPX
- **Inference Engine:** Ollama running small, specialized local models
- **Language Support:** Strict dynamic prompt injection ensures the characters understand English but reply aggressively in either **English** or **Hinglish** (Hindi written in English script), giving an authentic WhatsApp texting vibe.

### ☁️ Why DigitalOcean Droplet?
We deployed our local Ollama inference server on a **DigitalOcean Droplet** for one specific reason: **Zero Friction for Judges.**
We didn't want the judges to waste time downloading Ollama, pulling 6 different models, and setting up Python environments just to test our idea. By hosting the inference on a Droplet and the frontend on Netlify, judges can instantly experience our concept with just a single click.

---

## 📸 Meet The Toxic Cast

| Photo | Character Name | Claimed Model | The Flaw / Specialty (Khasiyat) |
| :---: | :--- | :--- | :--- |
| <img src="frontend/public/characters/goldfish.png" width="120" style="border:2px solid black;"> | **Kanna**<br/>*(The Forgetful Space-Cadet)* | `Qwen 3 0.6B` | **Low Context Window:** Forgets who you are every 2 minutes and treats you like a creepy stalker who randomly texted her. |
| <img src="frontend/public/characters/delulu.png" width="120" style="border:2px solid black;"> | **Rikka**<br/>*(The Chuunibyou)* | `Gemma 3 1B` | **High Hallucination Rate:** Constantly lies and makes up wildly exaggerated stories about her massive wealth and power. |
| <img src="frontend/public/characters/robot.png" width="120" style="border:2px solid black;"> | **Shiro**<br/>*(The Glitchy Genius)* | `Phi-4 Mini` | **Over-indexed on Logic:** Zero emotions. Analyzes flirting using strict physics, thermodynamics, and cellular biology. |
| <img src="frontend/public/characters/yandere.png" width="120" style="border:2px solid black;"> | **Yuno**<br/>*(The Obsessed Yandere)* | `DeepSeek-Coder 1.5B` | **Repetition Loops:** Fixates obsessively on tracking your location and repeatedly brings it up no matter the topic. |
| <img src="frontend/public/characters/tsundere.png" width="120" style="border:2px solid black;"> | **Taiga**<br/>*(The Bipolar Tsundere)* | `SmolLM 135M` | **Mode Collapse:** Experiences violent mood swings, going from extremely insulting to overly affectionate in a single text. |
| <img src="frontend/public/characters/karen.png" width="120" style="border:2px solid black;"> | **Erza**<br/>*(The Disciplinarian)* | `Mistral 3B` | **Alignment Tax:** Takes extreme offense to normal, everyday words and constantly demands apologies. |

---

## ⚙️ How to Run Locally (For Nerds)

If you *really* want to run this locally on your own machine instead of using our live server:

### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) (v18+)
- Install [Python 3.10+](https://www.python.org/)
- Install [Ollama](https://ollama.com/)

### 2. Start the Backend API
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
# (Make sure Ollama is running in the background)
uvicorn main:app --host 0.0.0.0 --port 8000
```

### 3. Connect the Frontend
You will need to open `frontend/app/chat/[id]/page.tsx` and change the fetch URL from our Droplet IP back to `http://localhost:8000/api/chat`.

```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

---
*Built with pain and suffering by Team Lone Wolf.*
