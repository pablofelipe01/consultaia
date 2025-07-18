"use client";
import VoiceRecorder from "../../../components/VoiceRecorder";
import VoiceRecorder2 from "../../../components/VoiceRecorder2";
import VoiceRecorder3 from "../../../components/VoiceRecorder3";
import VoiceRecorder4 from "../../../components/VoiceRecorder4";

export default function ConsultoriaPage() {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Consultoría IA</h1>
          <p className="text-lg text-gray-600">
            Utiliza nuestros asistentes de voz especializados para obtener consultas médicas y de investigación precisas.
          </p>
        </div>
      </div>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "2rem",
          maxWidth: "1800px",
          margin: "0 auto"
        }}
      >
        <div style={{ 
          minHeight: "800px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <VoiceRecorder />
        </div>

        <div style={{ 
          minHeight: "800px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <VoiceRecorder2 />
        </div>

        <div style={{ 
          minHeight: "800px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <VoiceRecorder3 />
        </div>

        <div style={{ 
          minHeight: "800px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <VoiceRecorder4 />
        </div>
      </div>
    </main>
  );
}
