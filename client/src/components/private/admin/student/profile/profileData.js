// import { getCities } from '../../../../../services/externalService'
// const schooLlist = await getCities();
// console.log(schooLlist)
const Variables = [
    {
        label: "Prénom",
        name: "firstName",
        type: 'input'
    },

    {
        label: "Nom",
        name: "lastName",
        type: 'input'
    },

    {
        label: "Ecole",
        name: "school",
        type: 'select'
    },

    {
        label: "Téléphone",
        name: "phone",
        type: 'input'
    },

    {
        label: "Âge",
        name: "age",
        type: 'date'
    },

    {
        label: "Email",
        name: "email",
        type: 'email'
    },

].map((e, i) => ({ ...e, dimension: { xs: 6 }, containerClassName: `form-container-spacing-${i % 2 == 0 ? 'right' : 'left'}` }))

export default {
    field: [
        {
            name: "picture",
            type: 'upload',
            required: true,
            props: {
                style: {
                    textAlign: 'center'
                }
            }
        },
        ...Variables
    ],
    settings: { unableUnderline: false, unableBoxShadow: true, variant: 'outlined' }
}