import './bootstrap.js';
import { startStimulusApp } from '@symfony/stimulus-bridge';
const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!',
    true,
    /\.(j|t)sx?$/
));
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import 'chart.js';
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
