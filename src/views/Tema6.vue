<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Técnicas de identificación de problemas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t6/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Antes de buscar una solución, es indispensable #[b identificar correctamente el problema]; muchas veces se intenta actuar de inmediato sin analizar la situación, lo que lleva a resolver solo lo que se ve en la superficie y no lo que realmente está ocurriendo.
        .cajon.color-secundario.bg3.p-4
          p.mb-0 Identificar un problema significa #[b reconocer que existe], aceptarlo y comprenderlo.

    p Esto implica diferenciar entre:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.bg5.tarjeta
        .row.justify-content-center
          .col-lg-6.col-md-6.p-4.bg6.br-left
            .row.justify-content-center.align-items-center
              .col-lg-2.col-md-3.col-3
                img(src='@/assets/curso/temas/t6/2.svg', alt='')
              .col-lg-10.col-md-9.col-9
                h4.mb-0 El problema real#[br] (la causa)
          .col-lg-6.col-md-6.p-4.bg7.br-right
            .row.justify-content-center.align-items-center
              .col-lg-2.col-md-3.col-3
                img(src='@/assets/curso/temas/t6/3.svg', alt='')
              .col-lg-10.col-md-9.col-9
                h4.mb-0.text-white Los síntomas#[br] (las señales visibles del problema)            
        p.mb-0.p-4.py-3 Por ejemplo, el mal ambiente laboral puede ser un síntoma, mientras que la falta de comunicación o liderazgo puede ser la causa. Si no se identifica la causa, la solución será temporal o poco efectiva.

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="fade-right")
        p Este proceso no siempre es fácil, ya que requiere observación, escucha, análisis y tiempo. Sin embargo, hacerlo bien permite tomar mejores decisiones y evitar que el problema se repita.
        .cajon.color-primario.bg1.p-4.mb-3
          p.mb-0 Por tanto, la solución efectiva de cualquier problema consiste en reconocer su existencia, evitando negarlo, minimizarlo o ignorarlo. Una vez identificado, resulta fundamental definir con precisión cuál es el problema real, ya que con frecuencia se confunden sus causas con sus efectos o manifestaciones externas. Identificar únicamente los síntomas conduce a soluciones parciales o ineficaces; por el contrario, comprender la raíz del problema permite formular intervenciones más acertadas y sostenibles.
        p A continuación, se presentan algunas técnicas clave para la identificación de problemas en el contexto organizacional.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t6/4.png', alt='')

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Técnica de entrevista
        .tabla-a.color-acento-contenido.t2
          table
            thead
              tr
                th.w-25 Aspectos de la técnica de entrevista
                th Explicación por aspecto
            tbody
              tr
                td.h4.fw-bold ¿Cuándo se utiliza?
                td Cuando el conflicto tiene un origen personal y está relacionado con comportamientos, actitudes o relaciones entre personas.
              tr
                td.h4.fw-bold ¿En qué consiste?
                td En establecer un diálogo directo y estructurado con las personas involucradas para comprender la situación desde su punto de vista.
              tr
                td.h4.fw-bold ¿Cómo se aplica?
                td Primero se realizan entrevistas individuales y, si es necesario, luego una conversación conjunta para buscar acuerdos.
              tr
                td.h4.fw-bold ¿Qué es una entrevista?
                td Es un intercambio intencionado de ideas, orientado a comprender un problema específico y no una conversación informal.
              tr
                td.h4.fw-bold Características principales
                td 
                  ul.lista-ul--color.fa-lista
                    li
                      i.fas.fa-puzzle-piece
                      span.mb-0 Tiene una finalidad concreta.
                    li
                      i.fas.fa-puzzle-piece
                      span.mb-0 Posee un objetivo definido.
                    li
                      i.fas.fa-puzzle-piece
                      span.mb-0 Está estructurada cuidadosamente.
                    li
                      i.fas.fa-puzzle-piece
                      span.mb-0 Aborda temas previamente establecidos.
                    li
                      i.fas.fa-puzzle-piece
                      span.mb-0 Es conducida por un entrevistador.
                    li
                      i.fas.fa-puzzle-piece
                      span.mb-0 Su contenido se registra.
              tr
                td.h4.fw-bold Propósito principal
                td Identificar las causas reales del conflicto, generar confianza y facilitar la búsqueda de soluciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .cajon.color-secundario.bg3.p-4.mb-3
          p.mb-0 Para que la entrevista cumpla su propósito como herramienta de identificación de problemas, es indispensable aplicarla de manera respetuosa y planificada. La preparación previa, la escucha activa y una actitud abierta por parte del entrevistador permiten generar un ambiente de confianza en el que las personas se expresen con libertad.
        p Asimismo, garantizar la participación equitativa, contar con apoyo para la mediación y cerrar el proceso con acuerdos claros facilita la identificación de soluciones y la construcción de un plan de acción conjunto.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t6/5.png', alt='')
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Aspectos básicos para realizar una entrevista
        .tabla-a.color-acento-contenido.t3
          table
            thead
              tr
                th.w-25 Aspectos clave
                th Explicación por aspecto
            tbody
              tr
                td.h4 Preparación
                td Definir previamente el objetivo, lugar, fecha y hora de la entrevista.
              tr
                td.h4 Rol del entrevistador
                td Escuchar activamente, con actitud honesta, abierta y sin prejuicios.
              tr
                td.h4 Participación
                td Garantizar que todas las personas puedan expresarse sin interrupciones.
              tr
                td.h4 Actitud
                td Evitar críticas, regaños o descalificaciones; fomentar un ambiente de confianza.
              tr
                td.h4 Apoyo
                td Contar, si es posible, con un testigo que ayude a escuchar y mediar.
              tr
                td.h4 Cierre
                td Identificar soluciones y acordar un plan de acción conjunto.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t6/6.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 La reunión de equipo es una técnica clave para la identificación y análisis de problemas cuando estos afectan a un grupo de trabajo. A través del diálogo organizado y la participación colectiva, permite compartir información, generar ideas y tomar decisiones de manera conjunta; las siguientes tablas presentan, de forma sintética, los aspectos principales de esta técnica y las condiciones básicas para que una reunión sea efectiva y productiva.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Técnica de reunión de equipo
        .tabla-a.color-acento-contenido.t2
          table
            thead
              tr
                th.w-25 Aspectos sobre técnicas de reunión de equipos
                th Explicación por aspecto
            tbody
              tr
                td.h4 ¿Cuándo se utiliza?
                td Cuando los problemas son de tipo laboral u organizacional y afectan a un grupo de trabajo.
              tr
                td.h4 ¿En qué consiste?
                td En reunir a los integrantes del equipo para analizar la situación, compartir información y proponer soluciones.
              tr
                td.h4 ¿Para qué sirve?
                td Para informar, diagnosticar problemas, generar ideas, resolver conflictos y tomar decisiones colectivas.
              tr
                td.h4 Beneficios
                td Reduce rumores, mejora la comunicación, fortalece el trabajo en equipo y permite detectar problemas a tiempo.
              tr
                td.h4 Requisito clave
                td Debe ser bien planificada y moderada para que sea productiva.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Aspectos básicos para una reunión efectiva
        .tabla-a.color-acento-contenido.t3
          table
            thead
              tr
                th.w-25 Aspecto clave
                th Explicación por aspecto
            tbody
              tr
                td.h4 Planeación
                td Definir objetivos, duración, lugar, fecha, asistentes y recursos necesarios.
              tr
                td.h4 Agenda
                td Establecer los temas a tratar y responsables de cada punto.
              tr
                td.h4 Reglas
                td Comunicar claramente cómo se debe participar y respetar los turnos de palabra.
              tr
                td.h4 Duración
                td Evitar reuniones largas; solo extenderlas si son productivas.
              tr
                td.h4 Puntualidad
                td Iniciar y finalizar en el tiempo acordado.
              tr
                td.h4 Moderación
                td Designar una persona que dirija la reunión según la agenda.
              tr
                td.h4 Registro
                td Escuchar y anotar ideas, propuestas y acuerdos.
              tr
                td.h4 Cierre
                td Retroalimentar, resumir y concluir la reunión.
              tr
                td.h4 Seguimiento
                td Definir acciones, responsables y fechas de cumplimiento.
              tr
                td.h4 Participación
                td Colaborar activamente, aun cuando no se sea el organizador.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t6/7.png', alt='')
      .col-lg-7(data-aos="fade-left")
        img.w-75x.mb-3(src='@/assets/curso/temas/t6/8.svg', alt='')
        p La encuesta es una técnica útil para identificar problemas y conocer percepciones cuando se requiere recopilar información de un grupo amplio de personas. Su aplicación permite obtener datos de manera objetiva y organizada, siempre que se siga un proceso estructurado que garantice claridad, confiabilidad y adecuada interpretación de los resultados. Las siguientes tablas resumen los aspectos básicos de la técnica de encuesta y las fases que orientan su correcta aplicación.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 7.
          span Técnica de encuesta
        .tabla-a.color-acento-contenido.t2
          table
            thead
              tr
                th.w-25 Aspectos para técnica de encuesta
                th Explicación por aspecto
            tbody
              tr
                td.h4 ¿Qué es?
                td Una técnica que permite recoger información de varias personas sobre un tema específico.
              tr
                td.h4 ¿Para qué sirve?
                td Para identificar problemas, opiniones y percepciones de forma objetiva y organizada.
              tr
                td.h4 Instrumentos
                td Cuestionario y cédula de entrevista.
              tr
                td.h4 Cuando se recomienda
                td Cuando se requiere conocer la opinión general y no solo casos individuales.

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 8.
          span Proceso de una encuesta
        .tabla-a.color-acento-contenido.t3
          table
            thead
              tr
                th.w-25 Fase
                th Explicación
            tbody
              tr
                td.h4 Definición del estudio
                td Establecer objetivos, fines e hipótesis.
              tr
                td.h4 Variables
                td Determinar qué aspectos se van a medir.
              tr
                td.h4 Diseño
                td Elaborar el cuestionario.
              tr
                td.h4 Validación
                td Probar el instrumento para asegurar claridad y confiabilidad.
              tr
                td.h4 Muestra
                td Seleccionar a las personas que participarán.
              tr
                td.h4 Aplicación
                td Realizar la encuesta.
              tr
                td.h4 Análisis
                td Procesar y analizar los datos recolectados.
              tr
                td.h4 Informe
                td Presentar los resultados obtenidos.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t6/9.png', alt='')

    p.mb-5 El diseño del cuestionario es una etapa clave en la aplicación de la encuesta, ya que de su correcta formulación depende la calidad de la información recolectada. Un cuestionario bien elaborado debe ser claro, coherente con los objetivos del estudio y fácil de responder, de manera que permita obtener datos confiables para el análisis y la toma de decisiones.

    .subt.mb-4(data-aos="fade-right")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Recomendaciones para elaborar una encuesta

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.mb-3.mb-lg-0
        img.mb-4.w-75x(src='@/assets/curso/temas/t6/12.svg', alt='')
        ul.lista-ul--color.fa-lista
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Formular preguntas claras y fáciles de entender.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Evitar preguntas que influyan en la respuesta.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 No hacer encuestas demasiado largas.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Organizar las preguntas por temas.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Usar más preguntas cerradas que abiertas.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Considerar el anonimato cuando el tema sea delicado.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t6/10.png', alt='')          
      .col-lg-4
        img.mb-4.w-75x(src='@/assets/curso/temas/t6/11.svg', alt='')
        .subt2.mb-4
          h4.mb-0.px-3 Formas de aplicar una encuesta
        ul.lista-ul--color.fa-lista
          li
            i.fas.fa-puzzle-piece
            span.mb-0 #[b Telefónica:] pocas preguntas y respuestas rápidas.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 #[b Escrita:] aplicada de forma presencial o física.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 #[b Virtual:] permite responder en cualquier momento y facilita el análisis de resultados.           

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 9.
          span Técnica de diseño del cuestionario
        .tabla-a.color-acento-contenido.t3
          table
            thead
              tr
                th Aspectos para técnica de diseño de cuestionario
                th Explicación por aspecto
            tbody
              tr
                td.h4 Enfoque
                td Las preguntas deben responder a los objetivos del estudio.
              tr
                td.h4 Neutralidad
                td Evitar preguntas que influyan en la respuesta.
              tr
                td.h4 Organización
                td Agrupar preguntas por temas y dificultad progresiva.
              tr
                td.h4 Extensión
                td No hacer cuestionarios demasiado largos.
              tr
                td.h4 Lenguaje
                td Usar palabras claras y sencillas, sin tecnicismos.
              tr
                td.h4 Anonimato
                td Recomendarlo cuando el tema sea sensible.
              tr
                td.h4 Tipo de preguntas
                td Priorizar preguntas cerradas (70 %) sobre abiertas (30 %).  

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
