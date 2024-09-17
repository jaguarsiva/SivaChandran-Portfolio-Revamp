<template>
    <div class="nuxt-app">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const description =
    'Professional Computer Science Engineer building crazy stuff on the web. Proven ability to transform user interface designs to pixel-perfect responsive websites.';

const title =
    "Siva Chandran's Portfolio — Frontend Web Developer, MEVN Stack Developer";

useHead({
    title,
    htmlAttrs: {
        lang: 'en'
    },
    meta: [
        { charset: 'utf-8' },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            hid: 'description',
            name: 'description',
            content: description
        },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://sivacodes.in/' },
        {
            property: 'og:title',
            content: title
        },
        {
            property: 'og:description',
            content: description
        },
        { property: 'og:image', content: 'https://sivacodes.in/logo.png' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://sivacodes.in/' },
        {
            property: 'twitter:title',
            content: title
        },
        {
            property: 'twitter:description',
            content: description
        },
        {
            property: 'twitter:image',
            content: 'https://sivacodes.in/logo.png'
        }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap'
        }
    ]
});
</script>
