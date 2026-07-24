<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      
      .row.justify-content-center.mb-4
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
            p.mb-0(data-aos="fade-down") El diagnóstico organizacional en la economía solidaria permite reconocer la realidad interna de una organización y su relación con el territorio donde actúa. A partir de este proceso, se identifican necesidades, recursos, problemáticas, actores y oportunidades que orientan la toma de decisiones y el fortalecimiento de iniciativas solidarias en contextos comunitarios.
          .row.mb-0
            p.mb-0 Desde esta perspectiva, el diagnóstico no se entiende como una actividad aislada, sino como un proceso participativo que relaciona la vida interna de la organización con las dinámicas sociales, económicas, culturales y productivas del entorno. Esta mirada integral facilita comprender los factores que favorecen o limitan el desarrollo de las organizaciones solidarias y permite orientar acciones más pertinentes para la comunidad.
        .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/intro/img-01.png', alt='')

      .row.justify-content-center.align-items-stretch.mb-4.g-0.recurso-c10-ajuste
        .col-lg-7.col-12.order-lg-2.order-2
          .cajon.C10.c10-icono-arriba.p-4.h-100.w-100
            .row.mb-0
              .col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/intro/img-03.svg', alt='')
              .col-lg-10.col-12
                p.mb-0 De manera complementaria, el componente aborda herramientas básicas para analizar la organización y el territorio, como la matriz DOFA, las técnicas de recolección de información, el análisis del entorno y la priorización de problemáticas. También se reconoce la importancia de identificar recursos naturales, humanos, físicos, económicos, sociales, institucionales, culturales y tecnológicos que pueden aportar al desarrollo territorial.
        .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/intro/img-02.png', alt='')

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-primario.px-4.py-3
            p.mb-0 Finalmente, el recorrido fortalece la comprensión del trabajo colaborativo, la articulación comunitaria, la construcción de redes y alianzas, y la formulación de iniciativas solidarias viables. Estos elementos permiten proyectar acciones sostenibles, pertinentes y orientadas al bienestar colectivo, a partir de las necesidades reales y las capacidades presentes en las comunidades.

      p.mb-4 Para ampliar la comprensión de los conceptos abordados y relacionarlos con situaciones propias de las organizaciones solidarias y sus territorios, se recomienda acceder al recurso audiovisual que acompaña esta sección.
                  
      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/APMQH8Pkm8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
