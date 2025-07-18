"use client";
import { useState } from "react";

export default function ComentariosPage() {
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      autor: "Dr. María González",
      fecha: "2025-01-15",
      contenido: "Excelente herramienta para análisis de datos clínicos. La interfaz es intuitiva y los resultados son muy precisos.",
      rating: 5
    },
    {
      id: 2,
      autor: "Investigador Juan Pérez",
      fecha: "2025-01-12",
      contenido: "La funcionalidad de bitácora temporal ha revolucionado nuestro proceso de investigación. Muy recomendado.",
      rating: 5
    },
    {
      id: 3,
      autor: "Dra. Ana Rodríguez",
      fecha: "2025-01-10",
      contenido: "Los asistentes de voz son muy útiles para consultas rápidas. Sería genial tener más opciones de personalización.",
      rating: 4
    }
  ]);

  const [nuevoComentario, setNuevoComentario] = useState({
    autor: "",
    contenido: "",
    rating: 5
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevoComentario.autor.trim() && nuevoComentario.contenido.trim()) {
      const comentario = {
        id: comentarios.length + 1,
        ...nuevoComentario,
        fecha: new Date().toISOString().split('T')[0]
      };
      setComentarios([comentario, ...comentarios]);
      setNuevoComentario({ autor: "", contenido: "", rating: 5 });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <main 
      style={{
        backgroundImage: "url('/h6.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
        padding: "2rem",
        paddingTop: "5rem"
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Comentarios y Testimonios</h1>
          <p className="text-lg text-gray-600">
            Comparte tu experiencia con Data Lab IA y lee lo que otros usuarios tienen que decir.
          </p>
        </div>

        {/* Form for new comment */}
        <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Agregar Comentario</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="autor" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre / Título
              </label>
              <input
                type="text"
                id="autor"
                value={nuevoComentario.autor}
                onChange={(e) => setNuevoComentario({ ...nuevoComentario, autor: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: Dr. Juan Pérez"
                required
              />
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                Calificación
              </label>
              <select
                id="rating"
                value={nuevoComentario.rating}
                onChange={(e) => setNuevoComentario({ ...nuevoComentario, rating: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5 estrellas)</option>
                <option value={4}>⭐⭐⭐⭐ (4 estrellas)</option>
                <option value={3}>⭐⭐⭐ (3 estrellas)</option>
                <option value={2}>⭐⭐ (2 estrellas)</option>
                <option value={1}>⭐ (1 estrella)</option>
              </select>
            </div>

            <div>
              <label htmlFor="contenido" className="block text-sm font-medium text-gray-700 mb-2">
                Comentario
              </label>
              <textarea
                id="contenido"
                value={nuevoComentario.contenido}
                onChange={(e) => setNuevoComentario({ ...nuevoComentario, contenido: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Comparte tu experiencia con Data Lab IA..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Publicar Comentario
            </button>
          </form>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comentarios.map((comentario) => (
            <div key={comentario.id} className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{comentario.autor}</h3>
                  <p className="text-sm text-gray-600">{comentario.fecha}</p>
                </div>
                <div className="flex space-x-1">
                  {renderStars(comentario.rating)}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{comentario.contenido}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Estadísticas de Comentarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{comentarios.length}</div>
              <div className="text-gray-600">Total de comentarios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {(comentarios.reduce((acc, c) => acc + c.rating, 0) / comentarios.length).toFixed(1)}
              </div>
              <div className="text-gray-600">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {Math.round((comentarios.filter(c => c.rating >= 4).length / comentarios.length) * 100)}%
              </div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
