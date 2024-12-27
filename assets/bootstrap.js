import { startStimulusApp } from '@symfony/stimulus-bundle';
import '@symfony/stimulus-bridge/lazy-controller-loader';
const app = startStimulusApp();
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
startStimulusApp(require.context('./controllers', true, /\.(js|ts)$/));