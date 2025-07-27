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
            Professional Journey
        </h2>

        <p class="section__description">
            My career progression and key achievements in software development
        </p>

        <div ref="worksOuter" class="works__outer">
            <div
                v-for="(works, workIndex) in experience"
                :key="workIndex"
                class="works__group"
                :class="{
                    start__odd: works.startOdd,
                    start__even: !works.startOdd
                }"
            >
                <div class="works__header">
                    <div class="works__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-building2"
                        >
                            <path
                                d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
                            ></path>
                            <path
                                d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
                            ></path>
                            <path
                                d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
                            ></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                        </svg>
                    </div>
                    <div class="works__header__content">
                        <div class="works_row">
                            <h3 class="works__title phage__regular">
                                {{ works.title }}
                            </h3>
                            <span class="works__duration">
                                {{ works.duration }}
                            </span>
                        </div>
                        <div class="works_row">
                            <a
                                :href="works.companyLink"
                                target="_blank"
                                class="works__company"
                            >
                                {{ works.company }} >
                            </a>
                            <p class="works__location">{{ works.location }}</p>
                        </div>
                    </div>
                </div>

                <span class="works__subtitle">
                    Key Achievements & Responsibilities
                </span>
                <ul class="works__achievements__list">
                    <li
                        v-for="(item, index) in works.keyAcheivements"
                        :key="index"
                        class="works__achievements__list__item"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import heading from '~/mixins/heading';
import tilt from '~/mixins/tilt';

const experience = [
    {
        title: 'Lead Software Engineer',
        company: 'Credit Saison India',
        companyLink: 'https://www.creditsaison.in/',
        location: 'Bangalore, India',
        duration: 'April 2025 - Present',
        keyAcheivements: [
            'Collaborated with cross-functional teams to analyse and gather project requirements.',
            'Designed scalable software solutions for complex business needs.',
            'Reviewed code rigorously to uphold coding standards within development team.',
            'Mentored junior engineers on best practices in software development methodologies.',
            'Integrated third-party APIs to enhance functionality of existing applications.',
            'Documented technical specifications and architecture for future onboarding and reference.'
        ]
    },
    {
        title: 'Senior Software Engineer',
        company: 'Credit Saison India',
        companyLink: 'https://www.creditsaison.in/',
        location: 'Bangalore, India',
        duration: 'April 2024 - March 2025',
        keyAcheivements: [
            'Developed backend orchestration for new product utilising Python FastAPI, AWS Step Functions, and Lambda.',
            'Mentored junior engineers by reviewing and approving code changes through pull requests.',
            'Optimised existing codebases to enhance performance in financial services applications.',
            'Troubleshot software problems to resolve production incidents promptly.'
        ]
    },
    {
        title: 'Software Engineer II',
        company: 'Credit Saison India',
        companyLink: 'https://www.creditsaison.in/',
        location: 'Bangalore, India',
        duration: 'April 2023 - March 2024',
        keyAcheivements: [
            'Developed a lightweight python workflow to streamline onboarding flow, providing flexibility in state management.',
            'Optimised backend micro service systems by implementing asynchronous solutions utilising AWS SQS, SNS, and Lambda.',
            'Created AWS CodePipelines using CloudFormation templates to streamline and automate the deployment process.'
        ]
    },
    {
        title: 'Software Engineer I',
        company: 'Credit Saison India',
        companyLink: 'https://www.creditsaison.in/',
        location: 'Bangalore, India',
        duration: 'Jan 2022 - March 2023',
        keyAcheivements: [
            'Built customer-facing web portal utilising Vue, Nuxt, and Vuetify design framework.',
            'Developed custom authentication flow with AWS Cognito, Lambdas, and Amplify.'
        ]
    },
    {
        title: 'Web Developer',
        company: 'Zoho Corporation',
        companyLink: 'https://www.zoho.com/',
        location: 'Chennai, India',
        duration: 'Mar 2021 - July 2021',
        keyAcheivements: [
            'Engineered pixel-perfect responsive landing pages and Search Engine Marketing (SEM) pages utilising HTML, CSS, and JavaScript.',
            'Resolved debugging issues and enhanced UI functionality through effective troubleshooting strategies.',
            'Developed HTML emails to support marketing campaigns and improve customer engagement.'
        ]
    }
];

