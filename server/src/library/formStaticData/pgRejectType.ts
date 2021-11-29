export const pgRejectType = [
  {
    id_rtype: 1,
    type: 'Tolerances',
    description: 'Rechazo por tolerancias',
  },
  {
    id_rtype: 2,
    type: 'Dimmensions',
    description: 'No se fabrica con esas dimensiones',
  },
  {
    id_rtype: 3,
    type: 'Material',
    description: 'No se dispone de material',
  },
  {
    id_rtype: 4,
    type: 'Geometry',
    description: 'No se puede cumplir la geometr',
  },
  {
    id_rtype: 5,
    type: 'Holiday',
    description: 'Fuera del trabajo por vacaciones',
  },
  {
    id_rtype: 6,
    type: 'Other',
    description: 'Otros motivos',
  },
];
