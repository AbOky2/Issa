export default {
    createLot: {
        field: [
            {
                // label: "Ajouter une photo de profil",
                name: "picture",
                type: 'upload',
                required: true,
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
                label: "Description",
                name: "description",
                type: 'input',
                required: true,
                dimension: { xs: 6 },
            },
            {
                label: "Link",
                name: "link",
                type: 'input',
                required: true,
                dimension: { xs: 12 },
            },
        ],
        settings: { unableUnderline: false, unableBoxShadow: true, variant: 'outlined' }
    }
}