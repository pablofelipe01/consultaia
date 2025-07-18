"use client";
import BitacoraTemporal from "../../../components/BitacoraTemporal";

export default function BitacoraPage() {
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
        paddingTop: "5rem" // Space for fixed navbar
      }}
    >
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Bitácora Temporal</h1>
          <p className="text-lg text-gray-600">
            Registro inteligente y análisis temporal de datos médicos con precisión y eficiencia.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div style={{ 
          minHeight: "800px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "2rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <BitacoraTemporal />
        </div>
      </div>
    </main>
  );
}
