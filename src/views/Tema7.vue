<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Técnicas de definición de problemas en el entorno laboral

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Hasta este momento, se han abordado diversas técnicas para la identificación de problemas laborales, tales como la entrevista, la reunión de equipo y la encuesta. 
        p Estas herramientas permiten recopilar información, escuchar diferentes puntos de vista y reconocer las situaciones que generan conflicto dentro de la organización.
        .cajon.color-primario.bg1.p-4
          p.mb-0 No obstante, identificar un problema no implica que este esté claramente definido. En esta etapa suelen aparecer múltiples situaciones, síntomas y percepciones que, si no se analizan de manera cuidadosa, pueden generar confusión o conducir a la intervención de aspectos secundarios que no corresponden al núcleo del conflicto.
      .col-lg-5.col-md-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/t7/1.png', alt='')
    
    p Por ello, una vez identificada y recopilada la información sobre una situación problemática en el entorno laboral, el siguiente paso consiste en definir con claridad el conflicto. Una definición adecuada permite comprender su origen, alcance e impacto, y constituye la base para la búsqueda de soluciones efectivas.
    p Este proceso implica analizar la información recolectada, diferenciando causas versus consecuencias y desarrollar tres acciones fundamentales:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.mb-3.mb-lg-0
        .tag-shape.tag-shape_2-1.h-100.p-5
          p.mb-0 Elaborar un listado de los problemas identificados.
      .col-lg-4.mb-3.mb-lg-0.px-lg-0
        .tag-shape.tag-shape_2-2.h-100.p-4.px-5
          p.mb-0 Revisar y depurar la información, integrando problemas similares y priorizando aquellos que pueden abordarse de acuerdo con los recursos y posibilidades de la organización.
      .col-lg-4.mb-3.mb-lg-0
        .tag-shape.tag-shape_2-3.h-100.p-5
          p.mb-0 Delimitar el problema, formulándolo de manera clara y precisa.

    .subt.mb-4(data-aos="fade-right")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Técnicas para definir conflictos
    
    p Para apoyar este proceso se emplean diversas herramientas, entre las cuales se destacan:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t7/2.png', alt='')
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul--color.color-primario.fa-lista
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Cuadro comparativo, que permite priorizar problemas según su frecuencia, impacto, gravedad y posibilidad de solución.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Método de los ocho interrogantes (qué, por qué, para qué, cómo, cuándo, dónde, cuánto y quién), útil para analizar el problema desde distintas perspectivas.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Diagrama causa – efecto, que organiza de manera lógica las causas del conflicto y sus relaciones.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Diagrama de afinidad, que agrupa problemas o causas relacionadas en situaciones de alta complejidad.
          li
            i.fas.fa-puzzle-piece
            span.mb-0 Diagrama de relaciones, el cual facilita la identificación de causas, efectos y factores clave cuando los problemas se encuentran interconectados.
        .cajon.color-acento-contenido.bg4.p-4.py-lg-5
          p.mb-0 Definir adecuadamente un conflicto laboral es una condición esencial para tomar decisiones acertadas y proponer soluciones viables, coherentes y sostenibles dentro de la organización.

    .mb-5(data-aos="fade")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 10.
        span Técnicas de análisis para la solución de problemas laborales
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Técnica
              th ¿En qué consiste?
              th ¿Para qué sirve?
              th Ejemplo sencillo
          tbody
            tr
              td.fw-bold Cuadro comparativo
              td Es una tabla que permite comparar dos o más problemas usando los mismos criterios.
              td Ayuda a decidir cuál problema es más importante o urgente de atender.
              td Comparar la falta de puntualidad y la baja comunicación en un equipo de trabajo para definir cuál afecta más el desempeño.
            tr
              td.fw-bold Ocho interrogantes básicos
              td Consiste en hacer preguntas clave como qué, por qué, cómo, cuándo y quién.
              td Permite comprender el problema de manera completa antes de buscar soluciones.
              td Analizar un conflicto laboral preguntando qué ocurre, por qué sucede y a quién afecta.
            tr
              td.fw-bold Diagrama causa -- efecto
              td Organiza las causas de un problema en diferentes grupos (personas, métodos, entorno, etc.).
              td Ayuda a identificar las causas reales del problema y no solo sus consecuencias.
              td Identificar las causas de retrasos en las tareas del área administrativa.
            tr
              td.fw-bold Diagrama de afinidad (método KJ)
              td Agrupa problemas o ideas similares en categorías comunes.
              td Facilita ordenar mucha información y encontrar temas principales.
              td Reunir quejas de empleados y agruparlas por clima laboral, comunicación o liderazgo.
            tr
              td.fw-bold Diagrama de relaciones
              td Expone cómo se conectan los problemas entre sí, indicando causas y efectos.
              td Permite identificar qué factores influyen más y cuáles son consecuencias.
              td Analizar cómo la sobrecarga de trabajo se relaciona con el estrés laboral y la disminución del rendimiento.

    .bloque-texto-g.bloque-texto-g--inverso.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t7/3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El pensamiento creativo se consolida como una competencia esencial para comprender y gestionar los conflictos laborales de manera consciente y responsable. Al reconocer que el conflicto forma parte de la dinámica organizacional, se fortalece la capacidad para analizar las situaciones desde múltiples perspectivas, identificando sus causas reales y proponer soluciones pertinentes. 
        p.mb-0 Este enfoque contribuye a la toma de decisiones fundamentadas, al mejoramiento del clima organizacional y a la construcción de ambientes de trabajo más sanos, productivos y orientados al aprendizaje continuo.


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