export default {
    mixins: [heading, tilt],
    data() {
        return {
            experience
        };
    },
    mounted() {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is__visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        this.$refs.worksOuter.querySelectorAll('.card__item').forEach(item => {
            observer.observe(item);
        });
    }
};
</script>

<style lang="scss" scoped>
.section__description {
    text-align: center;
    margin-top: 40px;
    font-size: rem(24);
}

.tilted__section {
    &::before {
        left: auto;
        right: 0;
    }

    &.is__visible::before {
        top: 175px;
        --rotate: 15deg;

        @media (max-width: 1350px) {
            right: 400px;
        }

        @media (max-width: 1250px) {
            right: 600px;
        }

        @media (max-width: 1023px) {
            top: 150px;
            right: 600px;
        }

        @media (max-width: 800px) {
            top: 100px;
            right: 1000px;
        }

        @media (max-width: 600px) {
            right: 1400px;
        }
    }
}

.works__group {
    background-color: white;
    border-radius: 40px;
    color: #000;
    max-width: 924px;
    margin: 100px auto 0;
    padding: 60px;
    position: relative;
}

.works__header {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;

    .works__icon {
        width: 64px;
        height: 64px;
        color: $black;
        background-color: $tomato;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.2);
        color: $cream;
        border-radius: 12px;
        flex-shrink: 0;

        svg {
            width: 100%;
            height: 100%;
        }
    }

    .works__header__content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
}

.works_row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.works__title {
    font-size: rem(24);
    color: $black;
    width: fit-content;

    @media (max-width: 1023px) {
        position: static;
        transform: none !important;
        margin: 0 auto 50px;
    }
}

