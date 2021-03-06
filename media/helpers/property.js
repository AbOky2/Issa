const comodityDivider = 'comodity__';
const orientationDivider = 'orientation__';

const lotsResidencesHeader = new Array(21);
lotsResidencesHeader[1] = 'ref';
lotsResidencesHeader[2] = 'residence_ref';
lotsResidencesHeader[3] = 'door';
lotsResidencesHeader[4] = 'typeOfProperty';
lotsResidencesHeader[5] = 'pieces';
lotsResidencesHeader[6] = 'surface';
lotsResidencesHeader[7] = 'floor';
// lotsResidencesHeader[8] = 'price';
lotsResidencesHeader[8] = 'price';
lotsResidencesHeader[10] = 'guarantee';
lotsResidencesHeader[12] = 'contract_end_date';
lotsResidencesHeader[14] = 'available_date';

const residenceHeader = new Array(305);
residenceHeader[1] = 'lot_ref';
residenceHeader[2] = 'heading';
residenceHeader[3] = 'address';
residenceHeader[5] = 'postal';
residenceHeader[6] = 'city';
residenceHeader[19] = `${comodityDivider}Laverie`;
residenceHeader[20] = `${comodityDivider}Point phone`;
residenceHeader[21] = `${comodityDivider}Cafétéria linge`;
residenceHeader[22] = `${comodityDivider}Intendant`;
residenceHeader[23] = `${comodityDivider}ALS`;
residenceHeader[24] = `${comodityDivider}Déjeuné`;
residenceHeader[25] = `${comodityDivider}Télévision`;
residenceHeader[26] = `${comodityDivider}Salle réunion`;
residenceHeader[27] = 'nb_parking';
residenceHeader[28] = `${comodityDivider}Piscine`;
residenceHeader[29] = `${comodityDivider}Linge maison`;
residenceHeader[30] = `${comodityDivider}Service ménage`;
residenceHeader[31] = `${comodityDivider}Photocopieuse`;
residenceHeader[32] = `${comodityDivider}Interphone`;
residenceHeader[33] = `${comodityDivider}Local deux roues`;
residenceHeader[34] = `${comodityDivider}Internet illimité offert`;
residenceHeader[35] = 'description';
residenceHeader[77] = `${comodityDivider}salle de sport`;
residenceHeader[78] = `${comodityDivider}location vaisselle`;
residenceHeader[79] = `${comodityDivider}Internet fibre optique offert`;
residenceHeader[80] = `${comodityDivider}Distributeur de boissons`;
residenceHeader[81] = `${comodityDivider}Vidéo Surveillance`;
residenceHeader[82] = `${comodityDivider}Distributeur Plats Chauds`;
residenceHeader[41] = 'picture_1';
residenceHeader[42] = 'picture_2';
residenceHeader[43] = 'picture_3';
residenceHeader[44] = 'picture_4';
residenceHeader[45] = 'picture_5';
residenceHeader[46] = 'picture_6';
residenceHeader[47] = 'picture_7';
residenceHeader[48] = 'picture_8';
residenceHeader[49] = 'picture_9';
residenceHeader[50] = 'picture_10';
residenceHeader[51] = 'picture_11';
residenceHeader[52] = 'picture_12';
residenceHeader[53] = 'picture_13';
residenceHeader[54] = 'picture_14';
residenceHeader[55] = 'picture_15';
residenceHeader[56] = 'picture_16';
residenceHeader[57] = 'picture_17';
residenceHeader[58] = 'picture_18';
residenceHeader[59] = 'picture_19';
residenceHeader[60] = 'picture_20';
residenceHeader[108] = `${comodityDivider}Autopartage`;
residenceHeader[109] = `${comodityDivider}Accès Internet (Wifi)`;
residenceHeader[111] = `${comodityDivider}Accueil (Gouvernant)`;
residenceHeader[112] = `${comodityDivider}Salle Activité`;
residenceHeader[113] = `${comodityDivider}Salon Tisanerie`;
residenceHeader[114] = `${comodityDivider}Téléassistance`;
residenceHeader[115] = `${comodityDivider}Portage Repas à domicile`;
residenceHeader[116] = `${comodityDivider}Aide-Ménagère`;
residenceHeader[117] = `${comodityDivider}Accompagnement (non) véhiculé`;
residenceHeader[118] = `${comodityDivider}Livraison Course Aide rangement`;
residenceHeader[119] = `${comodityDivider}Préparation des repas`;
residenceHeader[120] = `${comodityDivider}Aide Hygiène Corporel`;
residenceHeader[121] = `${comodityDivider}Stimulation Compagnie Jeux`;
residenceHeader[122] = `${comodityDivider}Garde malade`;
residenceHeader[123] = `${comodityDivider}Dépannage Petits Bricolages`;
residenceHeader[124] = `${comodityDivider}Travaux de Jardinage`;
residenceHeader[125] = `${comodityDivider}Coiffure`;
residenceHeader[126] = `${comodityDivider}Assistance Informatique et Internet`;
residenceHeader[127] = `${comodityDivider}Livraison des courses`;
residenceHeader[128] = `${comodityDivider}Livraison des médicaments`;
residenceHeader[129] = `${comodityDivider}Aide au logement`;
residenceHeader[130] = `${comodityDivider}Défiscalisation`;

