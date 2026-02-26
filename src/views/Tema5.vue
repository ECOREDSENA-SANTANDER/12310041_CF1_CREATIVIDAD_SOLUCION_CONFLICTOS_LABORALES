<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Clima organizacional

    p Está estrechamente vinculado con la #[b satisfacción laboral], la cual depende, en gran medida, de la adecuada gestión de los conflictos personales y laborales. Cuando estos conflictos se abordan de manera oportuna y efectiva, se favorece un ambiente de trabajo saludable que impacta positivamente en el bienestar de los colaboradores. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg1.p-4.h-100.d-flex.align-items-center
          p.mb-0 En este sentido, el clima organizacional y la satisfacción laboral constituyen variables fundamentales relacionadas con el bienestar de las personas en su entorno de trabajo y con su calidad de vida laboral, influyendo de manera directa en su desempeño y productividad (Chiang, Martín y Núñez, 2010).
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t5/1.png', alt='')          
      .col-lg-4
        img.mb-4.w-75x(src='@/assets/curso/temas/t5/2.svg', alt='')
        p La medición y el análisis del clima organizacional representan un insumo estratégico para la formulación de intervenciones orientadas a su mejoramiento. Por esta razón, su evaluación debe realizarse de manera periódica, de modo que la comparación de resultados en distintos momentos permita identificar tendencias, cambios y efectos de las acciones implementadas (Méndez, 2006).

    .subt.mb-4(data-aos="fade-right")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Tipos de clima organizacional

    p.mb-4 Dadas las diversas aproximaciones conceptuales al clima organizacional, este se ha clasificado en los siguientes tipos:

    .tarjeta--container.row.mb-5
      .col-lg.col-md-4.tarjeta.color-primario.p-4.px-lg-5
        .row.justify-content-center.mb-4
          .col-lg-6.col-md-8.col-4
            img(src='@/assets/curso/temas/t5/tarj1-1.svg', alt='')
        h4.text-center Clima psicológico
        p.mb-0 Corresponde a las percepciones individuales que cada persona tiene sobre su entorno laboral. Es de carácter subjetivo y puede variar significativamente entre individuos.
      .col-lg.col-md-4.tarjeta.color-secundario.p-4.px-lg-5
        .row.justify-content-center.mb-4
          .col-lg-6.col-md-8.col-4
            img(src='@/assets/curso/temas/t5/tarj1-2.svg', alt='')
        h4.text-center Clima agregado
        p.mb-0 Hace referencia a las percepciones compartidas por los miembros de un grupo de trabajo, equipo o departamento.
      .col-lg.col-md-4.tarjeta.color-acento-contenido.p-4.px-lg-5
        .row.justify-content-center.mb-4
          .col-lg-6.col-md-8.col-4
            img(src='@/assets/curso/temas/t5/tarj1-3.svg', alt='')
        h4.text-center Clima colectivo
        p.mb-0 Se presenta cuando existe una percepción común sobre determinadas situaciones organizacionales, independientemente del área o dependencia a la que pertenezcan los individuos.

    .subt2.mb-4(data-aos="fade-right")
      h4.mb-0.px-3 Variables del clima organizacional

    p.mb-4 Dada la relevancia de esta temática para la comprensión de las dinámicas laborales y su impacto en el bienestar y el desempeño de las personas, se ha dispuesto un pódcast como recurso complementario de aprendizaje. Este material permite profundizar en los conceptos abordados, favorecer la reflexión y relacionar la temática con situaciones propias del contexto organizacional. Se invita al aprendiz a consultar este recurso como apoyo a su proceso formativo.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        img(src='@/assets/curso/temas/t5/podcast.svg', alt='')
        .bg3.p-4
          .bg-white.p-3
            TarjetaAudio.color-primario(
              texto="Pódcast: Hablemos de las variables del clima organizacional"
              :audio="require('@/assets/componentes/audios/Podcast-Pensamiento-creativo-resolucion-conflictos-laborales.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Instrumentos para medir el clima organizacional

    p  El cuestionario o encuesta es el instrumento más utilizado para la medición del clima organizacional; en este se seleccionan y organizan las variables previamente definidas, aunque existen instrumentos diseñados por expertos que responden a modelos teóricos específicos. 

    p A continuación, se presentan algunos de los instrumentos más utilizados en Colombia:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta.bg2.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t5/tarj2-1.png', alt='')
          h4.mb-1 Modelo Likert
          p.mb-0 En el contexto colombiano se ha trabajado ampliamente con el modelo inspirado en la teoría de Rensis Likert, el cual concibe el clima organizacional como el resultado de los estilos de dirección. Este modelo relaciona el clima con variables como objetivos organizacionales, liderazgo, comunicación, toma de decisiones, control, relaciones interpersonales, motivación, capacitación y entrenamiento (Méndez, 2006).
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta.bg2.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t5/tarj2-2.png', alt='')
          h4.mb-1 TECLA
          p El instrumento #[b TECLA] fue desarrollado por el colombiano John Sudarsky y se fundamenta en la teoría de la motivación propuesta por David McClelland y J. Atkinson, en la que se identifican las necesidades de afiliación, poder y logro. 
          p.mb-0 Asimismo, incorpora las dimensiones del clima organizacional definidas por Litwin y Stringer, tales como conformidad, responsabilidad, normas, recompensas, claridad organizacional, espíritu de grupo, seguridad y salario (Méndez, 2006).
      .col-lg-4.col-md-6
        .tarjeta.bg2.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t5/tarj2-3.png', alt='')
          h4.mb-1 IMCOC
          p.mb-0 El #[b IMCOC], creado en 1980 por estudiantes de la Universidad del Rosario, es un instrumento basado en el modelo de las relaciones humanas e integra aportes de diversos autores clásicos de la administración y la psicología organizacional. Sus resultados evidencian que el clima organizacional está determinado por factores externos, estructurales, organizacionales e interpersonales, y que este influye de manera directa en el desempeño y la productividad de la organización (Méndez, 2006).



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
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
