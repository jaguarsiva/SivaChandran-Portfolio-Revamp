<template>
    <footer ref="footer" :class="{ footer__visible: isFooterVisible }">
        <p class="flex-center">
            <span class="tahu"> Made with </span>
            <span class="heartin relative">
                <img src="~assets/images/heart.svg" alt="heart" class="heart">
                <img src="~assets/images/hands.svg" alt="hands" class="hands">
            </span>
            <span class="tahu"> by Siva Chandran </span>
        </p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            isFooterVisible: false
        }
    },
    mounted() {
        new IntersectionObserver(entries => {
            this.isFooterVisible = entries[0].isIntersecting;
        }, { threshold: 0.5 }).observe(this.$refs.footer);
    }
}
</script>

<style lang="scss" scoped>
footer {
    padding-block-start: 75px;
    background-color: #f1f5f5;
    overflow: hidden;
}

p {
    gap: 50px;
}

span {
    font-size: rem(42);
    line-height: 2;
    color: $black;
    opacity: 0;
    transform: translateY(50px);
    width: 250px;
    text-align: right;

    .footer__visible & {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 500ms ease-out 500ms, transform 500ms ease-out 500ms;
    }
}

.heartin {
    display: inline-block;
    width: 250px;
    height: 250px;
}

.hands {
    position: absolute;
    bottom: 0;
    transform: translateY( var(--translateY, 250px) );
}

.heart {
    --scale3d: 0, 0, 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) scale3d( var(--scale3d) );
}

.footer__visible {
    .hands {
        --translateY: 0px;
        transition: transform 500ms ease-out 750ms;
    }

    .heart {
        --scale3d: 1, 1, 1;
        transition: transform 500ms ease-out 1250ms;
    }
}

</style>