const programsHeader = new Array(155);
programsHeader[2] = 'program_ref';
programsHeader[3] = 'postal';
programsHeader[4] = 'city';
programsHeader[5] = 'country';
programsHeader[6] = 'address';
programsHeader[8] = 'heading';
programsHeader[9] = 'description';
programsHeader[11] = 'available_date';
programsHeader[12] = 'is_house';
programsHeader[13] = 'is_appart';
programsHeader[14] = 'is_lend';
programsHeader[15] = 'minPieces';
programsHeader[16] = 'maxPieces';
programsHeader[17] = 'floor';

programsHeader[18] = `${comodityDivider}Piscine`;
programsHeader[19] = `${comodityDivider}Climatisation`;
programsHeader[88] = `${comodityDivider}Calme`;
programsHeader[89] = `${comodityDivider}Câble TV`;
programsHeader[114] = 'picture_1';
programsHeader[115] = 'picture_2';
programsHeader[116] = 'picture_3';
programsHeader[117] = 'picture_4';
programsHeader[118] = 'picture_5';
programsHeader[119] = 'picture_6';
programsHeader[120] = 'picture_7';
programsHeader[121] = 'picture_8';
programsHeader[122] = 'picture_9';
programsHeader[123] = 'picture_10';
programsHeader[124] = 'picture_11';
programsHeader[125] = 'picture_12';
programsHeader[126] = 'picture_13';
programsHeader[127] = 'picture_14';
programsHeader[128] = 'picture_15';
programsHeader[129] = 'picture_16';
programsHeader[130] = 'picture_17';
programsHeader[131] = 'picture_18';
programsHeader[132] = 'picture_19';
programsHeader[133] = 'picture_20';
programsHeader[142] = 'transport_lines';
programsHeader[143] = 'stations';
programsHeader[154] = 'file';
programsHeader[155] = 'lot_ref';

const extraLotsHeader = new Array(100);
extraLotsHeader[3] = 'program_ref';
extraLotsHeader[6] = 'lot_ref';
extraLotsHeader[14] = 'vat';
extraLotsHeader[48] = 'price';

const lotsHeader = new Array(75);
lotsHeader[1] = 'ref';
lotsHeader[2] = 'residence_ref';
lotsHeader[3] = 'lot_ref';
lotsHeader[11] = `${comodityDivider}Exclusivité`;
lotsHeader[12] = 'available_date';
lotsHeader[14] = 'price';
lotsHeader[13] = 'typeOfProperty';
lotsHeader[16] = 'surface';
lotsHeader[18] = 'pieces';
lotsHeader[21] = 'floor';
lotsHeader[29] = `${orientationDivider}Sud`;
lotsHeader[30] = `${orientationDivider}Est`;
lotsHeader[30] = `${orientationDivider}Ouest`;
lotsHeader[30] = `${orientationDivider}Nord`;
lotsHeader[26] = `${comodityDivider}WC séparés`;
lotsHeader[34] = `${comodityDivider}Balcon`;
lotsHeader[35] = `${comodityDivider}Ascenseur`;
lotsHeader[36] = `${comodityDivider}Cave`;
lotsHeader[37] = 'nb_parking';
lotsHeader[39] = `${comodityDivider}Digicode`;
lotsHeader[40] = `${comodityDivider}Interphone`;
lotsHeader[41] = `${comodityDivider}Gardien`;
lotsHeader[42] = `${comodityDivider}Terrasse`;
lotsHeader[43] = 'picture_1';
lotsHeader[44] = 'picture_2';
lotsHeader[45] = 'picture_3';
lotsHeader[46] = 'picture_4';
lotsHeader[47] = 'picture_5';
lotsHeader[48] = 'picture_6';
lotsHeader[49] = 'picture_7';
lotsHeader[50] = 'picture_8';
lotsHeader[51] = 'picture_9';
lotsHeader[52] = 'picture_10';
lotsHeader[53] = 'picture_11';
lotsHeader[54] = 'picture_12';
lotsHeader[55] = 'picture_13';
lotsHeader[56] = 'picture_14';
lotsHeader[57] = 'picture_15';
lotsHeader[58] = 'picture_16';
lotsHeader[59] = 'picture_17';
lotsHeader[60] = 'picture_18';
lotsHeader[61] = 'picture_19';
lotsHeader[62] = 'picture_20';
lotsHeader[72] = 'transport_lines';
lotsHeader[73] = 'stations';
lotsHeader[74] = 'file';

