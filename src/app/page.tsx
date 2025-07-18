"use client";
import VoiceRecorder from "../../components/VoiceRecorder";
import VoiceRecorder2 from "../../components/VoiceRecorder2";
import VoiceRecorder3 from "../../components/VoiceRecorder3";
import VoiceRecorder4 from "../../components/VoiceRecorder4";
import BitacoraTemporal from "../../components/BitacoraTemporal";

export default function Home() {
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
        padding: "2rem"
      }}
    >
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
          backgroundColor: "rgba(255, 255, 255, 0.358)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "1rem"
        }}>
          <VoiceRecorder />
        </div>

        <div style={{ 
          minHeight: "800px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.358)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "1rem"
        }}>
          <VoiceRecorder2 />
        </div>

        <div style={{ 
          minHeight: "800px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.358)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "1rem"
        }}>
          <VoiceRecorder3 />
        </div>

        <div style={{ 
          minHeight: "800px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.358)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "1rem"
        }}>
          <VoiceRecorder4 />
        </div>

        <div style={{ 
          minHeight: "800px",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.358)",
          borderRadius: "1rem",
          overflow: "auto",
          padding: "1rem"
        }}>
          <BitacoraTemporal />
        </div>
      </div>
    </main>
  );
}
