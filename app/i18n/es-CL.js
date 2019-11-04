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
      1: 'Reservada',
      2: 'Confirmada',
      3: 'Asiste',
      6: 'No asiste',
      7: 'Pendiente',
      8: 'Esperando',
    },
    status_plural: {
      1: 'reservadas',
      2: 'confirmadas',
      3: 'a las que asisten',
      6: 'a las que no asisten',
      7: 'pendientes',
      8: 'esperando',
    },
    no_bookings: 'No tienes citas en estas fechas',
    booking_info: 'Información de la cita',
    client_info: 'Información del cliente',
    booking_time: (start, end) => `de ${start} hasta ${end}`,
  },
  commons: {
    edit: 'Editar',
    back: 'Volver',
    save: 'Guardar',
    filters: 'Filtros',
  },
  filters: {
    apply: 'Aplicar filtros',
    reset: 'Limpiar filtros',
    start: 'Desde',
    end: 'Hasta',
    date: 'Fecha de la cita',
    noFilterText: (count, status) => `Tienes ${count} citas ${status} desde Hoy hasta un Mes`,
    withFilterText: (count, status, startDate, endDate) => `Tienes ${count} citas ${status} desde ${startDate} hasta ${endDate}`,
  },
  screens: {
    bookingDetail: {
      headerTitle: 'Detalles de la cita',
    },
    bookingEdit: {
      headerTitle: 'Editar cita',
    },
    Reserved: {
      tabBarLabel: 'Reservada',
    },
    Confirmed: {
      tabBarLabel: 'Confirmada',
    },
    Attended: {
      tabBarLabel: 'Asiste',
    },
    Skipped: {
      tabBarLabel: 'No asiste',
    },
    Pending: {
      tabBarLabel: 'Pendiente',
    },
    Waiting: {
      tabBarLabel: 'Esperando',
    },
  },
};

export default es_CL;
