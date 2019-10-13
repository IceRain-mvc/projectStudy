import Vue from "vue"

import {
  Button,
  Select,
  Option,
  Notification,
  MessageBox,
  Table
} from "element-ui";

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
// Vue.use(MessageBox);
// Vue.use(Notification);

// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$notify = Notification;

