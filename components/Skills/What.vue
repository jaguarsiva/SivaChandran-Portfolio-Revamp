<template>
    <section
        ref="tiltedSection"
        class="what__section tilted__section"
        :class="{ is__visible: isSectionVisible }"
    >
        <h2
            ref="sectionHeading"
            class="section__heading"
            :class="{ heading__visible: isHeadingVisible }"
        >
            What I Know
        </h2>

        <div
            ref="skillsOuter"
            class="skills__outer flex-col align-center"
            :class="{ skills__visible: isSkillsVisible }"
        >
            <div
                v-for="skill in skills"
                :key="skill.title"
                class="skill__row flex-col align-center"
            >
                <div class="road top"></div>
                <div class="road left"></div>
                <div class="road right"></div>
                <div class="road bottom"></div>
                <h3 class="skill__title tahu relative">{{ skill.title }}</h3>
                <ul class="flex skill__list">
                    <li
                        v-for="item in skill.items"
                        :key="item.title"
                        class="skill__item flex-center"
                    >
                        <a
                            :title="item.title"
                            target="_blank"
                            :href="item.link"
                            class="icons__sprite"
                            :class="item.title.toLowerCase()"
                        >
                            &nbsp;
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import heading from '~/mixins/heading';
import tilt from '~/mixins/tilt';

export default {
    mixins: [heading, tilt],
    data() {
        return {
            skills: [
                {
                    title: 'Core',
                    items: [
                        {
                            title: 'HTML',
                            link: 'https://www.w3schools.com/html/'
                        },
                        {
                            title: 'CSS',
                            link: 'https://www.w3schools.com/css/'
                        },
                        {
                            title: 'Javascript',
                            link: 'https://www.w3schools.com/js/'
                        },
                        { title: 'SASS', link: 'https://sass-lang.com/' },
                        {
                            title: 'Typescript',
                            link: 'https://www.typescriptlang.org/'
                        }
                    ]
                },
                {
                    title: 'Frontend',
                    items: [
                        { title: 'Vue', link: 'https://vuejs.org/' },
                        { title: 'Nuxt', link: 'nuxtjs.org' },
                        { title: 'PostCSS', link: 'https://postcss.org/' },
                        { title: 'Tailwind', link: 'https://tailwindcss.com/' },
                        { title: 'Figma', link: 'https://www.figma.com/' }
                    ]
                },
                {
                    title: 'Backend',
                    items: [
                        { title: 'Node', link: 'https://nodejs.org/en/' },
                        { title: 'Express', link: 'https://expressjs.com/' },
                        { title: 'MongoDB', link: 'https://www.mongodb.com/' },
                        {
                            title: 'Firebase',
                            link: 'https://firebase.google.com/'
                        }
                    ]
                },
                {
                    title: 'Tools',
                    items: [
                        { title: 'Vite', link: 'https://vitejs.dev/' },
                        { title: 'Webpack', link: 'https://webpack.js.org/' },
                        { title: 'Gulp', link: 'https://gulpjs.com/' },
                        { title: 'eslint', link: 'https://eslint.org/' },
                        { title: 'prettier', link: 'https://prettier.io/' }
                    ]
                },
                {
                    title: 'Source Control',
                    items: [
                        { title: 'Git', link: 'https://git-scm.com/' },
                        { title: 'Github', link: 'https://github.com/' }
                    ]
                }
            ],
            isSkillsVisible: false
        };
    },
    mounted() {
        new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                this.isSkillsVisible = true;
                observer.unobserve(entries[0].target);
            }
        }, {}).observe(this.$refs.skillsOuter);
    }
};
</script>

<style lang="scss" scoped>
.what__section {
    padding-bottom: 50px;

    &.is__visible::before {
        top: 100px;

        @media (max-width: 1440px) {
            top: 140px;
        }

        @media (max-width: 1024px) {
            left: 300px;
        }

        @media (max-width: 768px) {
            left: 450px;
        }

        @media (max-width: 580px) {
            top: 0;
            left: 900px;
        }
    }
}

.skills__outer {
    margin-block-start: 100px;
}

