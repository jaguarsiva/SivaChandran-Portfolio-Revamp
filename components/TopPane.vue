<template>
    <header ref="header" :class="{ is__visible: isTopPaneVisible }">
        <div class="top__pane flex-row">
            <nuxt-link
                :to="{ name: 'index' }"
                class="website__logo translate__up"
            >
                <img src="~assets/images/logo.svg" alt="logo" />
            </nuxt-link>
            <nav>
                <ul class="nav__list flex">
                    <li
                        v-for="link in navLinks"
                        :key="link.title"
                        class="nav__item"
                    >
                        <nuxt-link
                            :to="{ name: link.name }"
                            class="nav__link phage__rough translate__up"
                        >
                            {{ link.title }}
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <button class="nav__link phage__rough contact__btn translate__up">
                Contact
            </button>
        </div>
    </header>
</template>

<script>
export default {
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
        const context = this;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                context.isTopPaneVisible = entry.isIntersecting;
            });
        }, {});
        observer.observe(this.$refs.header);
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
    border-radius: 50%;

    &:focus-visible {
        outline: 0;
        box-shadow: 0 0 0 3px $tomato, 0 0 0 6px $yellow;
    }
}

.nav__list {
    gap: 30px;
}

.nav__item {
    &:first-child .nav__link {
        transition-delay: 0.2s;
    }

    &:nth-child(2) .nav__link {
        transition-delay: 0.4s;
    }

    &:nth-child(3) .nav__link {
        transition-delay: 0.6s;
    }
}

.nav__link {
    display: inline-block;
    padding: 10px;
    font-size: rem(20);
    color: $cream;
    line-height: 20px;
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
</style>
