<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de la resolución de conflictos laborales

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-1.col-md-2.col-3
          img(src='@/assets/curso/temas/t1/1.svg', alt='')
        .col-lg-11.col-md-10.col-9
          p.mb-0 La resolución de conflictos laborales exige mucho más que la aplicación de normas o procedimientos establecidos; requiere la capacidad de #[b pensar de manera diferente], analizar las situaciones desde múltiples perspectivas y generar soluciones acordes con el contexto organizacional. En este sentido, la creatividad se convierte en una herramienta clave para afrontar los desafíos que surgen en la interacción cotidiana entre las personas.
        
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/2.png', alt='')
        .col-lg-7(data-aos="fade-left")
          p No obstante, la evidencia reportada en diversos estudios indica que la creatividad suele ser asociada de manera predominante con la infancia, partiendo del supuesto equivocado de que, en la etapa adulta, la capacidad de innovación se ve disminuida o incluso perdida. 
          .cajon.color-primario.bg1.p-4
            p.mb-0 Esta concepción se encuentra reforzada por una creencia socialmente generalizada que entiende la creatividad como un rasgo innato y exclusivo de ciertos individuos, desconociendo su carácter de competencia transversal que puede desarrollarse, potenciarse y transferirse a lo largo del ciclo vital mediante procesos formativos intencionados.


      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 La creatividad como habilidad para la solución de problemas

      p La creatividad ha sido ampliamente estudiada desde distintos enfoques de la psicología, por ello, para efectos de este proceso formativo, se adopta la perspectiva de la psicología positiva, la cual sostiene que la creatividad está al alcance de todas las personas y que su desarrollo genera efectos favorables tanto a nivel individual como organizacional.

      .bloque-texto-g.bloque-texto-g--inverso.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t1/3.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4.p-lg-5
          p.mb-0 La creatividad no debe entenderse como un rasgo innato y estático, sino como una competencia susceptible de desarrollarse a través de procesos educativos, la práctica y entornos que promuevan la motivación y el pensamiento flexible (Amabile, 1996).

      p Desde esta mirada, la creatividad no se concibe como un rasgo con el que se nace, sino como una capacidad que #[b se aprende, se practica y se perfecciona]. Implica #[b cuestionar lo establecido, ampliar los puntos de vista, generar nuevas ideas y transformar la realidad que rodea a las personas]. En el ámbito laboral, esta habilidad permite analizar conflictos con mayor profundidad y proponer alternativas de solución más efectivas y responsables.


      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Factores que afectan la creatividad en la solución de conflictos

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-md-7.col-10.mb-3.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/4.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .cajon.color-secundario.bg3.p-4.mb-4
            p.mb-0 Si la creatividad está al alcance de todas las personas, surge una pregunta clave: ¿por qué algunas parecen desarrollarla con mayor facilidad que otras? La respuesta no se encuentra en la ausencia de capacidad creativa, sino en una serie de factores personales, culturales y contextuales que influyen en la forma de pensar, actuar y enfrentar las situaciones cotidianas.
          p Cada individuo interpreta la realidad de manera distinta, de acuerdo con su entorno, experiencias previas, rasgos de personalidad y manera de responder ante los cambios. No obstante, existen factores comunes que pueden limitar la expresión de la creatividad en el ámbito laboral y dificultar la búsqueda de soluciones innovadoras a los problemas. Entre los más relevantes se encuentran:

      .row.justify-content-center.align-items-center
        .col-lg-6(data-aos="fade-right")
          LineaTiempoD.color-acento-botones
            p.mb-0(numero="1" titulo="Pensamiento de única respuesta") Creer que los problemas solo tienen una solución correcta limita la exploración de alternativas. En la realidad, la mayoría de las situaciones laborales admiten múltiples respuestas posibles; aferrarse a lo ya conocido impide adaptarse a contextos cambiantes e impredecibles.
            p.mb-0(numero="2" titulo="Rutina y hábitos rígidos") La tendencia a resolver las situaciones siempre de la misma manera, basada en la costumbre o en procedimientos repetitivos, reduce la capacidad de cuestionar, proponer mejoras y generar nuevas ideas.
            p.mb-0(numero="3" titulo="Zona de confort") Evitar el cambio para mantener una sensación de estabilidad conduce a permanecer en las mismas ideas y prácticas. Esta resistencia limita la innovación y el desarrollo de soluciones creativas frente a nuevos desafíos.
            p.mb-0(numero="4" titulo="Temor o falta de confianza") El miedo a equivocarse, a lo desconocido o a poner a prueba las propias capacidades frena la iniciativa y la disposición a proponer ideas diferentes.
            p.mb-0(numero="5" titulo="Pensamiento negativo") Creencias como “no soy creativo”, “esto no va a funcionar” o “nada va a cambiar” afectan la motivación y bloquean el esfuerzo por buscar soluciones alternativas.
        .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/5.png', alt='')


  </template>

<script>
export default {
  name: 'Tema1',
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