.skill__row {
    position: relative;
    width: 90%;
    max-width: 1000px;
    gap: 24px;
    padding-block: 50px 100px;
    padding-inline: 75px;
    $border: 5px solid $cream;

    .road {
        position: absolute;
        background-color: $cream;
    }

    .top,
    .bottom {
        height: 5px;
        width: 50%;
        transform: scaleX(0);
    }

    .left,
    .right {
        width: 5px;
        height: 100%;
        top: 0;
        transform: scaleY(0);
    }

    .top {
        top: -2.5px;
    }

    .bottom {
        bottom: -2.5px;
    }

    .left {
        left: 0;
    }

    .right {
        right: 0;
    }

    &:nth-child(odd) {
        .top,
        .bottom {
            left: 0;
        }

        .right {
            display: none;
        }
    }

    &:nth-child(even) {
        .top,
        .bottom {
            right: 0;
        }

        .left {
            display: none;
        }
    }

    &:last-child {
        .road {
            display: none;
        }
    }

    &::after {
        --scale: 0, 0, 0;
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) scale3d(var(--scale));
        background-color: $yellow;
        border-radius: 50%;
        box-shadow: 0 0 0 4px $tomato, 0 0 0 8px $cream;
    }

    .skill__list {
        justify-content: center;
        gap: 25px;
        flex-grow: 1;
        background-color: rgba($color: $cream, $alpha: 0.8);
        border-radius: 24px;
        width: 100%;
        box-shadow: $shadow;
        overflow: hidden;
        opacity: 0;
    }

    @media (max-width: 1250px) {
        .skill__list {
            gap: 0;
        }
    }

    .skill__item {
        height: 124px;
        width: 124px;
        animation: fade-in var(--duration) ease-in-out backwards,
            card 2s ease-in-out infinite alternate-reverse;
    }

    .skills__visible & {
        --duration: 300ms;
        --line-delay: calc(
            var(--delay) + (var(--duration) * (4 + var(--total)))
        );

        *,
        &::after {
            transition-duration: var(--duration);
            transition-timing-function: linear;
        }

        .top,
        .bottom {
            transform: scaleX(1);
            transition-property: transform;
        }

        .left,
        .right {
            transform: scaleY(1);
            transition-property: transform;
        }

        &::after {
            --scale: 1, 1, 1;
            transition-property: transform;
            transition-delay: var(--delay);
        }

        .skill__list {
            opacity: 1;
            transition-property: opacity;
            transition-delay: calc(var(--delay) + (var(--duration) * 2));
        }

        .skill__item {
            &:nth-child(1) {
                animation-delay: calc(var(--delay) + (var(--duration) * 3));
            }

            &:nth-child(2) {
                animation-delay: calc(var(--delay) + (var(--duration) * 4));
            }

            &:nth-child(3) {
                animation-delay: calc(var(--delay) + (var(--duration) * 5));
            }

            &:nth-child(4) {
                animation-delay: calc(var(--delay) + (var(--duration) * 6));
            }

            &:nth-child(5) {
                animation-delay: calc(var(--delay) + (var(--duration) * 7));
            }
        }

        &:nth-child(odd) {
            .top {
                transform-origin: right;
                transition-delay: var(--line-delay);
            }

            .left {
                transform-origin: top;
                transition-delay: calc(var(--line-delay) + var(--duration));
            }

            .bottom {
                transform-origin: left;
                transition-delay: calc(
                    var(--line-delay) + (var(--duration) * 2)
                );
            }
        }

        &:nth-child(even) {
            .top {
                transform-origin: left;
                transition-delay: var(--line-delay);
            }

            .right {
                transform-origin: top;
                transition-delay: calc(var(--line-delay) + var(--duration));
            }

            .bottom {
                transform-origin: right;
                transition-delay: calc(
                    var(--line-delay) + (var(--duration) * 2)
                );
            }
        }

        &:nth-child(1) {
            --delay: 1s;
            --total: 5;
        }

        &:nth-child(2) {
            --delay: 4900ms;
            --total: 5;
        }

        &:nth-child(3) {
            --delay: 8700ms;
            --total: 4;
        }

        &:nth-child(4) {
            --delay: 12100ms;
            --total: 5;
        }

        &:nth-child(5) {
            --delay: 15700ms;
            --total: 2;
        }
    }

    @media (max-width: 600px) {
        padding: 0 0 75px;

        .road,
        &::after {
            display: none;
        }

        .skill__list {
            opacity: 1 !important;
        }

        .skill__item {
            animation: card 2s ease-in-out infinite alternate-reverse;

            &:nth-child(1) {
                animation-delay: 100ms !important;
            }

            &:nth-child(2) {
                animation-delay: 200ms !important;
            }

            &:nth-child(3) {
                animation-delay: 300ms !important;
            }

            &:nth-child(4) {
                animation-delay: 400ms !important;
            }

            &:nth-child(5) {
                animation-delay: 500ms !important;
            }
        }
    }
}

.skill__title {
    font-size: rem(40);
    line-height: 1;
    margin-right: 30px;
    padding-left: 35px;
}
</style>
