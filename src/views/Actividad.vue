<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono='far fa-question-circle', titulo='Actividad didáctica')
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad_Cuestionario
    <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import ActividadCompletar from '@/views/plantilla/actividadCompletar/ActividadCompletar.vue'
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadCompletar,
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Pensamiento creativo y resolución de conflictos laborales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con el pensamiento creativo y su aplicación en la identificación y resolución de conflictos laborales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Por qué el conflicto laboral se considera un fenómeno natural dentro de la organización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque siempre genera sanciones disciplinarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque surge de la interacción entre personas con intereses y experiencias diferentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque depende únicamente del liderazgo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque se presenta solo cuando hay fallas normativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 2,
          texto:
            '¿Qué permite el pensamiento creativo en la resolución de conflictos laborales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar toda forma de conflicto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar problemas desde una sola perspectiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar soluciones innovadoras y responsables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar las normas organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 3,
          texto: '¿Cómo se concibe la creatividad desde el enfoque formativo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como un rasgo innato y exclusivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Como una competencia desarrollable y transversal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Como una habilidad limitada a la infancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como una capacidad artística únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 4,
          texto:
            '¿Qué relación existe entre pensamiento creativo y emociones en el entorno laboral?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No existe relación directa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las emociones limitan siempre la creatividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las emociones influyen en la forma de pensar y resolver conflictos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El pensamiento creativo elimina las emociones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes es un factor personal que puede afectar la creatividad?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Miedo al error.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cultura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Infraestructura tecnológica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Normativa legal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 6,
          texto: '¿Qué se entiende por bloqueos de la creatividad?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Técnicas para generar ideas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Barreras que limitan el pensamiento flexible.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estrategias de innovación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 7,
          texto: '¿A qué se asocian principalmente los bloqueos emocionales?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falta de recursos económicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exceso de capacitación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inseguridad, miedo y baja autoestima.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Desconocimiento normativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 8,
          texto:
            '¿Cuándo el estrés laboral se convierte en un factor negativo?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando es moderado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando impulsa la productividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando genera motivación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando es intenso o prolongado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 9,
          texto:
            '¿Qué caracteriza al síndrome de desgaste profesional o <em>burnout</em>?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conflictos ocasionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Agotamiento físico y mental sostenido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Falta de habilidades técnicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambios temporales de humor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 10,
          texto: '¿Cuál es el objetivo principal del acoso laboral?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Corregir el desempeño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer la jerarquía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Deteriorar emocionalmente a la persona afectada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mejorar la comunicación interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 11,
          texto: '¿Con qué se relaciona directamente el clima organizacional?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tamaño de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La satisfacción laboral.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tipo de contrato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La antigüedad del trabajador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 12,
          texto:
            '¿Por qué es importante identificar correctamente un problema laboral?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para aplicar soluciones inmediatas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para evitar el análisis.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para diferenciar causas y consecuencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para asignar responsabilidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 13,
          texto: '¿Qué diferencia existe entre un problema real y un síntoma?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No existe diferencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El síntoma es la causa principal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambos se solucionan igual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El problema real origina los síntomas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 14,
          texto: '¿Cuándo se recomienda utilizar la técnica de la entrevista?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando el problema es colectivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando el conflicto tiene origen personal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuando se requiere medir clima organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando se aplican sanciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 15,
          texto:
            '¿Para qué se utiliza la reunión de equipo en la identificación de problemas?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para sancionar al grupo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para evitar la comunicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para analizar situaciones y tomar decisiones conjuntas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para reemplazar otras técnicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 16,
          texto:
            '¿En qué situación resulta más pertinente aplicar una encuesta?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En conflictos individuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando se requiere información de un grupo amplio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'En discusiones informales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En entrevistas personales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 17,
          texto:
            '¿Por qué la definición adecuada del conflicto es clave para la toma de decisiones?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque permite comprender su origen y alcance.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque evita el diálogo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque acelera sanciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque reduce la participación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 18,
          texto:
            '¿Qué aporta el análisis de causas y consecuencias en la gestión del conflicto?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Soluciones temporales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mayor confusión del problema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Intervenciones más efectivas y sostenibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminación automática del conflicto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 19,
          texto:
            '¿Cómo contribuye el pensamiento creativo a los ambientes laborales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementando la presión laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitando toda diferencia de opinión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazando los procesos formales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Favoreciendo soluciones responsables y colaborativas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
        {
          id: 20,
          texto:
            '¿De qué manera la gestión consciente de los conflictos favorece a la organización?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generando mayor control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortaleciendo el logro de los objetivos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminando la diversidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centralizando las decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el conflicto laboral y su papel dentro de la organización.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el conflicto laboral y su comprensión como parte de la dinámica organizacional.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
