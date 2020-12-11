export default {
    createZone: {
        fields: [
            {
                label: "Nom",
                name: "name",
                type: 'input',
                required: true,
            },
        ],
    },
    createAgency: {
        fields: [
            {
                label: "id",
                name: "id",
                type: 'hidden',
                required: true,
            },
            {
                label: "Nom",
                name: "name",
                type: 'input',
                required: true,
            },
            {
                label: "address",
                name: "address",
                type: 'input',
                required: true,
                dimension: { xs: 6 },
            },
            {
                label: "email",
                name: "email",
                type: 'email',
                required: true,
                dimension: { xs: 6 },
            },
        ],
    },
    settings: { unableUnderline: false, unableBoxShadow: true, variant: 'outlined' }
}