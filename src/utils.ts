interface Project {
    id: number;
    title: string;
    description: string;
    component: string;
    image: string;
    themes: string[];
}

interface Skill {
    id: number;
    title: string;
    list: string[] | null;
    color: string;
    character: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Veggy Hunt',
        description:
            'Créer un service de livraison de repas en kit dont les produits proviendraient de fermes verticales ou </br> de producteurs locaux en ciblant la génération Z qui sort tout juste du foyer familial et qui se cherche </br> un mode de consommation personnel.',
        component: 'VeggyHunt',
        image: 'veggy-hunt',
        themes: [
            "Campagne d'affichage",
            'Application',
            'Campagne réseaux sociaux'
        ]
    },
    {
        id: 5,
        title: 'Fanzine',
        description:
            "Création d'un Fanzine sur le thème des troubles. </br> J'ai choisi le trouble de l'hyperphagie car on a tendance à ne pas le connaître.",
        component: 'Fanzine',
        image: 'fanzine',
        themes: ['Linogravure', 'Réflexion graphique', 'Collage']
    },
    {
        id: 2,
        title: 'Boomerang',
        description:
            'Par groupes de 2, imaginez l’identité de la salle de spectacle « boomerang », une salle de concerts contemporains qui accueille des artistes émergents.',
        component: 'Boomerang',
        image: 'boomerang',
        themes: ['Site web', "Campagne d'affichage", 'Stickers']
    },
    {
        id: 4,
        title: 'Humour & Minimalisme',
        description:
            'Par groupe de 2, imaginez une campagne de publicité minimaliste et humoristique pour du dentifrice et de la nourriture pour chat.',
        component: 'AffichesMinimalistes',
        image: 'affiches-minimalistes',
        themes: ['Montage photo', "Campagne d'affichage"]
    },
    {
        id: 7,
        title: 'Chat motion',
        description:
            'Projet en motion design sous <b>Illustrator</b> et <b>After Effect</b>.</br>Création de notre illustration et petite animation.',
        component: 'ChatMotion',
        image: 'chatmotion',
        themes: ['Motion Design', 'Illustration']
    },
    {
        id: 6,
        title: 'Enora',
        description:
            'Shooting photo improvisée dans une laverie et retouche sur <b>Photoshop</b>.',
        component: 'Enora',
        image: 'enora',
        themes: ['Direction artistique', 'Photographie', 'Retouche']
    },
    {
        id: 3,
        title: 'Logofolio',
        description:
            'Logos réalisés pour des entreprises, projets de cours ou travaux personnels crée sous <b>Illustrator</b>.',
        component: 'Logofolio',
        image: 'logofolio',
        themes: ['Réflexion graphique']
    }
    // {
    //     id: 3,
    //     title: 'LéArtistes',
    //     description:
    //         'Création de personnages pour mon identité visuelle sur <b>Illustrator</b>.',
    //     component: 'LeArtistes',
    //     image: 'leartistes'
    // },

    // {
    //     id: 4,
    //     title: 'Polaroid',
    //     description:
    //         "Rebranding pour la marque Polaroid à l'occasion de la sortie d'un nouveau concept, le Polaroid X2 permettant d'imprimer un instant comme les anciens et la nouveauté est que la photo s'envoie instantanément au téléphone connecté à l'appareil photo.</br></br> Utilisation d'<b>Illustrator</b>, <b>XD</b> et <b>After effect</b>.",
    //     component: 'Polaroid',
    //     image: 'polaroid'
    // },
    // {
    //     id: 5,
    //     title: "Vivre d'amour",
    //     description:
    //         "Réalisations d'affiches illustratives pour la Saint Valentin crée sur <b>Illustrator</b>.",
    //     component: 'VivreDAmour',
    //     image: 'vivre-d-amour'
    // },

    // {
    //     id: 8,
    //     title: 'CocaCola life',
    //     description:
    //         "Campagne d'affichage fictif pour la marque coca-cola life réalisée sur <b>Indesign</b>.",
    //     component: 'CocaColaLife',
    //     image: 'cocacola-life'
    // }
];

export const skills: Skill[] = [
    {
        id: 1,
        title: 'Diplômes',
        list: [
            'Bachelor Design Graphique',
            `Brassart Annecy
            <b>2021/2024</b>
            Design graphique, Design de packaging, Webdesign, Publicité, Direction artistique.
            Prendre en charge un projet dans sa globalité.
            `,
            'Bac Pro RPIP',
            `<b>Option Production Graphique</b>
            Lycée André Argouges, Grenoble  
            <b>2018/2021</b>
            Apprentissage des techniques et outils des 
            industries graphiques
            `,
            'BEP Industrie Graphique',
            `Lycée André Argouges, Grenoble 
            <b>2019/2020</b>
            `
        ],
        color: 'yellow',
        character: 'diplome'
    },
    {
        id: 2,
        title: 'Compétences',
        list: null,
        color: 'orange',
        character: 'chignon'
    },
    {
        id: 3,
        title: 'Expériences',
        list: [
            'Graphiste',
            'ReproLeman Thonon-les-bains',
            'Agent polyvalent',
            "SA Eaux minérales d'évian",
            'Animatrice en centre de loisirs',
            'MJC Evian-les-bains',
            'Infographiste',
            'Créativpub Thonon-les-Bains',
            'Entreprise familiale',
            "Gold'N power Armoy"
        ],
        color: 'pink',
        character: 'lunettes'
    }
];
