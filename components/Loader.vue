<template>
    <section class="page__loading flex-center">
        <div class="loader"> &nbsp; </div>
    </section>
</template>

<style lang="scss" scoped>
.page__loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    height: 100vh;
    width: 100vw;
    background-color: $cream;

    .fonts__loaded & {
        opacity: 0;
        pointer-events: none;
        z-index: -1;
        transition: opacity 500ms linear;
    }
}

.loader,
.loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
}

.loader {
    font-size: 6px;
    position: relative;
    border: 8px solid rgba($color: $tomato, $alpha: 0.95);
    border-left-color: $black;
    transform: translateZ(0);
    animation: load 1.1s infinite linear;
}

@keyframes load {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
