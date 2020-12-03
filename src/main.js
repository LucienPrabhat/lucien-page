import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Amplify from 'aws-amplify';
// import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

const app = createApp(App);
app.use(router);
app.mount('#app');
