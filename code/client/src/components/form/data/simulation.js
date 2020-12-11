export default {
    create: {
        field: [
            {
                label: "J’achète",
                name: "buy_or_rommer",
                type: 'radio',
                required: true,
                list: [{ name: 'Seul', value: 'alone' }, { name: 'à deux', value: 'two' }],
            },
            {
                label: "Mon salaire",
                name: "salary",
                type: 'number',
                props: {
                    adornment: { value: '€  / mois', position: 'end' },
                },
                required: true,
            },
            {
                label: "Salaire du co-emprunteur",
                name: "co-borrower_salary",
                type: 'number',
                props: {
                    adornment: { value: '€  / mois', position: 'end' },
                },
                required: true,
            },
            {
                label: "Mon apport",
                name: "contribution",
                type: 'input',
                props: {
                    adornment: { value: '€', position: 'end' },
                },
                required: true,
            },
            {
                label: "J’ai un autre crédit en cours",
                name: "have_credit",
                type: 'radio',
                required: true,
                list: [{ name: 'oui', value: 'true' }, { name: 'non', value: 'false' }],
            },
        ],
        settings: { unableUnderline: false, unableBoxShadow: true, variant: 'outlined', showLabel: true, labelPosition: 'left' }
    }
}