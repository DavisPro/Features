Feature: Searching for DietTop on GitHub

  I want to find DietTop repository on GitHub

  Scenario: Searching for DietTop on GitHub
    Given I open the GitHub page
    When I am typing my search request "DietTop" on GitHub
    Then I am pressing enter key on GitHub
    Then I should see that the first GitHub's result is DevExpress/DietTop

