<template>
    <header ref="header" :class="{ is__visible: isTopPaneVisible }">
        <div ref="topPane" class="top__pane flex-row">
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
                        <a
                            href="https://drive.google.com/file/d/1P_cmNywsYuqmnkdPynOSE_c7NUR9DuYA/view?usp=sharing"
                            target="__blank"
                            class="nav__link phage__rough nav__btn resume__btn translate__up"
                            @click.stop="handleLinkClick"
                        >
                            Resume
                        </a>
                    </li>
                    <li class="nav__item">
                        <button
                            class="nav__link phage__rough nav__btn contact__btn translate__up"
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
            if( process.client && window.innerWidth < 769 ) {
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
    position: fixed;
    height: 150px;
    width: 100vw;
    padding-inline: 40px;
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
        height: 100%;
        width: 100%;
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
        transition-delay: 300ms;
    }

    &:nth-child(2) .nav__link {
        transition-delay: 500ms;
    }

    &:nth-child(3) .nav__link {
        transition-delay: 700ms;
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

.resume__btn {
    transition-delay: 900ms;
}

.contact__btn {
    transition-delay: 1100ms;
}

@media (max-width: 840px) {
    .nav__list {
        gap: 15px;
    }

    .nav__item:last-child {
        margin-left: 0;
    }
}

@media (max-width: 768px) {
    nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;

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
        height: 100px;
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

            &:nth-child(5) {
                transition: transform 200ms linear 600ms;
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
            text-shadow: 2px 2px 4px rgba($color: #000, $alpha: 0.25);
        }

        .nav__link.nuxt-link-exact-active {
            color: $yellow;

            &::after {
                display: none;
            }
        }
    }
}


@media (max-width: 600px) {
    .website__logo {
        height: 64px;
        width: 64px;
    }
}
</style>
