import { MEMBERS } from "@/lib/data";
import { notFound } from "next/navigation";
import CVActions from "./CVActions";
import styles from "./cv.module.css";

// Required for static export (output: 'export') with dynamic routes
export async function generateStaticParams() {
  return MEMBERS.map((member) => ({
    id: member.id.toString(),
  }));
}

export default async function CVPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = MEMBERS.find((m) => m.id === Number(id));
  if (!member) notFound();

  return (
    <div className={styles.page}>
      <CVActions name={member.name} />

      <div id="cv-content" className={styles.cv}>

        {/* ── HEADER ── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.photoBox}>
              {member.photo ? (
                <img src={member.photo} alt={member.name} className={styles.photoImg} />
              ) : (
                member.emoji
              )}
            </div>
          </div>
          <div className={styles.headerRight}>
            <h1 className={styles.name}>{member.name.toUpperCase()}</h1>
            <p className={styles.roleTitle}>{member.role}</p>
            <div className={styles.divider} />
            <p className={styles.summary}>
              Siswa aktif jurusan TKJ SMKS Rajasa Surabaya Angkatan 2025,
              dengan keahlian di bidang {member.skills.slice(0, 3).join(", ")}.
              Berpengalaman dalam {member.cv.projects.length} project aktif dan
              memiliki {member.cv.certificates.length} sertifikasi profesional.
            </p>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className={styles.body}>

          {/* LEFT COLUMN */}
          <div className={styles.colLeft}>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>CONTACT</h2>
              <div className={styles.sectionLine} />
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>{member.cv.contact.whatsapp}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <span>{member.cv.contact.email}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📸</span>
                  <span>{member.cv.contact.instagram}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>💻</span>
                  <span>{member.cv.contact.github}</span>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>SKILLS</h2>
              <div className={styles.sectionLine} />
              <ul className={styles.skillList}>
                {member.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.bullet} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>EDUCATION</h2>
              <div className={styles.sectionLine} />
              <p className={styles.eduDegree}>SMK TEKNIK KOMPUTER &amp; JARINGAN</p>
              <p className={styles.eduPlace}>SMKS Rajasa Surabaya</p>
              <p className={styles.eduYear}>2022 – 2025</p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.colRight}>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>PROJECTS</h2>
              <div className={styles.sectionLine} />
              {member.cv.projects.map((project, i) => (
                <div key={i} className={styles.expItem}>
                  <div className={styles.expDot} />
                  <div className={styles.expContent}>
                    <strong className={styles.expTitle}>{project.title.toUpperCase()}</strong>
                    <p className={styles.expCompany}>SMKS RAJASA SURABAYA — TKJ</p>
                    <ul className={styles.expList}>
                      <li>{project.description}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>SERTIFIKASI &amp; PENGHARGAAN</h2>
              <div className={styles.sectionLine} />
              {member.cv.certificates.map((cert, i) => (
                <div key={i} className={styles.expItem}>
                  <div className={styles.expDot} />
                  <div className={styles.expContent}>
                    <strong className={styles.expTitle}>{cert.toUpperCase()}</strong>
                    <p className={styles.expCompany}>SMKS RAJASA SURABAYA — 2024</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}