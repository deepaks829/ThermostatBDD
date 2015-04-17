describe('Thermostat',function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('displays default temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('increases temperature with up button', function(){
    $("input#up").click();
    expect('#temperature').toContainText('21');
  });

  it('decreases temperature with down button', function(){
    $("input#down").click();
    expect('#temperature').toContainText('19');
  });

  it('temperature can go up and down consistently', function(){
    $("input#down").click();
    expect('#temperature').toContainText('19');
    $("input#up").click();
    expect('#temperature').toContainText('20');
  });

});

