<template>
    <section
        ref="tiltedSection"
        class="intro__section tilted__section"
        :class="{ is__visible: isSectionVisible }"
    >
        <h2
            ref="sectionHeading"
            class="section__heading"
            :class="{ heading__visible: isHeadingVisible }"
        >
            Bonjour
        </h2>
        <div class="intro__box">
            <div class="intro__texts relative">
                <span class="tahu intro__text">I am</span>
                <span ref="introText" class="tahu intro__text typewriter">
                    {{ userName }}
                </span>
                <span class="tahu intro__text">& I do code</span>
                <img
                    src="~assets/images/intro.png"
                    alt="Siva's picture"
                    class="intro__image"
                />
            </div>
            <ul
                ref="rolesList"
                class="roles__list flex justify-center"
                :class="{ list__visible: isListVisible }"
            >
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="22"
                        fill="none"
                    >
                        <path
                            fill="#F40009"
                            d="M13.444 0 0 7.333l4.889 2.665v7.333L13.444 22 22 17.331V9.998l2.444-1.332v8.445h2.445V7.333L13.444 0Zm8.336 7.333-8.336 4.547L5.11 7.333l8.335-4.546 8.336 4.546Zm-2.224 8.544-6.112 3.336-6.11-3.336V11.33l6.11 3.337 6.112-3.337v4.547Z"
                        />
                    </svg>
                    <span>Computer Science Engineer</span>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="22"
                        fill="none"
                    >
                        <path
                            fill="#F86449"
                            d="M8.994 18.464c-.384 0-.755-.14-1.043-.396L0 11 8.393 3.54a1.571 1.571 0 1 1 2.087 2.35L4.73 11l5.31 4.717a1.573 1.573 0 0 1-1.044 2.747h-.002Zm14.056-.003L31.443 11l-7.95-7.068a1.57 1.57 0 0 0-2.087 2.349L26.714 11l-5.75 5.11a1.572 1.572 0 0 0 2.086 2.351Zm-7.35 2.227L18.843 1.83a1.57 1.57 0 1 0-3.099-.518L12.601 20.17a1.572 1.572 0 1 0 3.1.518Z"
                        />
                    </svg>
                    <span>Frontend Developer</span>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="20"
                        fill="none"
                    >
                        <path
                            fill="#F40009"
                            d="M17.745.443h-3.643L11.727 4.4 9.344.444 6.698.443H.546l11.197 19.115L22.882.443h-5.137Zm-6.006 15.15L4.036 2.443H6.86l4.885 8.406 4.847-8.407h2.81l-7.663 13.151Z"
                        />
                    </svg>
                    <span>MEVN Developer</span>
                </li>
            </ul>
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
            isListVisible: false,
            userName: 'Siva Chandran'
        };
    },
    mounted() {
        new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                const name = 'Siva Chandran';
                let i = 1;
                this.userName = 'S';
                setTimeout(() => {
                    const interval = setInterval(() => {
                        this.userName = name.slice(0, i++);
                        if (i === 14) clearInterval(interval);
                    }, 150);
                }, 500);
                observer.unobserve(entries[0].target);
            }
        }, {}).observe(this.$refs.introText);

        new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                this.isListVisible = true;
                observer.unobserve(entries[0].target);
            }
        }, {}).observe(this.$refs.rolesList);
    }
};
</script>

<style lang="scss" scoped>
.intro__section {
    padding-inline: 20px;

    &::before {
        background: rgba($color: $cream, $alpha: 0.08);
    }

    &.is__visible::before {
        @media (max-width: 580px) {
            top: 0;
            left: 200px;
        }
    }
}

.intro__box {
    margin-block-start: 150px;
}

.intro__texts {
    z-index: 1;
}

.intro__text {
    display: block;
    text-align: center;
}

.intro__text:first-child,
.intro__text:nth-child(3) {
    font-size: rem(50);
    line-height: 1.25;

    @media (max-width: 1023px) {
        font-size: rem(40);
    }

    @media (max-width: 767px) {
        font-size: 7vw;
    }
}

.typewriter {
    font-size: rem(150);
    line-height: 1.5;
    color: #fff;
    border-right: 5px solid $cream;
    width: fit-content;
    margin: 0 auto;
    animation: blink-caret 0.75s linear infinite;

    @media (max-width: 1023px) {
        font-size: rem(120);
    }

    @media (max-width: 767px) {
        font-size: 17vw;
        margin: 12px auto;
    }
}

.intro__image {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    opacity: 0.25;
    height: 350px;
}

.roles__list {
    margin-block-start: 75px;
    gap: 12px;

    li {
        --opacity: 0;
        --translateY: 150px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 20px 8px;
        background-color: rgba($color: $cream, $alpha: 0.9);
        border-radius: 12px;
        opacity: var(--opacity);
        transform: translateY(var(--translateY));

        &:nth-child(2) {
            transition-delay: 400ms !important;
        }

        &:nth-child(3) {
            transition-delay: 800ms !important;
        }
    }

    &.list__visible li {
        --opacity: 1;
        --translateY: 0;
        transition: transform 0.4s ease-out, opacity 0.4s ease-out;
    }

    span {
        color: $tomato;
        font-family: 'Biko-Regular', sans-serif;
        font-size: rem(22);
        line-height: 1;

        @media (max-width: 1023px) {
            font-size: rem(20);
        }
    }

    svg {
        height: 22px;
    }

    svg path {
        fill: $tomato;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 600px) {
        li {
            padding: 6px 12px;
            justify-content: center;
        }

        span {
            font-size: rem(14);
        }
    }
}
</style>
