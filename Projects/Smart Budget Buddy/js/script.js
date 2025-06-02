
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let budget = Number(localStorage.getItem('budget')) || 1000;

document.getElementById('budgetInput').value = budget;

const tips = [
  "Skip the $5 coffee, save for a rainy day!",
  "Cook at home, cut food costs!",
  "Track bills, avoid late fees!",
  "Plan fun on a budget, still enjoy!",
  "Small savings today, big wins tomorrow!"
];

function showTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  const tipDisplay = document.getElementById('tipDisplay');
  tipDisplay.textContent = randomTip;
  setTimeout(() => { tipDisplay.textContent = ''; }, 4000);
}

showTip();
const tipInterval = setInterval(showTip, 15000);

function saveData() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
  localStorage.setItem('budget', budget);
}

function updateStats() {
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = budget - totalSpent;
  const spentPercent = budget ? (totalSpent / budget * 100).toFixed(1) : 0;

  document.getElementById('totalSpent').textContent = `$${totalSpent.toFixed(2)}`;
  document.getElementById('remaining').textContent = `$${remaining.toFixed(2)}`;
  const progress = document.getElementById('progress');
  progress.style.width = `${Math.min(spentPercent, 100)}%`;
  if (spentPercent > 80) {
    progress.parentElement.classList.add('red');
  } else {
    progress.parentElement.classList.remove('red');
  }
  document.getElementById('percent').textContent = `${spentPercent}%`;

  const byCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});
  document.getElementById('foodTotal').textContent = (byCategory.food || 0).toFixed(2);
  document.getElementById('billsTotal').textContent = (byCategory.bills || 0).toFixed(2);
  document.getElementById('funTotal').textContent = (byCategory.fun || 0).toFixed(2);
  document.getElementById('otherTotal').textContent = (byCategory.other || 0).toFixed(2);
}

function renderExpenses() {
  const expenseList = document.getElementById('expenseList');
  expenseList.innerHTML = '';
  if (expenses.length === 0) {
    expenseList.innerHTML = '<p class="no-expenses">No expenses yet! Add one above.</p>';
    return;
  }

  expenses.forEach(exp => {
    const div = document.createElement('div');
    div.className = `expense-item category-${exp.category}`;
    div.innerHTML = `
      <div class="expense-details">
        <span>$${exp.amount.toFixed(2)}</span>
        <span>${exp.description}</span>
        <span>${exp.category} • ${new Date(exp.date).toLocaleDateString()}</span>
      </div>
      <div class="expense-actions">
        <button class="edit" onclick="editExpense(${exp.id})">Edit</button>
        <button class="delete" onclick="deleteExpense(${exp.id})">Delete</button>
      </div>
    `;
    expenseList.appendChild(div);
  });
}

function addExpense() {
  const amount = Number(document.getElementById('amountInput').value);
  const description = document.getElementById('descInput').value;
  const category = document.getElementById('categoryInput').value;

  if (!amount || amount <= 0 || !description.trim()) return;

  const newExpense = {
    id: Date.now(),
    amount,
    description,
    category,
    date: new Date().toISOString()
  };
  expenses.push(newExpense);
  document.getElementById('amountInput').value = '';
  document.getElementById('descInput').value = '';
  document.getElementById('categoryInput').value = 'other';

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  if (totalSpent > budget) {
    confetti({ particleCount: 50, spread: 60, colors: ['#ef4444'], origin: { y: 0.6 } });
    document.getElementById('tipDisplay').textContent = 'Budget crossed! Tighten up, buddy!';
    setTimeout(() => showTip(), 4000);
  }

  saveData();
  updateStats();
  renderExpenses();
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  saveData();
  updateStats();
  renderExpenses();
}

function editExpense(id) {
  const expense = expenses.find(exp => exp.id === id);
  if (!expense) return;

  const expenseItem = Array.from(document.querySelectorAll('.expense-item')).find(
    item => item.querySelector('.expense-actions .edit').onclick.toString().includes(id)
  );
  expenseItem.innerHTML = `
    <div class="expense-details">
      <input type="number" value="${expense.amount}" id="editAmount-${id}" min="0" step="0.01">
      <input type="text" value="${expense.description}" id="editDesc-${id}">
      <span>${expense.category} • ${new Date(expense.date).toLocaleDateString()}</span>
    </div>
    <div class="expense-actions">
      <button class="edit" onclick="saveEdit(${id})">Save</button>
      <button class="delete" onclick="deleteExpense(${id})">Delete</button>
    </div>
  `;
}

function saveEdit(id) {
  const newAmount = Number(document.getElementById(`editAmount-${id}`).value);
  const newDesc = document.getElementById(`editDesc-${id}`).value;

  if (!newAmount || newAmount <= 0 || !newDesc.trim()) return;

  expenses = expenses.map(exp =>
    exp.id === id ? { ...exp, amount: newAmount, description: newDesc } : exp
  );
  saveData();
  updateStats();
  renderExpenses();
}

document.getElementById('budgetInput').addEventListener('change', (e) => {
  budget = Number(e.target.value) || 0;
  saveData();
  updateStats();
});

updateStats();
renderExpenses();

// filter expenses by category

document.getElementById('filterSelect').addEventListener('change', (e) => {
  const selectedCategory = e.target.value;
  const filteredExpenses = expenses.filter(exp => exp.category === selectedCategory);
  renderExpenses(filteredExpenses);
});

