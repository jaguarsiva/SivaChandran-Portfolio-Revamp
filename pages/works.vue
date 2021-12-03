<template>
    <main>
        <Hero />
        <What />
        <Where />
    </main>
</template>

<script>
import Hero from '@/components/Works/Hero.vue';
import What from '@/components/Works/What.vue';
import Where from '@/components/Works/Where.vue';

export default {
    components: {
        Hero,
        What,
        Where
    },
    transition(to, from) {
        return from ? 'slide-left' : '';
    }
};
</script>
