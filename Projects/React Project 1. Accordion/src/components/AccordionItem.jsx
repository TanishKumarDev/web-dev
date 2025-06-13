function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <div className="accordion-question" onClick={onToggle}>
        <h3>{question}</h3>
        <span className={isOpen ? 'active' : ''}>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className={`accordion-answer ${isOpen ? 'open' : ''}`}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;