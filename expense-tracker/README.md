# 💸 Expense Tracker App

Track your expenses easily with a modern UI built using **React** and **Tailwind CSS**.

---

### 🚀 Project Demo  
![Preview Image](public/preview.png)

---

### 🔗 Live Preview  
[Click here to view the live site](https://expense-tracker-silk-eta.vercel.app/)

---

## 📌 Features

- ✅ Add and delete expenses
- 💰 Track expense amount and category
- 🎨 Dark-themed UI using Tailwind CSS
- 📊 Total expense summary

---

## 🛠️ Tech Stack

- **React** – Frontend library
- **Tailwind CSS** – Styling framework
- **Vite** – Fast build tool

---

## 🧩 Folder Structure

```
public/
  └── preview.png
src/
  ├── components/
  │   └── ExpenseList.jsx
  ├── App.jsx
  └── index.css
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/TanishKumarDev/React_Mastery/tree/3ce240aa25e713af686c3477093b00ead9918fe0/expense-tracker

# Navigate into the folder
cd expense-tracker

# Install dependencies
npm install

# Start the app
npm run dev
```

---

## 🙌 Acknowledgements

Built with ❤️ using React & Tailwind CSS By Tanish.


```javascript
// Plain JS Logic: Expense Add Logic

let expenses = [];

function addExpense(title, amount) {
  expenses.push({ title, amount });
  console.log(expenses);
}

addExpense("Tea", 10);
addExpense("Coffee", 20);
