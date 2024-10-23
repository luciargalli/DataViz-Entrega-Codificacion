import React from 'react';

const DataVizTemplate = () => {
  return (
    <div>
      <header className="flex flex-col justify-center items-center text-center">
      <div style={{ width: '300px', height: '300px' }}>
      <img src="/olimpiadas.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
    </div>

      </header>
      
      
      <main>

    <section className="flex flex-col justify-center items-center text-center" >
      
      <div>
      <h1 className="text-6xl font-bold mb-4 text-[#28305F]">
            CODIFICACIÓN VISUAL
          </h1>
  
          <p className="text-lg mb-4 text-[#6A73AF] font-semibold">
            JUEGOS OLÍMPICOS: PARÍS 2024 
          </p>
          </div>

          </section>

        <section className="flex flex-col justify-center items-center text-center space-y-0">

          <p className="text-lg mb-2 text-[#6A73AF] font-normal mt-24">
            PALETA DE COLORES
          </p>

          <div style={{ width: '500px', height: '200px' }}>
          <img src="/paleta1.svg" alt="SVG Image" style={{ width: '100%', height: '50%' }} />
          </div>

          <p className="text-lg mb-2 text-[#6A73AF] font-normal">
            PALETA: VARIACIONES
          </p>

          <div style={{ width: '500px', height: '200px' }}>
          <img src="/paleta2.svg" alt="SVG Image" style={{ width: '100%', height: '50%' }} />
          </div>

    <p className="text-lg mb-2 text-[#6A73AF] font-normal">
    Concepto: representación del cambio de la <br /> ciudad a partir de los juegos, ya sean <br />positivos o negativos
          </p>

        </section>
       
        <section className="flex flex-wrap mt-40">
  <div className="w-full md:w-1/2 px-2">
    <div className="h-64 flex items-center justify-center">
      <div style={{ width: '400px', height: '400px' }}>
        <img src="/parisA1.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
    <p className="py-6 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold">
      París antes de los Juegos Olímpicos
    </p>
  </div>

  <div className="w-full md:w-1/2 px-2">
    <div className="h-64 flex items-center justify-center">
      <div style={{ width: '400px', height: '400px' }}>
        <img src="/parisA2.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
    <p className="py-6 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold">
      París después de los Juegos Olímpicos
    </p>
  </div>
</section>

        <section>

        <h2 className="text-4xl font-bold mb-4 text-[#28305F] text-center mt-40">
            TURISMO
          </h2>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div>
              <h4 className="text-base mb-4 text-[#6A73AF] font-normal text-center"> 1 Persona </h4>
              <div className="flex items-center justify-center">
              
              <div style={{ width: '100px', height: '100px' }}>
              <img src="/persona.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
             </div>
              </div>
              <p className="py-6 text-center text-sm mb-4 text-[#28305F] font-bold"> 10% </p>
            </div>

            <div>
              <div className="flex items-center justify-center">
              
              <div style={{ width: '300px', height: '300px' }}>
              <img src="/lineagrad.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
             </div>

              </div>
            </div>

            <div>
              <h4 className="text-base mb-4 text-[#6A73AF] font-normal text-center">3 Personas</h4>
              <div className="flex items-center justify-center">
              
              <div style={{ width: '100px', height: '100px' }}>
              <img src="/personas.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
             </div>
              </div>
              <p className="py-6 text-center text-sm mb-4 text-[#28305F] font-bold"> 30% </p>
            </div>

          </div>

        <p className="text-lg mb-4 text-[#6A73AF] font-normal text-center">
        Este símbolo representa el tursimo a nivel <br /> visitantes y cada simbolo individual simboliza <br /> un 10% del indice de turismo del pais.
        </p>

        </section>


<section>

<h2 className="text-4xl font-bold mb-4 text-[#28305F] text-center mt-40">
    ECONOMÍA
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '150px', height: '150px' }}>
      <img src="/eco1.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '300px', height: '300px' }}>
      <img src="/lineagrad.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>

      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/eco2.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
      </div>
    </div>

  </div>

<p className="text-lg mb-4 text-[#6A73AF] font-normal text-center">
Este símbolo representa el la economía en <br /> cuanto al PBI y refleja los gastos y ganacias <br /> que sufre la ciudad en el proceso de <br /> planificacion y ejecucion de los juegos. <br />Cada piso equivale a un monto determinado <br /> de dinero, si se resta un piso significa un gasto <br /> y si se suma significa una ganacia.
</p>

</section>


<section>

