import React from "react";
import Counter from "./components/counter-app/Counter";
import Todo from "./components/todo-app/Todo";
import Meal from "./components/meal-api-fetching/Meal";
import Calculator from "./components/calculator-app/Calculator";
import ColorToggler from "./components/color-toggler-app/ColorToggler";
import SearchBar from "./components/search-bar/SearchBar";
import TestimonialsList from "./components/testimonials-app/TestimonialsList";
import Accordion from "./components/accordion-component/Accordion";
import FormValidation from "./components/form-validation/FormValidation";
import ProductList from "./components/e-commerce/ProductList";

const App = () => {
  return (
    <div>

        <Counter />

        <Todo />

        <Meal />

        <Calculator />

        <ColorToggler />

        <SearchBar />

        <TestimonialsList />

        <Accordion />
    
        <FormValidation />

        <ProductList />
    </div>
  );
};

export default App;
