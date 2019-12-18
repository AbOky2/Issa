export default {
    createLot: {
        field: [
            {
                // label: "Ajouter une photo de profil",
                name: "img",
                type: 'upload',
                // dimension: { ms: 2, xs: 4 },
                props: {
                    style: {
                        textAlign: 'center'
                    }
                }
            },
            {
                label: "Nom",
                name: "name",
                type: 'input',
                required: true,
                dimension: { xs: 6 },
            },
            {
                label: "Slogan",
                name: "slogan",
                type: 'input',
                required: true,
                dimension: { xs: 6 },
            },
            {
                label: "Dimension",
                name: "dimension",
                type: 'input',
                required: true,
                dimension: { xs: 6 },
            },
            {
                label: "Address",
                name: "address",
                type: 'input',
                required: true,
                dimension: { xs: 6 },
            },
            {
                label: "Nb available appart",
                name: "nb_available_appart",
                type: 'number',
                required: true,
                dimension: { xs: 6 },
            },
            {
                label: "Location date",
                name: "location_date",
                type: 'input',
                required: true,
                dimension: { xs: 6 },
            },
        ],
        settings: { unableUnderline: false, unableBoxShadow: true, variant: 'outlined' }
    }
}