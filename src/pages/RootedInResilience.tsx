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
      
      <div className="mt-5 text-content-wrapper">
        <p className="bio-p">
          "I’m honored to share that I’ve been invited to create a new artwork at Viernulvier in Ghent, a city I’ve proudly called my home in Europe. This opportunity is not just a milestone in my artistic journey—it’s a deeply personal chance to express solidarity with the Palestinian people and to use art as a platform for storytelling, reflection, and hope.
        </p>
        <p className="bio-p">
          The project, titled Rooted in Resilience, transforms the facade of Viernulvier’s building into a massive 500 m² canvas, covering the scaffolding during the venue’s renovation. When Róise Goan, the artistic coordinator, first reached out, I was immediately inspired by the possibility of using this prominent space to convey a message of resilience, identity, and the enduring strength of communities living under occupation. The installation, unveiled in February 2025, turns the building into a visual platform for raising awareness and sparking conversations."
        </p>
        
        <h3 className="mt-4 mb-3" style={{ color: 'var(--accent-color)', fontSize: '1.5rem', fontWeight: 700 }}>The Vision Behind the Work</h3>
        <p className="bio-p">
          Rooted in Resilience is more than just a large-scale artwork—it’s a statement, a reminder, and a moment of defiance. It’s about survival. It’s about holding onto identity, history, and culture, even when everything else is being taken away. It’s about roots—both literal and metaphorical—the kind that dig deep into the land, refusing to be removed.
        </p>
        <p className="bio-p">
          The title reflects the profound interplay between endurance, identity, and the cyclical forces of occupation and resistance. Drawing inspiration from Ghassan Zaqtan’s evocative poem By Force of Habit, the piece explores themes of persistence, memory, and life amidst entrenched systems of oppression. Zaqtan’s words unravel the habits of domination that pervade daily existence under occupation, and this poetic critique serves as the guiding framework for the artwork.
        </p>
        <p className="bio-p">
          The central imagery weaves together calligraphic threads and blooming poppies. The poppies, vibrant yet fragile, symbolize both memory and sacrifice, resonating with the lives uprooted and histories scarred by displacement. Despite their fragility, the persistence of poppies blooming against all odds evokes hope—a defiant affirmation of life in the face of oppression.
        </p>
        <p className="bio-p">
          The intricate calligraphy embedded in the design mirrors the complexity of resilience, representing the cultural and historical ties that anchor identity even in the harshest conditions. These calligraphic elements, rooted in Palestinian heritage, form a network of interconnected stories, affirming that the roots of identity and freedom remain unbroken, pushing through the cracks, vibrant and alive.
        </p>

        <h3 className="mt-4 mb-3" style={{ color: 'var(--accent-color)', fontSize: '1.5rem', fontWeight: 700 }}>The Creation Process</h3>
        <p className="bio-p">
          Creating something this big wasn’t easy, but it felt urgent. It started with research, sketches, and a lot of thinking—making sure the idea stayed true to what I wanted to say. The final artwork was printed on durable fabric, specifically designed to withstand time and weather, and installed on the scaffolding covering Viernulvier’s facade.
        </p>
        <p className="bio-p">
          The installation process was a collaborative effort with Viernulvier and a dedicated production team. Together, we turned an idea into something real—something that now stands in the middle of the city, impossible to ignore. The unique architecture of Viernulvier’s building, particularly its jutting staircase, provided an exciting opportunity to create a three-dimensional design that enhances the visual impact. By integrating these architectural elements into the artwork, the installation transcends traditional boundaries, inviting viewers to experience the piece as a dynamic conversation between space, poetry, and design.
        </p>

        <h3 className="mt-4 mb-3" style={{ color: 'var(--accent-color)', fontSize: '1.5rem', fontWeight: 700 }}>Why This Matters</h3>
        <p className="bio-p">
          This project isn’t just about creating a visually compelling piece—it’s about using art as a tool for solidarity and connection. Rooted in Resilience seeks to resonate emotionally with viewers, encouraging reflection on the strength of those who resist displacement and the enduring spirit of communities striving for justice and dignity.
        </p>
        <p className="bio-p">
          By anchoring the work in Zaqtan’s By Force of Habit, the artwork serves as both a critique of habitual violence and a testament to the resilience that defies it. I hope it will invite conversations and connections here in Ghent, creating a shared space where people can reflect on the realities of the Palestinian experience and the universal struggle for identity and freedom.
        </p>

        <h3 className="mt-4 mb-3" style={{ color: 'var(--accent-color)', fontSize: '1.5rem', fontWeight: 700 }}>An Invitation to Engage</h3>
        <p className="bio-p">
          This installation is more than an artwork—it’s a visual narrative of solidarity, resistance, and renewal. It’s my way of honoring the resilience of the Palestinian people and sharing their story with the world.
        </p>
        <p className="bio-p">
          The artwork is now installed and visible to the public, and I invite everyone to engage with it—to see in it the persistence of hope, the strength of memory, and the enduring power of art to inspire change.
        </p>

        <h3 className="mt-4 mb-3" style={{ color: 'var(--accent-color)', fontSize: '1.5rem', fontWeight: 700 }}>What Viernulvier Says</h3>
        <p className="bio-p" style={{ fontStyle: 'italic', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>
          As Viernulvier shared in their announcement: "The artwork Rooted in Resilience transforms the facade of our building into a powerful visual statement. Created by Hamza AbuAyyash, this 500 m² installation uses durable fabric to cover the scaffolding, turning a construction site into a living, breathing piece of art. The piece invites viewers to reflect on themes of resilience, identity, and solidarity, making it a meaningful addition to Ghent’s urban landscape."
        </p>

        {/* Poems Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem', marginBottom: '3rem' }}>
          
          {/* Arabic Poem */}
          <div dir="rtl" style={{ textAlign: 'right', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>بحكم العادة<br/>غسان زقطان</h4>
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
            <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>Uit gewoonte<br/>Ghassan Zaqtan</h4>
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
            <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>By force of habit<br/>Ghassan Zaqtan</h4>
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
              you can buy it at <a href="https://seagullbooks.org/products/strangers-in-light-coats" target="_blank" rel="noreferrer" className="inline-link" style={{ color: 'var(--accent-color)' }}>The Seagull Books Store</a>
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
