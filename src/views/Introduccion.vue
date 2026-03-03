<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Los conflictos laborales forman parte natural de la dinámica organizacional, ya que emergen de la interacción constante entre personas con distintos intereses, valores, experiencias, estilos de comunicación y formas de asumir sus responsabilidades. Más allá de entenderse únicamente como situaciones problemáticas, estos escenarios representan oportunidades para fortalecer el pensamiento, mejorar los procesos y promover relaciones laborales más sólidas, siempre que sean abordados de manera consciente, creativa y responsable.
        p El componente #[b Pensamiento creativo y resolución de conflictos laborales] orienta al aprendiz hacia el desarrollo de habilidades que le permiten analizar situaciones reales del entorno organizacional, reconocer sus implicaciones y asumir una postura propositiva frente a los desafíos que surgen en el ejercicio de sus funciones. 

    p Para dar cumplimiento a este propósito, se han diseñado actividades orientadas a estimular la creatividad, el análisis crítico y la reflexión, que permiten al aprendiz reconocer situaciones problemáticas del entorno laboral y construir alternativas de solución coherentes con los objetivos de la organización y el nivel de responsabilidad asociado a sus funciones.

    p.mb-4 De este modo, el componente fortalece no solo la capacidad de comprender el conflicto desde una perspectiva integral, sino también la toma de decisiones fundamentadas, el diálogo asertivo y la gestión responsable de las relaciones interpersonales. Esto contribuye a la consolidación de ambientes de trabajo sanos, productivos y respetuosos, donde el conflicto se asume como un elemento transformador que impulsa el aprendizaje.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/UkOUZkfvIyw?si=9tuFer4pfYakTy_5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Pensamiento creativo y resolución de conflictos laborales


</template>

<script>
export default {
  name: 'Introduccion',
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
