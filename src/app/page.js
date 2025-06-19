'use client'

import { useState } from "react";
import Image from "next/image";

const eventos = [
  {
    nombre: "Evento 1 (onClick)",
    render: (setMensaje, mensaje) => (
      <div className="flex flex-col items-center gap-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow transition-colors"
          onClick={() => setMensaje("has activao el evento uno chaval, BOO")}
        >
          Click aquí
        </button>
        {mensaje && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-700 dark:text-gray-300 text-center">{mensaje}</p>
            <img
              src="/evento1.jpg"
              alt="Imagen Evento 1"
              className="rounded shadow"
            />
          </div>
        )}
      </div>
    )
  },
  {
    nombre: "Evento 2 (onSubmit)",
    render: (setMensaje, mensaje) => (
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={e => e.preventDefault()}
      >
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setMensaje(`Archivo subido: ${file.name}`);
            }
          }}
          className="text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
        />
        {mensaje && <p className="text-gray-700 dark:text-gray-300 text-center">{mensaje}</p>}
      </form>
    )
  },
  {
    nombre: "Evento 3 (onDoubleClick)",
    render: (setMensaje, mensaje) => (
      <div className="flex flex-col items-center gap-2">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow transition-colors"
          onDoubleClick={() => setMensaje("Bien, si le picaste 2 veces seguidas (no tuve más imagenes para humillar a mis compañeros XD)")}
        >
          Doble click aquí
        </button>
        {mensaje && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-700 dark:text-gray-300 text-center">{mensaje}</p>
            <Image src="/yanosupequeponerdeimagen.jpg" alt="Imagen Chava" width={250} height={250} className="rounded shadow mt-2" />
          </div>
        )}
      </div>
    )
  },
  {
    nombre: "Evento 4 (Radio buttons)",
    render: (setMensaje, mensaje, opcionActiva, setOpcionActiva) => {
      const manejarSeleccion = (opcion) => {
        setOpcionActiva(opcion);
        switch (opcion) {
          case "opcion1":
            setMensaje("Seleccionaste la Opción 1");
            break;
          case "opcion2":
            setMensaje("Seleccionaste la Opción 2");
            break;
          case "opcion3":
            setMensaje("Seleccionaste la Opción 3");
            break;
          default:
            setMensaje("");
        }
      };

      return (
        <div className="flex flex-col items-start gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="evento4"
              checked={opcionActiva === "opcion1"}
              onChange={() => manejarSeleccion("opcion1")}
            />
            <span className="text-white">Opción 1</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="evento4"
              checked={opcionActiva === "opcion2"}
              onChange={() => manejarSeleccion("opcion2")}
            />
            <span className="text-white">Opción 2</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="evento4"
              checked={opcionActiva === "opcion3"}
              onChange={() => manejarSeleccion("opcion3")}
            />
            <span className="text-white">Opción 3</span>
          </label>

          {mensaje && <p className="text-gray-200 text-sm mt-4">{mensaje}</p>}

          {opcionActiva === "opcion1" && (
            <Image src="/chava.jpg" alt="Imagen Chava" width={150} height={150} className="rounded shadow mt-2" />
          )}
          {opcionActiva === "opcion2" && (
            <Image src="/sifuentes.jpg" alt="Imagen Sifuentes" width={150} height={150} className="rounded shadow mt-2" />
          )}
          {opcionActiva === "opcion3" && (
            <Image src="/manuel.jpg" alt="Imagen Manuel" width={150} height={150} className="rounded shadow mt-2" />
          )}
        </div>
      );
    }
  }
];

export default function Home() {
  const [eventoActivo, setEventoActivo] = useState(0);
  const [mensaje, setMensaje] = useState("");
  // Add state for opcionActiva only for Evento 4
  const [opcionActiva, setOpcionActiva] = useState("opcion1");

  const EventoActual = eventos[eventoActivo];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black dark:bg-slate-400">
      <header className="w-full py-6 px-8 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">Eventos GOD del Chuy</span>
        </div>
        <nav></nav>
      </header>

      <main className="flex flex-1 items-center justify-center p-8 sm:p-20 gap-12">
        <section className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-8 min-w-[260px] max-w-xs flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">{EventoActual.nombre}</h2>
          {eventoActivo === 3
            ? EventoActual.render(setMensaje, mensaje, opcionActiva, setOpcionActiva)
            : EventoActual.render(setMensaje, mensaje)}
        </section>

        <section className="flex flex-col gap-6">
          {eventos.map((ev, idx) => (
            <button
              key={ev.nombre}
              className={`font-medium py-3 px-8 rounded-lg shadow transition-colors w-full ${
                eventoActivo === idx
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 hover:bg-gray-400 text-black"
              }`}
              onClick={() => {
                setEventoActivo(idx);
                setMensaje("");
                if (idx === 3) setOpcionActiva("opcion1");
              }}
            >
              {ev.nombre}
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}