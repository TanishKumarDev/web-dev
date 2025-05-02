Sure bhai! Here's the **corrected and structured README** for your **QuoteQuest App**:

---

# 💸 **QuoteQuest App**

*Quote Quest: A Journey to Your Highest Truth & Potential Through Self-discovery.*

---

### 🚀 **Project Demo**

![Preview Image](public/preview.png)

---

### 🔗 **Live Preview**

[Click here to view the live site](https://web-development-mastery.vercel.app/)

---

## 📌 **Features**

* ✅ Fetches a random quote from an API
* ✍️ Displays the quote and the author
* 🎨 Dark-themed UI using Tailwind CSS
* 🔄 New quote on button click
* 📲 Fully responsive design

---

## 🛠️ **Tech Stack**

* **React** – Frontend library for building dynamic UI
* **Tailwind CSS** – Utility-first CSS framework for styling
* **Vite** – Fast and efficient build tool

---

## 🧩 **Folder Structure**

```
quotequest/
├── public/
│   └── preview.png
├── src/
│   ├── components/
│   │   └── QuoteCard.jsx
│   ├── App.jsx
│   └── index.css
```

---

## 🚀 **Getting Started**

```bash
# Clone the repository
git clone https://github.com/TanishKumarDev/WebDevelopment_Mastery.git

# Navigate to the project folder
cd Projects/quotequest

# Install dependencies
npm install

# Run the app locally
npm run dev
```

---

## ⚙️ **Plain JavaScript Quote Fetch Logic**

```js
// Fetch a random quote from a public API
fetch("https://api.quotable.io/random")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.content, data.author);
  });
```

---

## 🙌 **Acknowledgements**

Built with ❤️ by **Tanish** using React and Tailwind CSS.

> You can connect with me on [LinkedIn](https://linkedin.com/in/tanish29)
