import { registerGqlTag } from 'apollo-client/gql';
import injectTapEventPlugin from 'react-tap-event-plugin';

Meteor.startup(() => {
  registerGqlTag();
  injectTapEventPlugin();
});