<h2 className="text-4xl font-bold mb-4 text-[#28305F] text-center mt-40">
   INFRAESTRUCTURA
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-5 gap-1 grid-rows-2">

  <div className='row-span-2'>
      <div className="flex items-center justify-center rotate-90">
      
      <div style={{ width: '400px', height: '400px' }}>
      <img src="/lineagrad.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-self-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/hotel1.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>

      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/subte1.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/torre.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>

      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/venue1.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
      </div>
    </div>

    <div className='py-8'>
      <div className="flex items-center justify-self-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/hotel2.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
     
      </div>
    </div>

    <div>
      <div className="flex items-center justify-self-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/subte2.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
     
      </div>
    </div>

    <div>
      <div className="flex items-center justify-self-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/arco.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
     
      </div>
    </div>

    <div>
      <div className="flex items-center justify-self-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/venue2.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
     
      </div>
    </div>

  </div>

</section>


<section>

<h2 className="text-4xl font-bold mb-4 text-[#28305F] text-center mt-40">
    AUDIENCIA
  </h2>

  <h3 className="text-4xl font-bold mb-4 text-[#6C73AB] text-center">
   Digital 
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '150px', height: '150px' }}>
      <img src="/au1.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '300px', height: '300px' }}>
      <img src="/lineagrad.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>

      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/au2.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
      </div>
    </div>

  </div>

<p className="text-lg mb-4 text-[#6A73AF] font-normal text-center">
La audiencia digital está representada y codificada <br />mediante una antena de telecomunicaciones ya que los <br /> espectadores que presencian los juegos mediante <br />dispositivos móviles o televisión representan una gran <br /> porción de la audiencia. Los espectadores totales de la <br />ceremonia de apertura (TV) fueron casi 1,000 millones.
</p>

</section>

<section>
  <h3 className="text-4xl font-bold mb-4 text-[#6C73AB] text-center mt-28">
   Física 
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '150px', height: '150px' }}>
      <img src="/venue1.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '300px', height: '300px' }}>
      <img src="/lineagrad.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>

      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
      
      <div style={{ width: '200px', height: '200px' }}>
      <img src="/venue2.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
      </div>
    </div>

  </div>

<p className="text-lg mb-4 text-[#6A73AF] font-normal text-center">
En los Juegos Olímpicos de París 2024, las personas en <br /> los estadios y venues representan un componente <br /> clave tanto a nivel físico como organizativo. <br /> La audiencia física es el eje central que abarca a los <br /> visitantes y espectadores, y es fundamental para <br />entender el éxito del evento.
</p>

</section>

<section className="mt-40">

<h2 className="text-4xl font-bold mb-4 text-[#28305F] text-center mt-40">
  APLICACIONES
  </h2>
  <h3 className="text-2xl font-bold mb-4 text-[#6C73AB] text-center">
  Evolución de París 
  </h3>

<div className="mt-24">
  <p className="py-4 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold"> París antes de los Juegos Olímpicos</p>
  <div className="flex items-center justify-center">
 
  <div style={{ width: '300px', height: '300px' }}>
      <img src="/P1.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
  </div>
  </div>

  <div>
  <p className="py-4 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold"> Construcción de la Villa Olímpica </p>
  <div className="flex items-center justify-center">
 
  <div style={{ width: '300px', height: '300px' }}>
      <img src="/P2.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
  </div>
  </div>

  <div>
  <p className="py-4 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold"> Construcción de Sedes Deportivas / Venues </p>
  <div className="flex items-center justify-center">
 
  <div style={{ width: '300px', height: '300px' }}>
      <img src="/P3.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
  </div>
  </div>

  <div>
  <p className="py-4 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold"> Construcción + Refacción de Hoteles </p>
  <div className="flex items-center justify-center">
 
  <div style={{ width: '300px', height: '300px' }}>
      <img src="/P4.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
  </div>
  </div>

  <div>
  <p className="py-4 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold"> Refacción del Metro de París </p>
  <div className="flex items-center justify-center">
 
  <div style={{ width: '300px', height: '300px' }}>
      <img src="/P5.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
  </div>
  </div>

  <div>
  <p className="py-4 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold"> Inversión y Crecimiento de la Economía </p>
  <div className="flex items-center justify-center">
 
  <div style={{ width: '300px', height: '300px' }}>
      <img src="/P6.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
  </div>
  </div>

  <div>
  <p className="py-4 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold"> Crecimiento del Turismo </p>
  <div className="flex items-center justify-center">
 
  <div style={{ width: '300px', height: '300px' }}>
      <img src="/P6.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
  </div>
  </div>

  <div>
  <p className="py-4 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold"> Crecimiento de Audiencias Digitales </p>
  <div className="flex items-center justify-center">
 
  <div style={{ width: '300px', height: '300px' }}>
      <img src="/P7.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
  </div>
  </div>

  <div>
  <p className="py-4 flex items-center justify-center text-sm mb-4 text-[#28305F] font-bold"> París después de los Juegos Olímpicos </p>
  <div className="flex items-center justify-center">
 
  <div style={{ width: '300px', height: '300px' }}>
      <img src="/P8.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
     </div>
  </div>
  </div>



</section>

      </main>
    
    </div>
  );
};

export default DataVizTemplate;