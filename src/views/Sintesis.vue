<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p.mb-4 El componente formativo presenta el diagnóstico organizacional como un proceso participativo, sistemático y contextualizado que permite reconocer la situación real de las organizaciones solidarias. A partir de este enfoque, se abordan los conceptos, características, enfoques y fases del diagnóstico, así como herramientas de análisis DOFA, las encuestas, las entrevistas, la observación, el grupo focal, el árbol de problemas y el mapa de procesos, con el fin de identificar fortalezas, debilidades, necesidades y oportunidades de mejora en contextos comunitarios.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-primario.px-4.py-3
            p.mb-0 El recorrido también integra el análisis del entorno territorial, la identificación de necesidades comunitarias, el reconocimiento de recursos disponibles, el trabajo colaborativo y la formulación de iniciativas solidarias. De esta manera, el componente permite comprender la relación entre diagnóstico, territorio, recursos y oportunidades, para priorizar problemáticas, construir redes y alianzas, evaluar la viabilidad de las propuestas y fortalecer acciones orientadas al bienestar colectivo en el contexto colombiano.

      p.mb-4 A continuación, se presenta el mapa conceptual que organiza de manera visual los ejes temáticos del componente formativo y las relaciones que los articulan:

      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual presenta el componente “Diagnóstico y oportunidades solidarias”, organizado en seis ejes temáticos: diagnóstico en organizaciones solidarias, herramientas de diagnóstico, contexto territorial y necesidades comunitarias, recursos para desarrollo territorial, trabajo colaborativo comunitario y oportunidades para iniciativas solidarias. Cada eje integra subtemas que orientan la comprensión del diagnóstico, el análisis del territorio, la gestión de recursos, la cooperación comunitaria y la formulación de iniciativas. En conclusión, el mapa muestra una ruta de aprendizaje para transformar la información del diagnóstico en acciones solidarias pertinentes, viables y sostenibles.")
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
