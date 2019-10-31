const es_CL = {
  booking: {
    label: 'Cita',
    actions: {
      cancel: 'Cancelar cita',
    },
    cancelAlert: {
      title: ({ service }) => `Cancelar la cita ${service}`,
      message: 'No podrás acceder a la cita nuevamente y deberás contactar a soporte para recuperarla',
    },
    properties: {
      service: 'Servicio',
      status: 'Estado',
    },
    status: {
      1: 'Reservado',
      2: 'Confirmado',
      3: 'Asiste',
      6: 'No asiste',
      7: 'Pendiente',
      8: 'Esperando',
    },
  },
  commons: {
    edit: 'Editar',
    back: 'Volver',
    save: 'Guardar',
  },
  screens: {
    bookingDetail: {
      headerTitle: 'Detalles de la cita',
    },
    bookingEdit: {
      headerTitle: 'Editar cita',
    },
  },
};

export default es_CL;
