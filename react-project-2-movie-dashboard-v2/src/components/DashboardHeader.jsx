const DashboardHeader = ({ theme, toggleTheme }) => (
  <header className="flex justify-between items-center p-6 bg-blue-500 text-white rounded-t-xl">
    <h1 className="text-2xl font-bold">Movie Dashboard</h1>
    <button
      onClick={toggleTheme}
      className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  </header>
);

export default DashboardHeader;
