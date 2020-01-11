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
                label: "Âge",
                name: "age",
                type: 'number',
                required: true,
                dimension: { xs: 4 },
                props: {
                    adornment: { value: 'ans', position: 'end' }
                },
                containerClassName: 'form-container-spacing-right'
            },
            {
                label: "Ville",
                name: "city",
                type: 'input',
                required: true,
                dimension: { xs: 8 },
                containerClassName: 'form-container-spacing-left'


            },
            {
                label: "Email",
                name: "email",
                type: 'email',
                required: true,
                dimension: { xs: 6 },
                containerClassName: 'form-container-spacing-right'

            },
            {
                label: "Téléphone",
                name: "phone",
                type: 'phone',
                required: true,
                dimension: { xs: 6 },
                containerClassName: 'form-container-spacing-left'

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
        settings: { unableUnderline: false, unableBoxShadow: true, variant: 'outlined', showLabel: true, labelPosition: 'top|left' }
    }
}