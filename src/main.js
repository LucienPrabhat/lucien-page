import { createApp } from 'vue'
import App from './App.vue'

import Amplify from 'aws-amplify';

// import '@aws-amplify/ui-vue';
import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader';
applyPolyfills().then(() => {
  defineCustomElements(window);
});

import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

const app = createApp(App);
app.config.isCustomElement = (tag) => tag.startsWith('amplify-');
app.mount('#app');