const availableProperties = {
  ref: 'lot ref',
  vat: 'Tva',
  pictures: 'Les images',
  advantages: 'Les avantages',
  typeOfAnnonce: "Type d'annonce",
  typeOfProperty: 'Type de propriété',
  price: 'Prix',
  isNewProperty: 'isNewProperty',
  renew: 'renew',
  surface: 'Surface',
  land_surface: 'Surface terrain',
  nb_pieces: 'Nombre de pieces',
  nb_rooms: 'Nombre de rooms',
  expenses: 'Dépenses',
  floor: 'Étage',
  orientation: 'Orientation',
  south_orientation: 'sud',
  east_orientation: 'est',
  west_orientation: 'ouest',
  north_orientation: 'nord',
  balcony: 'Balcon',
  nb_bathrooms: 'Nombre de salles de bains',
  nb_washrooms: 'Nombre de toilettes',
  nb_wc: 'Nombre de wc',
  is_separate_wc: 'WC séparés',
  nb_balcony: 'Nombre de balcon',
  elevator: 'ascenseur',
  nb_parking: 'Nombre de parking',
  digicode: 'Digicode',
  intercom: 'Intercom',
  lot_ref: 'identifiant technique',
  postal: 'Code postal',
  city: 'Ville',
  country: 'Pays',
  address: 'Adresse',
  district: 'Quartier',
  heading: 'Rubrique',
  description: 'Description',
  available_date: 'Date de disponibilité',
  guardian: 'Gardien',
  terrace: 'Terrasse',
  phone: 'Téléphone',
  contact: 'Contacte',
  email: 'E-mail',
  transport_lines: 'lignes',
  stations: 'Stations',
  property_sub_type: 'Sous type de bien',
  piecesType: 'Type de piece',
  file: 'fichier',
};

const filteredProperties = Object.keys(availableProperties);
const typeOfAnnoncies = ['Vente', 'Location'];
const typeOfProperties = ['Appartement', 'Maison'];

const buyDatas = {
  encoding: 'binary',
  typeOfAnnonce: typeOfAnnoncies[0],
  fileName: 'Programmes',
  header: programsHeader,
  lots: {
    fileName: 'Lots',
    header: lotsHeader,
    encoding: 'utf-8',
  },
  extraLots: {
    fileName: 'lots_enrichi',
    header: extraLotsHeader,
    encoding: 'utf-8',
  },
};

const defaultVat = '20';
const vatCode = {
  '01': '5.5',
  '02': '7.00',
  '03': '13.00',
  '04': '19.6',
  '05': '20.3',
  '06': '33.33',
  '07': '0.00',
  '08': '17.6',
  '09': '18.6',
  10: '0.00',
  13: '8.00',
  20: '5.5',
  22: '10',
  24: '20',
};

const rentDatas = {
  encoding: 'utf-8',
  typeOfAnnonce: typeOfAnnoncies[1],
  fileName: 'residences',
  header: residenceHeader,
  lots: {
    fileName: 'lots_residences',
    header: lotsResidencesHeader,
    encoding: 'utf-8',
    isLocation: true,
    piecesMatch: {
      3: { name: 'Studio', nb: 1 },
      4: { name: 'Type1', nb: 2 },
      5: { name: 'Type1bis', nb: 2 },
      6: { name: 'Type2', nb: 3 },
      21: { name: 'Type2bis', nb: 3 },
      22: { name: 'Type3', nb: 4 },
      23: { name: 'Type4', nb: 5 },
      25: { name: 'Studiome', nb: 1 },
    },
    floorMatch: {
      2: 11,
      3: 4,
      4: -3,
      5: 10,
      6: 8,
      7: 13,
      8: 12,
      10: -1,
      11: 0,
      12: 14,
      13: -2,
      14: 2,
      15: 9,
      16: 5,
      19: 7,
      20: 1,
      21: 6,
      22: 3,
    },
  },
};

module.exports = {
  buyDatas,
  rentDatas,
  vatCode,
  defaultVat,

  typeOfAnnoncies,
  typeOfProperties,
  filteredProperties,
  comodityDivider,
  orientationDivider,
};
