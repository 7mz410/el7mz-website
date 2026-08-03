import { motion } from 'framer-motion';

export default function RootedInResilience() {
  return (
    <motion.div 
      className="section-padding container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-header">Rooted in Resilience</h1>
      
      <div className="rooted-content-layout mt-5">
        <div className="text-content-wrapper">
          <p className="bio-p" style={{ fontStyle: 'italic', color: 'var(--text-white)', fontSize: '1.25rem' }}>
            There are moments when art stops being an object and becomes a responsibility.
          </p>
          <p className="bio-p">
            When Viernulvier invited me to create a work for the façade of its building in Ghent, I immediately understood that this would be more than a commission. A 500-square-metre surface, suspended above one of the city's busiest streets, offered the rare opportunity to transform architecture into a public conversation.
          </p>
          <p className="bio-p">
            I wanted the work to speak about Palestine, not through spectacle, but through permanence.
          </p>
          <p className="bio-p">
            <strong>Rooted in Resilience</strong> explores the relationship between land, memory, and identity. It reflects on what remains when people are asked to leave, when landscapes change, and when history itself becomes contested. Rather than illustrating conflict, the work focuses on endurance: the quiet, persistent force that allows culture, language, and memory to survive across generations.
          </p>
          <p className="bio-p">
            The visual language combines flowing Arabic calligraphy with fields of blooming poppies. The calligraphy behaves almost like a root system, expanding across the façade and connecting fragments into a single living structure. It carries stories that cannot easily be erased. The poppies introduce another layer, beautiful yet delicate, growing where survival seems unlikely. Together, these elements create a dialogue between fragility and resilience, absence and presence.
          </p>
          <p className="bio-p">
            The project draws inspiration from Ghassan Zaqtan's poem <em>By Force of Habit</em>, whose reflections on everyday life under occupation shaped the emotional foundation of the piece. Rather than illustrating the poem directly, the artwork extends its ideas into space, allowing architecture, typography, and colour to become part of the same narrative.
          </p>
          <p className="bio-p">
            Designing a work at this scale required thinking beyond the image itself. Every line had to respond to the building, every composition had to remain legible from both a distance and close range, and the architecture became an active part of the artwork rather than simply its support. The protruding staircase, scaffolding, and geometry of the façade all became elements within the composition, turning the installation into a three-dimensional experience.
          </p>
          <p className="bio-p">
            For me, public art has the ability to interrupt routine. It can slow someone down for a few seconds, invite reflection, or simply leave behind a question that continues long after they have walked away. That possibility mattered more than delivering answers.
          </p>
          <p className="bio-p">
            At its core, <strong>Rooted in Resilience</strong> is about the persistence of belonging. It is a meditation on the invisible roots that connect people to place, language, history, and one another, roots that continue to grow, even under immense pressure.
          </p>
          <p className="bio-p">
            Installed in the heart of Ghent, the work stands as both an artwork and an invitation: to look more closely, to reflect more deeply, and to recognise resilience not only as resistance, but as an enduring act of creation.
          </p>
        </div>

        <div className="images-sidebar">
          <img src="/images/VNV_Gent_01.jpg" alt="VierNulVier Gent 01" />
          <img src="/images/VNV_Gent_02.jpg" alt="VierNulVier Gent 02" />
          <img src="/images/VNV_Gent_03.webp" alt="VierNulVier Gent 03" />
          <img src="/images/VNV_Gent_04.webp" alt="VierNulVier Gent 04" />
        </div>
      </div>

      <div className="text-content-wrapper mt-5">
        {/* Poems Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem', marginBottom: '3rem' }}>
          
          {/* Arabic Poem */}
          <div dir="rtl" style={{ textAlign: 'right', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>بحكم العادة<br/>غسان زقطان</h4>
            <div style={{ lineHeight: '1.8' }}>
              الجندي الذي نسيته الدورية في الحديقة<br/>
              الدورية التي نسيها حرس الحدود على الحاجز<br/>
              الحاجز الذي نسيه الاحتلال على العتبة<br/>
              الاحتلال الذي نسيه السياسي في حياتنا<br/>
              السياسي الذي كان جنديا في الاحتلال<br/>
              الميركافا التي نسيها الجيش في المدرسة<br/>
              الجيش الذي نسيته الحرب في المدينة<br/>
              الحرب التي نسيها الجنرال في الغرفة<br/>
              الجنرال الذي نسيه السلام في نومنا<br/>
              السلام الذي كان يقود الميركافا<br/>
              مازالوا يطلقون النار على رؤوسنا<br/>
              دون أوامر<br/>
              هكذا<br/>
              بحكم العادة
            </div>
          </div>

          {/* Dutch Poem */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>Uit gewoonte<br/>Ghassan Zaqtan</h4>
            <div style={{ lineHeight: '1.8' }}>
              De soldaat die vergeten werd door de patrouille in het park<br/>
              De patrouille die de grenswachten bij de controlepost vergaten<br/>
              De barrière die de bezetting vergat ligt op de drempel<br/>
              Het beroep dat de politicus in ons leven vergat<br/>
              De politicus die soldaat was tijdens de bezetting<br/>
              De Merkava die het leger op school vergat<br/>
              Het door de oorlog vergeten leger is in de stad<br/>
              De oorlog die de generaal in de kamer vergat<br/>
              De generaal die de vrede in onze slaap vergat<br/>
              Vrede die de Merkava leidde<br/>
              Ze schieten ons nog steeds door het hoofd<br/>
              Zonder bestellingen<br/>
              dus<br/>
              Uit gewoonte
            </div>
          </div>

          {/* English Poem */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>By force of habit<br/>Ghassan Zaqtan</h4>
            <div style={{ lineHeight: '1.8' }}>
              The soldier that the squad left in the garden,<br/>
              the squad that the border guards left at the checkpoint,<br/>
              the checkpoint that the occupation left at the crossing,<br/>
              the occupation that the politician left in our lives,<br/>
              the politician who was a soldier in the occupation,<br/>
              the Merkava that the army left at the school,<br/>
              the army that the war left in the city,<br/>
              the war which the general left in the bedroom,<br/>
              the general whom the peace left in our sleep,<br/>
              the peace that was driving the Merkava,<br/>
              still snipe at our heads without orders,<br/>
              just so,<br/>
              by force of habit.
            </div>
            <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#aaa' }}>
              Translated by Robin Moger<br/>
              This poem was part of the book that was published by Seagull<br/>
              you can buy it at <a href="https://seagullbooks.org/products/strangers-in-light-coats" target="_blank" rel="noreferrer" className="inline-link" style={{ color: 'var(--accent-gold)' }}>The Seagull Books Store</a>
            </div>
          </div>
        </div>

        {/* SoundCloud Player */}
        <div style={{ margin: '3rem 0' }}>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1411002403&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
            <a href="https://soundcloud.com/user-766916582" title="Ghassan Zaqtan" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Ghassan Zaqtan</a> · <a href="https://soundcloud.com/user-766916582/b7km-al-3ada" title="بحكم العادة" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>بحكم العادة</a>
          </div>
        </div>

        {/* Press Kit Link */}
        <div style={{ marginTop: '2rem' }}>
          <a href="/docs/Hamza abuAyyash - Rooted in Resilience - press kit (1).pdf" target="_blank" rel="noreferrer" className="smv-btn outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            View Press Kit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
