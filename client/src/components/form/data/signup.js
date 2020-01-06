export default {
    create: {
        field: [
            {
                label: "Nom",
                name: "firstName",
                type: 'input',
                required: true,
            },
            {
                label: "Prénom",
                name: "lastName",
                type: 'input',
                required: true,
            },
            {
                label: "Age",
                name: "age",
                type: 'number',
                required: true,
                dimension: { xs: 4 },
                props: {
                    adornment: { value: 'ans', position: 'end' }
                },
            },
            {
                label: "Ville",
                name: "city",
                type: 'input',
                required: true,
                dimension: { xs: 8 },

            },
            {
                label: "Email",
                name: "email",
                type: 'email',
                required: true,
                dimension: { xs: 6 },
            },
            {
                label: "Téléphone",
                name: "phone",
                type: 'phone',
                required: true,
                dimension: { xs: 6 },
            },
            {
                label: "Mot de passe",
                name: "password",
                type: 'password',
                required: true,
            },
            {
                name: "role",
                type: 'hidden',
                required: true,
            },
        ],
        settings: { unableUnderline: false, unableBoxShadow: true, variant: 'outlined', showLabel: true, labelPosition: 'left' }
    }
}