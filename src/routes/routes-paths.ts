export interface RoutePath {
    path: string;
    title: string;
    src: string;
}

const CHARACTERS_PATH = "/characters";

export const RoutesPaths = {
    INTRO: {
        path: "/",
        title: "INTRO",
        src: "home.svg",
    },
    HOME: {
        path: "/home",
        title: "INICIO",
        src: "/src/features/characters/assets/images/egyptian.webp",
    },
    CHARACTERS: {
        CHARACTERS: {
            path: CHARACTERS_PATH,
            title: "PERSONAJES",
            src: "home.svg",
        },
        CATHOLICISM: {
            path: `${CHARACTERS_PATH}/catholicism`,
            title: "CATOLICISMO",
            src: "",
        },
        MASAI: {
            path: `${CHARACTERS_PATH}/masai`,
            title: "MASAI",
            src: "",
        },
        BUDDHISM: {
            path: `${CHARACTERS_PATH}/buddhism`,
            title: "BUDDHISM",
            src: "",
        },
    },
    ABOUT_PROJECT: {
        path: "/about-project",
        title: "ACERCA DEL PROYECTO",
        src: "home.svg",
    },
}
