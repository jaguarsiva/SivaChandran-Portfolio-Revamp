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
            class="skills__outer flex-col align-center"
            :class="{ skills__visible: isSkillsVisible }"
            ref="skillsOuter"
        >
            <div
                class="skill__row flex-col align-center"
                v-for="skill in skills"
                :key="skill.title"
            >
                <div class="road top"></div>
                <div class="road left"></div>
                <div class="road right"></div>
                <div class="road bottom"></div>
                <h3 class="skill__title tahu relative">{{ skill.title }}</h3>
                <ul class="flex skill__list">
                    <li
                        class="skill__item flex-center"
                        v-for="item in skill.items"
                        :key="item"
                    >
                        <span
                            class="skills__sprite"
                            :class="item.toLowerCase()"
                        >
                            &nbsp;
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import sectionHeading from '@/mixins/sectionHeading.js';
import tiltedBackground from '@/mixins/tiltedBackground.js';

export default {
    mixins: [sectionHeading, tiltedBackground],
    data() {
        return {
            skills: [
                {
                    title: 'Core',
                    items: ['HTML', 'CSS', 'Javascript', 'SASS', 'Typescript']
                },
                {
                    title: 'Frontend',
                    items: ['Vue', 'Nuxt', 'PostCSS', 'Tailwind', 'Figma']
                },
                {
                    title: 'Backend',
                    items: ['Node', 'Express', 'MongoDB', 'Firebase']
                },
                {
                    title: 'Tools',
                    items: ['Vite', 'Webpack', 'Gulp', 'eslint', 'prettier']
                },
                { title: 'Source Control', items: ['Git', 'Github'] }
            ],
            isSkillsVisible: false
        };
    },
    mounted() {
        new IntersectionObserver((entries, observer) => {
            if( entries[0].isIntersecting ) {
                this.isSkillsVisible = true;
                observer.unobserve();
            }
        }, {}).observe(this.$refs.skillsOuter);
    }
};
</script>

<style lang="scss" scoped>
.skills__outer {
    margin-block-start: 100px;
}

.skill__row {
    position: relative;
    width: 90%;
    max-width: 1000px;
    gap: 12px;
    padding-block: 75px;
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
        padding-inline: 30px;
        width: 100%;
        box-shadow: $shadow;
        overflow: hidden;
        opacity: 0;
    }

    .skill__item {
        height: 124px;
        width: 124px;
        transform: translateY(-200px);
    }

    .skills__visible & {
        --duration: 300ms;
        --line-delay: calc(
            var(--delay) + (var(--duration) * (3 + var(--total)))
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
            transform: translateY(0);
            transition-property: transform;

            &:nth-child(1) {
                transition-delay: calc(var(--delay) + (var(--duration) * 2));
            }

            &:nth-child(2) {
                transition-delay: calc(var(--delay) + (var(--duration) * 3));
            }

            &:nth-child(3) {
                transition-delay: calc(var(--delay) + (var(--duration) * 4));
            }

            &:nth-child(4) {
                transition-delay: calc(var(--delay) + (var(--duration) * 5));
            }

            &:nth-child(5) {
                transition-delay: calc(var(--delay) + (var(--duration) * 6));
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
            --delay: 4600ms;
            --total: 5;
        }

        &:nth-child(3) {
            --delay: 8400ms;
            --total: 4;
        }

        &:nth-child(4) {
            --delay: 11800ms;
            --total: 5;
        }

        &:nth-child(5) {
            --delay: 15400ms;
            --total: 2;
        }
    }
}

.skill__title {
    font-size: rem(40);
    line-height: 1;
    margin-right: 30px;
    padding-left: 35px;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 18px;
        height: 4px;
        background-color: $yellow;
        transform: translateY(-50%) rotate(-12deg);
    }
}
</style>
