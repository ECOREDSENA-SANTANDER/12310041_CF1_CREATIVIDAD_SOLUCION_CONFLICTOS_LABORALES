<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Identificación y definición de los problemas en el trabajo

    p En el entorno laboral, los problemas pueden aparecer en cualquier momento y en distintas situaciones. Son parte natural de la convivencia y del trabajo en equipo, por lo que, tarde o temprano, todas las personas deben enfrentarse a ellos.
    
    .row.justify-content-center.align-items-center
      .col-lg-5.col-md-7.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .cajon.color-secundario.bg3.p-4.mb-4
          p.mb-0.fw-bold La buena noticia es que todo problema tiene una solución o, al menos, una forma diferente y más constructiva de analizarlo.
        p Aunque algunos problemas resultan más complejos que otros, todos dejan aprendizajes importantes. En muchos casos, incluso pueden convertirse en oportunidades de mejora, crecimiento personal y fortalecimiento de las relaciones laborales.
        p En esta etapa, el objetivo es que el aprendiz logre identificar los problemas en el trabajo, reconocer sus causas y consecuencias, y aprenda a definirlos adecuadamente, teniendo en cuenta el contexto de la organización, como paso fundamental para encontrar soluciones creativas y efectivas.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Tipos de problemas en el trabajo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Según estudios sobre el comportamiento organizacional, los conflictos en el entorno laboral suelen clasificarse en dos grandes categorías: conflictos laborales y conflictos personales.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t3/3.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 En las organizaciones no solo influyen los objetivos empresariales, sino también las emociones, experiencias y relaciones humanas. Por esta razón, los problemas personales y los problemas laborales suelen estar relacionados y no siempre es fácil separarlos. Las dificultades aumentan cuando los sentimientos personales afectan el juicio profesional y la forma de tomar decisiones.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/2.png', alt='')
    
    p Para identificar correctamente el tipo de problema, es fundamental observar y escuchar atentamente la situación:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-acento-contenido.br-top.h-100
          img(src='@/assets/curso/temas/t3/4.png', alt='')
          p.p-4.mb-0 Si predominan las emociones, la falta de confianza o el irrespeto entre las personas, se trata de un conflicto personal.
      .col-lg-6
        .bg-color-acento-contenido.br-top.h-100
          img(src='@/assets/curso/temas/t3/5.png', alt='')
          p.p-4.mb-0 Si el problema involucra procesos, normas, tareas o decisiones que afectan a varios miembros de la organización, se considera un conflicto laboral o colectivo.



    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Conflicto personal o individual


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Los conflictos personales suelen presentarse entre una o dos personas, pero si no se gestionan adecuadamente, pueden extenderse al resto del equipo de trabajo; esto afecta el clima laboral, la comunicación y finalmente, la productividad de la organización. Por esta razón, es importante que:
        ul.lista-ul--color.fa-lista
          li
            i.fas.fa-puzzle-piece
            span.mb-0 El personal directivo identifique estos conflictos a tiempo y promueva soluciones oportunas.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Los colaboradores participen activamente en la solución, actuando de manera respetuosa y responsable.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/6.png', alt='')

    p.mb-4 A continuación, se describen algunos de los conflictos personales más comunes en el trabajo:

    .mb-4(data-aos="fade")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Tipos de conflictos personales
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Tipo de conflicto
              th Descripción
              th Manifestaciones o consecuencias
              th Recomendaciones para su manejo
          tbody
            tr
              td.h4.fw-bold Frustración
              td.text-start Surge cuando una persona no logra alcanzar una meta, satisfacer una necesidad o cumplir una expectativa importante, generando malestar emocional y afectando el desempeño laboral.
              td.text-start Obstinación, evitación, agresividad, abandono de tareas, bajo rendimiento y deterioro del clima laboral.
              td.text-start Replantear expectativas y metas, adaptarse a situaciones fuera de control, mantener la calma, expresar sentimientos de forma asertiva y promover el diálogo. En roles directivos, identificar a tiempo y reorientar funciones si es necesario.
            tr
              td.h4.fw-bold Estrés
              td.text-start Se presenta como una respuesta ante exigencias laborales percibidas como excesivas o amenazantes, como sobrecarga de trabajo, presión por resultados o mala organización.
              td.text-start Malas relaciones laborales, desgaste emocional, disminución de la productividad y afectación del bienestar personal.
              td.text-start Identificar los agentes estresantes, mejorar la organización del trabajo, gestionar el tiempo y fortalecer estrategias de autocuidado y equilibrio emocional.




</template>

<script>
export default {
  name: 'Tema3',
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
