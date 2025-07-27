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
            ref="roadmap"
            class="roadmap__outer flex-col"
            :class="{ is__visible: isMapVisible }"
        >
            <div
                v-for="(map, index) in roadmap"
                :key="index"
                class="roadmap__row relative flex align-center"
            >
                <div class="roadmap__point"></div>
                <span class="roadmap__time biko__black">
                    <span class="roadmap__time__text">{{ map.time }}</span>
                </span>
                <span class="roadmap__title biko__regular">
                    {{ map.title }}
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import heading from '~/mixins/heading';
export default {
    mixins: [heading],
    data() {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

        const now = new Date();
        const currentTimestamp =
            months[now.getMonth()] + ' ' + now.getFullYear();
        return {
            roadmap: [
                {
                    time: 'Summer 2020',
                    title: 'Completed Bachelor’s in Computer Science'
                },
                {
                    time: 'Jun 2020 - Feb 2021',
                    title: 'Web Developer Intern at Zoho Corporation'
                },
                {
                    time: 'Mar 2021 - Jul 2021',
                    title: 'Web Developer at Zoho Corporation'
                },
                {
                    time: `Jan 2022 - Mar 2023`,
                    title: 'Software Engineer I at Credit Saison India'
                },
                {
                    time: `Apr 2023 - Mar 2024`,
                    title: 'Software Engineer II at Credit Saison India'
                },
                {
                    time: `Apr 2024 - Mar 2025`,
                    title: 'Senior Software Engineer at Credit Saison India'
                },
                {
                    time: `Apr 2025 - Present`,
                    title: 'Lead Software Engineer at Credit Saison India'
                }
            ],
            isMapVisible: false
        };
    },
    mounted() {
        new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                this.isMapVisible = true;
                observer.unobserve(entries[0].target);
            }
        }, {}).observe(this.$refs.roadmap);
    }
};
</script>

<style lang="scss" scoped>
.roadmap__outer {
    width: fit-content;
    max-width: 90%;
    margin: 100px auto 0;
}

.roadmap__row {
    position: relative;

    &:not(:last-child) {
        padding-bottom: 60px;
    }

    @for $i from 1 through 15 {
        .is__visible &:nth-child(#{$i}) {
            --transition-delay: #{500ms * $i};
        }
    }

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 25px;
        left: 10.5px;
        height: 0;
        border-left: 4px dashed $black;
    }

    .is__visible &:not(:last-child)::after {
        height: calc(100% - 25px);
        transition: height 250ms ease-out calc(var(--transition-delay) + 0.25s);
    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 25px 1fr;
        column-gap: 20px;
        row-gap: 10px;
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
    display: inline-block;
    width: 190px;
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

    .roadmap__row:last-child & {
        position: relative;

        .roadmap__time__text {
            position: relative;

            &::after {
                content: '*';
                position: absolute;
                top: -8px;
                right: 0;
                transform: translateX(100%);
                font-size: rem(50);
            }
        }
    }

    @media (max-width: 1023px) {
        font-size: rem(18);
    }

    @media (max-width: 768px) {
        margin: 0;
        width: fit-content;
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

    @media (max-width: 1023px) {
        font-size: rem(20);
    }

    @media (max-width: 768px) {
        grid-column: 2 / 3;
        line-height: 1.5;
    }
}
</style>
