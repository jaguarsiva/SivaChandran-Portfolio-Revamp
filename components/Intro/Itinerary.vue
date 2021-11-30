<template>
    <section class="itinerary__section light__section">
        <h2
            ref="sectionHeading"
            class="section__heading"
            :class="{ heading__visible: isHeadingVisible }"
        >
            Life itinerary
        </h2>
        <div
            class="roadmap__outer flex-col"
            ref="roadmap"
            :class="{ is__visible: isMapVisible }"
        >
            <div
                class="roadmap__row relative flex align-center"
                v-for="(map, index) in roadmap"
                :key="index"
            >
                <div class="roadmap__point"></div>
                <span class="roadmap__time biko__black"> {{ map.time }} </span>
                <span class="roadmap__title biko__regular">
                    {{ map.title }}
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import sectionHeading from '@/mixins/sectionHeading.js';
export default {
    mixins: [sectionHeading],
    data() {
        return {
            roadmap: [
                { time: '1999', title: 'Born' },
                { time: '2016', title: 'Graduated from High School' },
                {
                    time: '2020',
                    title: 'Completed Bachelor’s in Computer Science'
                },
                {
                    time: 'Jan 2020 - Mar 2021',
                    title: 'Intern at Zoho Corporation'
                },
                {
                    time: 'Mar 2021 - Jul 2021',
                    title: 'Web Developer at Zoho Corporation'
                },
                { time: 'Aug 2021', title: 'Freelance Developer' }
            ],
            isMapVisible: false
        };
    },
    mounted() {
        new IntersectionObserver(entries => {
            this.isMapVisible = entries[0].isIntersecting;
        }, {}).observe(this.$refs.roadmap);
    }
};
</script>

<style lang="scss" scoped>

.roadmap__outer {
    width: fit-content;
    margin: 100px auto 0;
    gap: 60px;
}

.roadmap__row {
    .is__visible &:first-child {
        --transition-delay: 1s;
    }

    .is__visible &:nth-child(2) {
        --transition-delay: 2s;
    }

    .is__visible &:nth-child(3) {
        --transition-delay: 3s;
    }

    .is__visible &:nth-child(4) {
        --transition-delay: 4s;
    }

    .is__visible &:nth-child(5) {
        --transition-delay: 5s;
    }

    .is__visible &:nth-child(6) {
        --transition-delay: 6s;
    }

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 10.5px;
        height: 0;
        border-left: 4px dashed $black;
    }

    .is__visible &:not(:last-child)::after {
        height: 60px;
        transition: height 250ms ease-out calc(var(--transition-delay) + 0.75s);
    }
}

.roadmap__point {
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2.5px solid $black;
    opacity: 0;

    .is__visible & {
        opacity: 1;
        transition: opacity 250ms linear var(--transition-delay, 0s);
    }

    &::before {
        content: '';
        height: 80%;
        width: 80%;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: $tomato;
    }
}

.roadmap__time {
    display: block;
    width: 200px;
    font-size: rem(20);
    line-height: 1;
    color: $tomato;
    margin: 0 30px 0 20px;
    opacity: 0;

    .is__visible & {
        opacity: 1;
        transition: opacity 250ms linear
            calc(var(--transition-delay, 0s) + 0.25s);
    }
}

.roadmap__title {
    font-size: rem(24);
    line-height: 1;
    opacity: 0;

    .is__visible & {
        opacity: 1;
        transition: opacity 250ms linear
            calc(var(--transition-delay, 0s) + 0.5s);
    }
}
</style>
