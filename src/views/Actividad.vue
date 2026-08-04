<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diagnóstico participativo: identificación de oportunidades en mi territorio.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> aplicar herramientas de diagnóstico organizacional y territorial para identificar oportunidades de desarrollo solidario en un contexto comunitario específico, mediante la presentación de un cuestionario.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es el diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un proceso de análisis de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un informe financiero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un plan de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un registro contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El diagnóstico organizacional permite analizar la situación de una organización para reconocer fortalezas, debilidades y oportunidades de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una característica del diagnóstico en la economía solidaria?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Individual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Participativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Autoritario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En la economía solidaria, el diagnóstico es participativo porque integra la voz, la experiencia y los aportes de sus integrantes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué herramienta identifica fortalezas, debilidades, oportunidades y amenazas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mapa mental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cronograma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Análisis DOFA.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis DOFA permite reconocer factores internos y externos para orientar decisiones de mejora en una organización solidaria.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué permite la recolección de información en el diagnóstico?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obtener datos sobre la situación de la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La recolección de información aporta datos sobre la situación de la organización y facilita una lectura más clara de su realidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué se entiende por caracterización del territorio?',
          imagen: '@/assets/actividad/imagen5v.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un mapa geográfico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un presupuesto territorial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un proceso de recopilación de información sobre las condiciones del territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un plan de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La caracterización del territorio permite recopilar información sobre sus condiciones geográficas, sociales, económicas y culturales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es un tipo de recurso del territorio?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recursos virtuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recursos humanos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Recursos hipotéticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recursos externos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los recursos humanos hacen parte de las capacidades del territorio, porque reúnen conocimientos, habilidades y experiencias de las personas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué promueve el trabajo colaborativo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Coordinación de esfuerzos hacia objetivos comunes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Control estricto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El trabajo colaborativo promueve la coordinación de esfuerzos para alcanzar objetivos comunes y fortalecer la acción colectiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué es una oportunidad en contextos territoriales?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un riesgo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una amenaza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una debilidad interna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una condición favorable del entorno que puede aprovecharse.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Una oportunidad es una condición favorable del entorno que puede aprovecharse para fortalecer iniciativas solidarias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál es un enfoque del diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Autoritario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Participativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Individual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Financiero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El enfoque participativo permite que los integrantes aporten información, analicen la realidad y construyan acuerdos colectivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué permite el mapa de actores?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar y analizar las personas u organizaciones con influencia en una iniciativa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar finanzas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El mapa de actores permite identificar personas, organizaciones o instituciones que influyen en una iniciativa o territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué analiza la viabilidad económica de una iniciativa?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El impacto ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La aceptación social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Si genera ingresos suficientes para sostenerse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La estructura organizativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La viabilidad económica permite revisar si una iniciativa puede generar ingresos, cubrir costos y sostenerse en el tiempo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué es el capital social de un territorio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El dinero disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las redes de confianza y cooperación entre los actores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La infraestructura física.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los recursos naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El capital social está formado por redes de confianza, cooperación y apoyo entre los actores del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el propósito de priorizar problemáticas en el diagnóstico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar conflictos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enfocar los esfuerzos en los problemas de mayor impacto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar actores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la participación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Priorizar problemáticas ayuda a concentrar los esfuerzos en las situaciones de mayor impacto para la organización y la comunidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué elemento distingue al trabajo colaborativo del trabajo individual?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La construcción conjunta de resultados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El trabajo colaborativo se distingue porque sus integrantes construyen juntos un resultado común.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué busca la formulación de iniciativas solidarias?',
          imagen: '@/assets/actividad/imagen5v.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Maximizar utilidades individuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Traducir el análisis de oportunidades en propuestas concretas de acción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de asociados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la participación comunitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La formulación de iniciativas convierte el análisis de oportunidades en propuestas concretas, organizadas y viables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué permite la articulación comunitaria?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la burocracia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Vincular actores en torno a objetivos y proyectos comunes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la comunicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centralizar decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La articulación comunitaria vincula actores en torno a objetivos comunes y fortalece la cooperación en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Cuál es una fase del diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación de personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción de costos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Recolección de información.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cierre de procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La recolección de información es una fase clave del diagnóstico, porque permite obtener datos para analizar la realidad organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué permite identificar el análisis del entorno organizacional?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo las fortalezas internas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los factores externos que influyen en la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente los costos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La nómina de trabajadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis del entorno permite reconocer factores externos que influyen en el funcionamiento y desarrollo de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué relación existe entre necesidades y recursos en el territorio?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son conceptos opuestos sin relación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar brechas y oportunidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo aplica al sector financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es irrelevante para la planeación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Relacionar necesidades y recursos permite identificar brechas, capacidades disponibles y oportunidades para formular iniciativas solidarias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué busca el desarrollo territorial en la economía solidaria?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Concentración de riqueza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Control externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Competencia entre comunidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejorar la calidad de vida local.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El desarrollo territorial en la economía solidaria busca mejorar la calidad de vida mediante el uso responsable de capacidades y recursos locales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Has superado la actividad. Sus respuestas evidencian comprensión del diagnóstico organizacional, el análisis territorial, los recursos disponibles, el trabajo colaborativo y la formulación de iniciativas solidarias.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
