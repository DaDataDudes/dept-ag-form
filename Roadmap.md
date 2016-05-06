Department of Agriculture Form Roadmap
==============

This document describes the high level features the project has decided to prioritize in the near to medium term future.
The tech stack will include:
  - React
  - Mocha/Chai/Enzyme Testing
  - Redux
  - Material-UI
  - Apollo-Client
  - Apollo-Server
    - GraphQL
    - Relay
  - Meteor
  - Webpack
  - MongoDB

## Unit Testing!

Test Driven Development, using Mocha/Chai/Enzyme to test React components.
  ** should look up best practices for testing, so we are not testing needlessly?
  ** Look at awesome-react repo.

## Welcome Page

Welcomes users to a beautiful landing page, with a succint description of the form.

## Form

Takes the existing Department of Agriculture form, and puts it into a beautiful format.

### This is an example of how we want the component/container structure to look like.
```
  <Form />
    <Header /> --> Text
    <Disclaimer /> --> Text
    <DeclarePlants /> --> Checkbox
    <DeclareAnimals /> --> Checkbox
    <ContactInfo /> --> Input
    <TravelInfo /> --> Dropdown
    <Signature /> --> Button
  </Form>
```

It should take advantage of Redux actions to manage state within the form.

## Confirmation Page

Shows a beautiful layout of a thank you message. Then redirects to the welcome page, after a set amount of time.
