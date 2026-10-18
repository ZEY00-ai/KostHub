import { createInertiaApp } from '@inertiajs/vue3';
import type { DefineComponent } from 'vue';
import { createPinia } from 'pinia';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import print from 'vue3-print-nb';

import '../css/scss/style.scss';
import { router } from './router';
import vuetify from './plugins/vuetify';
import { fakeBackend } from './utils/helpers/fake-backend';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pages = import.meta.glob<{ default: DefineComponent }>('./pages/**/*.vue');

if (!import.meta.env.VITE_API_URL) {
    fakeBackend();
}

void createInertiaApp({
    resolve: async (name) => {
        const loadPage = pages[`./pages/${name}.vue`];

        if (!loadPage) {
            throw new Error(`Inertia page not found: ${name}`);
        }

        return (await loadPage()).default;
    },
    title: (title) => (title ? `${title} - ${appName}` : appName),
    withApp: (app) => {
        app.use(createPinia());
        app.use(router);
        app.use(PerfectScrollbarPlugin);
        app.use(VueTablerIcons);
        app.use(print);
        app.use(VueApexCharts);
        app.use(vuetify);
        app.directive('focus', {
            mounted: (el: HTMLElement, shouldFocus) => {
                if (shouldFocus.value !== false) {
                    el.focus();
                }
            },
        });
    },
    progress: {
        color: '#4B5563',
    },
});
