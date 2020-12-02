import { createApp } from 'vue';
import App from './App.vue'

import Amplify from 'aws-amplify';
// import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

createApp(App).mount('#app');
