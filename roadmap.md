Department of Agriculture Form Roadmap
==============

This document describes the high level features the project has decided to prioritize in the near to medium term future.
The tech stack will include:
  - React
  - Redux
  - Material-UI
  - Apollo-Client
  - Apollo-Server
    - GraphQL
  - Meteor
  - Webpack
  - MongoDB
  - Datastax

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

It should be able to send a JSON object to a local mongodb database via GraphQL mutations.

## Confirmation Page

Shows a beautiful layout of a thank you message. Then redirects to the welcome page, after a set amount of time.
