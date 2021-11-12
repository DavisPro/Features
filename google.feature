Feature: Searching for DietTop by Google

  I want to find DietTop repository by Google search

  Scenario: Searching for DietTop by Google
    Given I am open Google's search page
    When I am typing my search request "github DietTop" on Google
    Then I press the "enter" key on Google
    Then I should see that the first Google's result is "GitHub - DevExpress/DietTop:"


  Scenario: Failing scenario
    Given I am open Google's search page
    When I am typing my search request "github DietTop" on Google
    Then I press the "enter" key on Google
    Then I should see that the first Google's result is "kittens"