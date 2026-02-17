<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p A partir de los temas desarrollados, se evidencia que la gestión de los conflictos laborales requiere una comprensión integral que articule el pensamiento creativo, las dinámicas organizacionales y los factores humanos que intervienen en el trabajo. Reconocer el conflicto como parte natural de la organización permite analizarlo con mayor objetividad, fortalecer la toma de decisiones y promover soluciones responsables que favorezcan el bienestar individual y colectivo. 
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis integra el pensamiento creativo como eje central para la resolución de conflictos laborales, relacionándolo con el reconocimiento del conflicto organizacional, los factores emocionales y contextuales, y los obstáculos que limitan la creatividad. Asimismo, articula el impacto del estrés, el burnout y el acoso laboral con el clima organizacional, destacando la definición y el análisis del conflicto como base para una toma de decisiones consciente y efectiva. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
