function setVisitasToClient(visitas) {
    if(visitas){ 
        return visitas.map((visita) => {    
            visita.actividades = visita.actividad;
            delete visita.actividad;
            visita.actividades.map(actividad => {
                actividad.subMotivo.titulo = actividad.subMotivo.descripcionEmpresa;
                actividad.subMotivo.resumen = actividad.subMotivo.informacionComplementariaResumenEmpresa;
                delete actividad.subMotivo.informacionComplementariaResumenEmpresa;
                delete actividad.subMotivo.descripcionEmpresa;
                return actividad
            })
            visita.sucursal.empresa.empresaId = visita.sucursal.empresaId;
            delete visita.sucursal.empresaId;
            visita.empresa = visita.sucursal.empresa
            delete visita.sucursal.empresa;
            visita.empresa.sucursal = visita.sucursal;
            delete visita.sucursal;
            return visita;
        })
    }
    return visitas;
}

module.exports = {
    setVisitasToClient
}