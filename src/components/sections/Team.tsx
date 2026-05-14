"use client";

import { useState } from "react";
import { type Member } from "@/types";
import { MEMBERS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import MemberCard from "@/components/ui/MemberCard";
import CVModal from "@/components/ui/CVModal";
import styles from "./Team.module.css";

export default function Team() {
  const [activeMember, setActiveMember] = useState<Member | null>(null);

  return (
    <section id="team" className={styles.section}>
      <SectionHeader tag="// 02 — TEAM MEMBERS" title="Squad Members" />

      <div className={styles.grid}>
        {MEMBERS.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
          />
        ))}
      </div>

      <CVModal member={activeMember} onClose={() => setActiveMember(null)} />
    </section>
  );
}
