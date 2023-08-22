describe('ToDo List Test', () => {
  it('should add, mark as done, and delete items from the ToDo list', () => {
    // переход на сайт
    cy.visit('https://forhemer.github.io/React-Todo-List/');

    // добавление элементов
    cy.get('input[type="text"]').type('Task 1{enter}');
    cy.get('input[type="text"]').type('Task 2{enter}');
    cy.get('input[type="text"]').type('Task 3{enter}');

    // проверка
    cy.get('.todo-list li').should('have.length', 3);

    // пометка одного из элементов
    cy.get('.todo-list li')
      .eq(1) // выбор второго элемента
      .find('.toggle')
      .check();

    // проверка
    cy.get('.todo-list li')
      .eq(1)
      .should('have.class', 'completed');

    // удаление элемента
    cy.get('.todo-list li')
      .eq(0)
      .find('.destroy')
      .click({ force: true }); // проверка

    // проверка
    cy.get('.todo-list li').should('have.length', 2);
  });
});
