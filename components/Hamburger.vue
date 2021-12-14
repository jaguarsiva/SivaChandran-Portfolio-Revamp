<template>
    <button
        ref="hamburger"
        class="hamburger translate__up"
        type="button"
        @click="handleClick"
    >
        <span class="hamburger__box">
            <span class="hamburger__inner"> &nbsp; </span>
        </span>
    </button>
</template>

<script>
export default {
    methods: {
        handleClick() {
            document.body.classList.toggle('is__frozen');
            this.$refs.hamburger.parentElement.classList.toggle('show__nav');
        }
    }
};
</script>

<style lang="scss" scoped>

.hamburger {
    position: relative;
    z-index: 100;
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-delay: 200ms;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: hidden;
}

.hamburger:hover {
    opacity: 0.8;
}

.show__nav .hamburger__inner,
.show__nav .hamburger__inner::before,
.show__nav .hamburger__inner::after {
    background-color: $cream;
}

.hamburger__box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
}

.hamburger__inner,
.hamburger__inner::before,
.hamburger__inner::after {
    width: 30px;
    height: 4px;
    background-color: $cream;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
}

.hamburger__inner {
    display: block;
    top: 50%;
    margin-top: -2px;
    width: 35px;
    transition: background-color 0.125s 0.175s ease-in;
}

.hamburger__inner::before,
.hamburger__inner::after {
    content: '';
    display: block;
}

.hamburger__inner::before {
    top: -10px;
    left: -7.5px;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
        top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
}

.hamburger__inner::after {
    top: 10px;
    bottom: -10px;
    right: -7.5px;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
        top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
}

.show__nav .hamburger__inner {
    transition-delay: 0s;
    transition-timing-function: ease-out;
    background-color: transparent !important;
    width: 40px;
}

.show__nav .hamburger__inner::before {
    left: -80px;
    width: 40px;
    top: -80px;
    transform: translate3d(80px, 80px, 0) rotate(45deg);
    transition: left 0.125s ease-out, top 0.05s 0.125s linear,
        transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.show__nav .hamburger__inner::after {
    width: 40px;
    right: -80px;
    top: -80px;
    transform: translate3d(-80px, 80px, 0) rotate(-45deg);
    transition: right 0.125s ease-out, top 0.05s 0.125s linear,
        transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@media (min-width: 769px) {
    .hamburger {
        display: none;
    }
}

</style>
