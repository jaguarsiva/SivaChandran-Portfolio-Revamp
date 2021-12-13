<template>
    <header ref="header" :class="{ is__visible: isTopPaneVisible }">
        <div class="top__pane flex-row" ref="topPane">
            <NuxtLink
                :to="{ name: 'index' }"
                class="website__logo translate__up"
            >
                <img src="~assets/images/logo.svg" alt="logo" />
            </NuxtLink>
            <nav>
                <ul class="nav__list flex">
                    <li
                        v-for="link in navLinks"
                        :key="link.title"
                        class="nav__item"
                    >
                        <NuxtLink
                            :to="{ name: link.name }"
                            class="nav__link phage__rough translate__up"
                            @click.native="handleLinkClick"
                        >
                            {{ link.title }}
                        </NuxtLink>
                    </li>
                    <li class="nav__item">
                        <button
                            class="nav__link phage__rough contact__btn translate__up"
                            @click.stop="handleClick"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
            <Hamburger />
        </div>
    </header>
</template>

<script>
import Hamburger from '~/components/Hamburger.vue';

export default {
    components: {
        Hamburger
    },
    data() {
        return {
            navLinks: [
                { title: 'Intro', name: 'index' },
                { title: 'Skills', name: 'skills' },
                { title: 'Works', name: 'works' }
            ],
            isTopPaneVisible: true
        };
    },
    mounted() {
        const observer = new IntersectionObserver(entries => {
            this.isTopPaneVisible = entries[0].isIntersecting;
        }, {});
        observer.observe(this.$refs.header);
    },
    methods: {
        handleClick() {
            this.$emit('open-contact');
            this.handleLinkClick();
        },
        handleLinkClick() {
            if( process.client && window.innerWidth < 768 ) {
                this.$refs.topPane.classList.remove('show__nav');
                document.body.classList.remove('is__frozen');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
header {
    height: 150px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.top__pane {
    height: 150px;
    width: 100%;
    padding-inline: 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}

.website__logo {
    position: relative;
    z-index: 100;
    border-radius: 50%;
    height: 84px;
    width: 84px;

    &:focus-visible {
        outline: 0;
        box-shadow: 0 0 0 3px $tomato, 0 0 0 6px $yellow;
    }

    img {
        height: 84px;
        width: 84px;
        border-radius: inherit;
        border: 3px solid $cream;
    }
}

nav {
    flex-grow: 1;
}

.nav__list {
    gap: 30px;
}

.nav__item {
    &:first-child {
        margin-left: auto;
    }

    &:first-child .nav__link {
        transition-delay: 0.2s;
    }

    &:nth-child(2) .nav__link {
        transition-delay: 0.4s;
    }

    &:nth-child(3) .nav__link {
        transition-delay: 0.6s;
    }

    &:last-child {
        margin-left: auto;
    }
}

.nav__link {
    display: inline-block;
    padding: 10px;
    font-size: rem(18);
    line-height: 1;
    color: $cream;
    letter-spacing: 1px;
    border-radius: 12px;

    &.nuxt-link-exact-active {
        @include wiggle;
    }

    &:focus-visible {
        outline: 0;
        box-shadow: 0 0 0 0px $tomato, 0 0 0 4px $yellow;
    }

    &:focus-visible::after {
        transition: transform 1ms ease-out;
        --scale: 0;
    }
}

.contact__btn {
    transition-delay: 0.8s;
    cursor: pointer;
}

.translate__up {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    transform: translateY(-150px);
    pointer-events: none;

    .is__visible & {
        transform: translateY(0);
        pointer-events: all;
    }
}

@media (max-width: 767px) {
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before, &::after {
            content: '';
            position: absolute;
            left: 0;
            z-index: -1;
            height: 50%;
            width: 100%;
            background-color: $tomato;
            transition: transform 200ms linear;
        }

        &::before {
            top: 0;
            transform: skew(90deg) scale3d(0, 0, 0);
        }

        &::after {
            top: 50%;
            transform: skew(-90deg) scale3d(0, 0, 0);
        }

        .nav__item {
            transform: translateX(-500px);
        }
    }

    .top__pane {
        height: 120px;
        padding-left: 20px;
        padding-right: 10px;
    }

    .show__nav nav {
        z-index: 99;

        &::before, &::after {
            transform: skew(0) scale3d(1, 1, 1);
        }

        .nav__item {
            transform: translateX(0);
            text-align: center;

            &:nth-child(1) {
                transition: transform 200ms linear 200ms;
            }

            &:nth-child(2) {
                transition: transform 200ms linear 300ms;
            }

            &:nth-child(3) {
                transition: transform 200ms linear 400ms;
            }

            &:nth-child(4) {
                transition: transform 200ms linear 500ms;
            }
        }
    }

    .nav__list {
        flex-direction: column;
        transform-style: preserve-3d;
        transform: rotateX(-25deg) rotateY(25deg);

        .nav__item {
            margin-left: 0 !important;
        }

        .nav__link {
            font-size: rem(24);
        }

        .nav__link.nuxt-link-exact-active {
            font-size: rem(30);
            color: $yellow;

            &::after {
                display: none;
            }
        }
    }
}
</style>
