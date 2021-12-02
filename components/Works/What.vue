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
            What I built
        </h2>

        <div ref="worksOuter" class="works__outer">
            <div
                v-for="(works, workIndex) in projects"
                :key="workIndex"
                class="works__group"
                :class="{ start__odd: works.startOdd, start__even: !works.startOdd }"
            >
                <h3 class="works__title tahu">{{ works.title }}</h3>
                <ul class="cards__list flex-col align-center">
                    <li
                        v-for="(work, index) in works.items"
                        :key="index"
                        class="card__item"
                    >
                        <div class="work__card flex-col">
                            <div class="card__top">
                                <h4 class="work__title biko__bold">
                                    {{ work.title }}
                                </h4>
                                <span class="work__description biko__regular">
                                    {{ work.description }}
                                </span>
                                <img
                                    v-if="!work.noLogo"
                                    :src="
                                        require('../../assets/images/works/' +
                                            work.title
                                                .toLowerCase()
                                                .split(' ')
                                                .join('_') +
                                            '/logo.png')
                                    "
                                    :alt="work.title + ' logo'"
                                    class="work__logo"
                                />
                            </div>
                            <div class="card__cover">
                                <div class="cover__green"></div>
                                <img
                                    :src="
                                        require('../../assets/images/works/' +
                                            work.title
                                                .toLowerCase()
                                                .split(' ')
                                                .join('_') +
                                            '/cover.jpg')
                                    "
                                    :alt="work.title + ' Cover Picture'"
                                />
                            </div>
                            <div class="card__bottom flex-row">
                                <div class="stack__list flex">
                                    <div
                                        v-for="(stack, i) in work.stack"
                                        :key="i"
                                        class="stack__item"
                                    >
                                        <a
                                            :title="stack.title"
                                            :class="
                                                stack.title.toLowerCase() +
                                                '__32'
                                            "
                                            :href="stack.link"
                                            target="_blank"
                                            class="icons__sprite sprite__32 stack__link"
                                        >
                                            &nbsp;
                                        </a>
                                    </div>
                                </div>
                                <a
                                    :href="work.link"
                                    :title="work.title"
                                    target="__blank"
                                    class="open__btn biko__regular flex-row"
                                >
                                    Open
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        fill="none"
                                    >
                                        <path
                                            fill="#F2F7F2"
                                            d="M12.25 12.25H1.75V1.75H7V.25H1.75a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5c.825 0 1.5-.675 1.5-1.5V7h-1.5v5.25ZM8.5.25v1.5h2.693L3.82 9.123l1.058 1.057 7.372-7.372V5.5h1.5V.25H8.5Z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            ;
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
            projects: [
                {
                    title: 'Web Applications',
                    startOdd: true,
                    items: [
                        {
                            title: 'Mobile Solutions',
                            description:
                                'Multi brand mobile service center, Kallakurichi',
                            link: 'https://www.mobilesolutions.co.in/',
                            stack: [
                                {
                                    title: 'Figma',
                                    link: 'https://www.figma.com/'
                                },
                                { title: 'Vue', link: 'https://vuejs.org/' },
                                {
                                    title: 'Node',
                                    link: 'https://nodejs.org/en/'
                                },
                                {
                                    title: 'Express',
                                    link: 'https://expressjs.com/'
                                },
                                {
                                    title: 'MongoDB',
                                    link: 'https://www.mongodb.com/'
                                }
                            ]
                        },
                        {
                            title: 'Kanakku Manager',
                            description:
                                'Expense manager to record & analyze all the transactions of the vehicle',
                            link: 'https://kanakku-manager.netlify.app/',
                            stack: [
                                {
                                    title: 'Figma',
                                    link: 'https://www.figma.com/'
                                },
                                { title: 'Vue', link: 'https://vuejs.org/' },
                                {
                                    title: 'Node',
                                    link: 'https://nodejs.org/en/'
                                },
                                {
                                    title: 'Express',
                                    link: 'https://expressjs.com/'
                                },
                                {
                                    title: 'MongoDB',
                                    link: 'https://www.mongodb.com/'
                                }
                            ]
                        },
                        {
                            title: 'Whosapp Web',
                            description: 'Chat app cloned from "Whatsapp"',
                            link: 'https://whosapp-2c58f.web.app/',
                            stack: [
                                { title: 'Vue', link: 'https://vuejs.org/' },
                                {
                                    title: 'SASS',
                                    link: 'https://sass-lang.com/'
                                },
                                {
                                    title: 'Typescript',
                                    link: 'https://www.typescriptlang.org/'
                                },
                                {
                                    title: 'Firebase',
                                    link: 'https://firebase.google.com/'
                                }
                            ]
                        },
                        {
                            title: 'Pricetracky',
                            description:
                                'Compare mobile specs and buy from the affliate pages',
                            link: 'https://pricetracky.com/',
                            stack: [
                                {
                                    title: 'Figma',
                                    link: 'https://www.figma.com/'
                                },
                                { title: 'Vue', link: 'https://vuejs.org/' },
                                {
                                    title: 'SASS',
                                    link: 'https://sass-lang.com/'
                                },
                                {
                                    title: 'Node',
                                    link: 'https://nodejs.org/en/'
                                },
                                {
                                    title: 'Express',
                                    link: 'https://expressjs.com/'
                                }
                            ]
                        },
                        {
                            title: 'User Manager',
                            description: 'Web application built without any frameworks',
                            link: 'https://user-manager-01.netlify.app/',
                            stack: [
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
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Landing Pages',
                    startOdd: false,
                    items: [
                        {
                            title: 'Anbu Arts and Crafts',
                            description:
                                'Wooden statues, carvings, sculptures factory Kallakurichi',
                            link: 'https://anbu-arts.netlify.app/',
                            stack: [
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
                                }
                            ]
                        },
                        {
                            title: 'Chozha Construction Company',
                            description:
                                'An building construction company offering services across TN',
                            link: 'https://chozha-cc.netlify.app/',
                            stack: [
                                { title: 'Figma', link: 'https://www.figma.com/' },
                                {
                                    title: 'HTML',
                                    link: 'https://www.w3schools.com/html/'
                                },
                                {
                                    title: 'SASS',
                                    link: 'https://sass-lang.com/'
                                },
                                {
                                    title: 'PostCSS',
                                    link: 'https://postcss.org/'
                                },
                                {
                                    title: 'Javascript',
                                    link: 'https://www.w3schools.com/js/'
                                }
                            ]
                        },
                        {
                            title: 'Forever Technologies',
                            description:
                                'Building eternal designs, detailing, project management, software development',
                            link: 'http://forevertechnologies.biz',
                            stack: [
                                { title: 'Figma', link: 'https://www.figma.com/' },
                                { title: 'Vue', link: 'https://vuejs.org/' },
                                {
                                    title: 'CSS',
                                    link: 'https://www.w3schools.com/css/'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Other Works',
                    startOdd: true,
                    items: [
                        {
                            title: 'Pixel Resizer',
                            description: 'Tool used to resize CSS declarations while using CSS sprites',
                            noLogo: true,
                            link: 'https://pixel-resizer.netlify.app/',
                            stack: [
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
                                }
                            ]
                        },
                        {
                            title: 'SQL Super',
                            description: 'NPM package to perform basic SQL CRUD operations without writing SQL queries',
                            noLogo: true,
                            link: 'https://www.npmjs.com/package/sql-super',
                            stack: [
                                {
                                    title: 'Javascript',
                                    link: 'https://www.w3schools.com/js/'
                                }
                            ]
                        },
                    ]
                }
            ]
        };
    },
    mounted() {
        const observer = new IntersectionObserver( (entries, observer) => {
            entries.forEach( entry => {
                if( entry.isIntersecting ) {
                    entry.target.classList.add('is__visible');
                    observer.unobserve( entry.target );
                }
            });
        }, { threshold: 0.5 } );

        this.$refs.worksOuter.querySelectorAll('.card__item').forEach( item => {
            observer.observe( item );
        });
    }
};
</script>

<style lang="scss" scoped>

.tilted__section {
    &::before {
        left: auto;
        right: 0;
        top: 250px;
    }

    &.is__visible::before {
        --rotate: 15deg;
    }
}

.works__group {
    max-width: 1024px;
    margin: 100px auto 0;
    position: relative;
}

.works__title {
    position: absolute;
    top: 75px;
    left: 50%;
    font-size: rem(60);
    color: $cream;
    width: fit-content;

    .start__odd & {
        transform: translateX(-100%);
    }
}

.card__item {
    display: flex;
    padding-block: 50px;
    width: 100%;
    position: relative;

    .start__odd &:nth-child(odd), .start__even &:nth-child(even) {
        justify-content: flex-end;
    }

    .start__odd &:nth-child(even), .start__even &:nth-child(odd) {
        justify-content: flex-start;
    }

    &::before, &::after {
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
        transform: translateX( -50% ) translateY(-50%);
        border-radius: 50%;
        box-shadow: 0 0 0 4px $tomato, 0 0 0 8px $cream;
    }
}

.work__card {
    width: 425px;
    gap: 25px;
    background-color: $cream;
    color: $black;
    border-radius: 18px;
    box-shadow: $shadow;
    padding: 25px 20px;
    opacity: 0;
    transform: translateX( var(--offsetX) );
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
}

.card__top {
    display: grid;
    grid-template-columns: 1fr 64px;
    grid-template-rows: 30px 1fr;
    column-gap: 9px;
}

.work__title {
    font-size: rem(22);
    line-height: 1;
    color: $black;
}

.work__description {
    grid-row: 2 / 3;
    font-size: rem(17);
    line-height: 1.5;
    color: hsl(0, 0, 55%);
}

.work__logo {
    width: 64px;
    object-fit: cover;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    color: rgba($color: $black, $alpha: 0.8);
    perspective: 300px;
    animation: card 2.5s ease-in-out infinite alternate-reverse;
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

    &::before, &::after, .cover__green {
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
        background-color: #29BD4C;
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
</style>
