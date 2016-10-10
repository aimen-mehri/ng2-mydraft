describe('Todo', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <todo-list>', function () {
    var home = element(by.css('my-app todo-list'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Home Works!");
  });

});
