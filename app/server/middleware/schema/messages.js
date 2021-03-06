module.exports = {
  msg: ({ name }) => ({
    'string.email': `${name} est invalide`,
    'string.base': `${name} doit être un texte`,
    'string.empty': `${name} doit être renseigné`,
    'string.min': `${name} doit contenir un minimum de {#limit} caractères`,
    'any.required': `${name} est obligatoire`,
  }),
  keys: {
    id: 'Identifiant',
    message: 'Message',
    user: {
      token: 'Token',
      picture: "L'image",
      bookmarks: 'Les favories',
      firstName: 'Le prénom',
      lastName: 'Le nom',
      slug: 'Le slug',
      age: "L'age'",
      email: "L'email",
      password: 'Le mot de passe',
      phone: 'Le numéro de téléphone',
      role: 'Le statut',
      status: 'Le statut',
      offset: "L'offset",
      limit: 'La limit',
      referrer_url: "L'origin",
      sponsorshipCode: 'le code de parrainage',
    },
    partner: {
      name: 'Le nom',
      picture: "L'image",
      cover: "L'image de couverture",
      type: 'Le type',
      description: 'La description',
      why: 'La raison',
      content: 'Le contenu',
      link: 'Le lien',
      position: 'La position',
    },
  },
};
