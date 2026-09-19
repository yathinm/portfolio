import Image from "next/image";
import Headshot from "../components/AboutPage/Yathin_Mrudul_Headshot.jpg";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px",
        }}
      >
        <h2
          className="title-strong"
          style={{
            fontSize: "clamp(1.3rem, 2.6vw, 2rem)",
            color: "#3f5a36",
            margin: 0,
          }}
        >
          Me
        </h2>
        <div
          style={{
            marginTop: 16,
            background: "#f5f7f4",
            borderRadius: 16,
            padding: 16,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            border: "1px solid #dfe7db",
            color: "#2f4730",
          }}
        >
          <div className={styles.aboutGrid}>
            <div
              style={{
                width: "min(100%, 320px)",
                height: "clamp(220px, 30vw, 360px)",
                borderRadius: 14,
                overflow: "hidden",
                background: "#ffffff",
                position: "relative",
                border: "1px solid #dfe7db",
              }}
            >
              <Image
                src={Headshot}
                alt="Portrait of Yathin"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minWidth: 0,
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  lineHeight: 1.8,
                  fontSize: "clamp(1rem, 1.9vw, 1.22rem)",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                Hi! My name is Yathin, and I&apos;m a Mathematics–Computer Science
                student at the University of California, San Diego. Currently, I&apos;m a Software Engineer 
                Intern at Amazon on the One Medical team. This past summer,
                I interned as a Software Engineer Intern at Microsoft on the
                Azure Data Factory team.
              </p>
              <p
                style={{
                  margin: 0,
                  lineHeight: 1.8,
                  fontSize: "clamp(1rem, 1.9vw, 1.22rem)",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                In my free time, I enjoy spending my time at the gym, where
                I&apos;m currently running an Arnold split, and playing the bass guitar and drums.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