.works__company {
    font-size: rem(20);
    color: $tomato;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

.works__duration {
    font-size: rem(16);
    color: $tomato;
    display: block;
    padding: 4px 12px;
    border-radius: 12px;
    background: rgba(255, 126, 87, 0.1);
    border: 1px solid rgba(255, 126, 87, 0.2);
}

.works__location {
    font-size: rem(16);
}

.works__subtitle {
    display: block;
    font-size: rem(18);
    text-transform: uppercase;
    color: $black;
    margin-block: 20px;
}

.works__achievements__list {
    padding-left: 8px;
}

.works__achievements__list__item {
    font-size: rem(16);
    line-height: 1.5;
    color: rgb(140, 140, 140);
    margin-bottom: 8px;

    &::before {
        content: '•';
        color: $tomato;
        font-size: rem(20);
        margin-right: 8px;
    }

    @media (max-width: 600px) {
        font-size: rem(18);
    }
}

@media (max-width: 768px) {
    .works__outer {
        padding: 0 20px;
    }

    .works__group {
        padding: 40px 20px;
    }

    .works__header {
        flex-direction: column;
        align-items: flex-start;

        .works__icon {
            width: 40px;
            height: 40px;
            padding: 8px;
        }
    }

    .works_row {
        flex-direction: column;
        align-items: flex-start;
    }

    .works__title {
        margin-bottom: 12px;
    }

    .works__duration {
        position: absolute;
        top: 44px;
        right: 24px;
    }
}

.cards__list {
    @media (max-width: 1023px) {
        gap: 50px;
    }
}

.card__item {
    display: flex;
    padding: 50px 0;
    width: 100%;
    position: relative;

    .start__odd &:nth-child(odd),
    .start__even &:nth-child(even) {
        justify-content: flex-end;
    }

    .start__odd &:nth-child(even),
    .start__even &:nth-child(odd) {
        justify-content: flex-start;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: 50%;
    }

    &::before {
        top: 0;
        width: 5px;
        height: 100%;
        background-color: $cream;
        transform: translateX(-50%);
    }

    &:first-child {
        &::before {
            top: 50%;
            height: 50%;
        }
    }

    &:last-child {
        &::before {
            height: 50%;
        }
    }

    &::after {
        top: 50%;
        width: 18px;
        height: 18px;
        background-color: $yellow;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        box-shadow: 0 0 0 4px $tomato, 0 0 0 8px $cream;
    }

    @media (max-width: 1023px) {
        padding: 0;
        justify-content: center !important;

        &::before,
        &::after {
            display: none;
        }
    }
}

.work__card {
    width: 375px;
    gap: 18px;
    background-color: $cream;
    color: $black;
    border-radius: 18px;
    box-shadow: $shadow;
    padding: 20px 18px;
    opacity: 0;
    transform: translateX(var(--offsetX));
    transition: opacity 500ms ease-out 0.5s, transform 500ms ease-out 0.5s;

    .start__odd .card__item:nth-child(odd) &,
    .start__even .card__item:nth-child(even) & {
        --offsetX: -87px;
    }

    .start__odd .card__item:nth-child(even) &,
    .start__even .card__item:nth-child(odd) & {
        --offsetX: 87px;
    }

    .card__item.is__visible & {
        --offsetX: 0 !important;
        opacity: 1;
    }

    @media (max-width: 767px) {
        --offsetX: 0 !important;
        opacity: 1 !important;
    }
}

.card__top {
    display: grid;
    grid-template-columns: 1fr 64px;
    grid-template-rows: 30px 1fr;
    column-gap: 6px;

    @media (max-width: 768px) {
        display: block;
        padding-right: 64px;
        position: relative;

        .work__title {
            line-height: 1.4;
            margin-bottom: 6px;
        }

        .work__logo {
            position: absolute;
            max-height: 100%;
            top: 0;
            right: 0;
        }
    }
}

.work__title {
    font-size: rem(18);
    line-height: 1.5;
    color: $black;
}

.work__description {
    grid-row: 2 / 3;
    font-size: rem(15);
    line-height: 1.5;
    color: rgb(140, 140, 140);
}

.work__logo {
    height: 64px;
    object-fit: cover;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    color: rgba($color: $black, $alpha: 0.8);
    perspective: 300px;
    animation: card 2.5s ease-in-out infinite alternate-reverse;
    place-self: center;
}

.card__cover {
    position: relative;
    transform: perspective(300px);
    perspective: 300px;
    transform-style: preserve-3d;
    padding-block-start: 30px;
    background-color: $cream;
    box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.2);

    img {
        width: 100%;
        object-fit: cover;
    }

    &::before,
    &::after,
    .cover__green {
        content: '';
        position: absolute;
        top: 8px;
        height: 12px;
        width: 12px;
        border-radius: 50%;
    }

    &::before {
        background-color: $tomato;
        left: 8px;
    }

    &::after {
        background-color: $yellow;
        left: 25px;
    }

    .cover__green {
        background-color: #29bd4c;
        left: 42px;
    }
}

.stack__list {
    gap: 12px;
}

.open__btn {
    position: relative;
    z-index: 1;
    gap: 12px;
    font-size: rem(20);
    line-height: 1;
    color: $cream;
    width: 112px;
    padding: 9px 18px;
    box-shadow: 3px 3px 6px rgba($color: $black, $alpha: 0.2);
    border-radius: 18px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: 200%;
        width: 200%;
        background: $gradient;
        transition: left 300ms linear, top 300ms linear;
    }

    &:hover::before {
        left: -100%;
        top: -100%;
    }
}

@media (max-width: 600px) {
    .card__bottom {
        flex-wrap: wrap;
        gap: 18px;
    }

    .open__btn {
        margin-left: auto;
    }
}
</style>
