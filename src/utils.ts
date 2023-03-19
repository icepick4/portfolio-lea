interface Project {
    id: number;
    title: string;
    description: string;
    component: string;
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
        title: 'Enora',
        description:
            'Shooting photo improvisée dans une laverie et retouche sur <b>Photoshop</b>.',
        component: 'Enora'
    },
    {
        id: 2,
        title: 'LéArtistes',
        description:
            'Création de personnages pour mon identité visuelle sur <b>Illustrator</b>.',
        component: 'LeArtistes'
    },
    {
        id: 3,
        title: 'Polaroid',
        description:
            "Rebranding pour la marque Polaroid à l'occasion de la sortie d'un nouveau concept, le Polaroid X2 permettant d'imprimer un instant comme les anciens et la nouveauté est que la photo s'envoie instantanément au téléphone connecté à l'appareil photo.</br></br> Utilisation d'<b>Illustrator</b>, <b>XD</b> et <b>After effect</b>.",
        component: 'Polaroid'
    },
    {
        id: 4,
        title: "Vivre d'amour",
        description:
            "Réalisations d'affiches illustratives pour la Saint Valentin crée sur <b>Illustrator</b>.",
        component: 'VivreDAmour'
    },
    {
        id: 5,
        title: 'Affiches minimalistes',
        description:
            "Création d'une campagne de publicité minimaliste, humoristique et décalée pour du dentifrice et de la nourriture pour chat réalisé sur <b>Indesign</b> et <b>Photoshop</b>.",
        component: 'AffichesMinimalistes'
    },
    {
        id: 6,
        title: 'Chat motion',
        description:
            'Projet en motion design sous <b>Illustrator</b> et <b>After Effect</b>.</br>Création de notre illustration et petite animation.',
        component: 'ChatMotion'
    },
    {
        id: 7,
        title: 'CocaCola life',
        description:
            "Campagne d'affichage fictif pour la marque coca-cola life réalisée sur <b>Indesign</b>.",
        component: 'CocaColaLife'
    },
    {
        id: 8,
        title: 'Logofolio',
        description:
            'Logos réalisés pour des entreprises, projets de cours ou travaux personnels crée sous <b>Illustrator</b>.',
        component: 'Logofolio'
    }
];

export const skills: Skill[] = [
    {
        id: 1,
        title: 'Diplômes',
        list: [
            'Bachelor Design Graphique',
            `Brassart Annecy
            2021/2024
            Design graphique, Design de packaging, Webdesign, Publicité, Direction artistique.
            Prendre en charge un projet dans sa globalité.
            `,
            'Bac Pro RPIP',
            `Option Production Graphique
            Lycée André Argouges, Grenoble  
            2018/2021
            Apprentissage des techniques et outils des 
            industries graphiques
            `,
            'BEP Industrie Graphique',
            `Lycée André Argouges, Grenoble 
            2019/2020
            `
        ],
        color: 'yellow',
        character: 'chignons'
    },
    {
        id: 2,
        title: 'Compétences',
        list: null,
        color: 'pink',
        character: 'couronne'
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
        color: 'orange',
        character: 'ondule'
    }
];
