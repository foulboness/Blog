const newsletters = [
  {
    title: "Which stories get told?",
    date: "May 22, 2026",
    subtitle: "AAPI voices on identity, achievement, and belonging",
    content: `
      <p><strong>The Newsletter</strong></p>

      <p>
        History is often framed as something clean and linear, told by the people who had the loudest voice in the moment.
        But in reality, every historical narrative is layered with omissions, reinterpretations, and forgotten contributions.
      </p>

      <p>
        For many AAPI communities in the United States, participation in shaping culture, labor movements, and innovation
        has been substantial — yet frequently underrepresented in mainstream storytelling.
      </p>

      <p>
        The question is not only what gets remembered, but what gets amplified. Visibility is not accidental;
        it is shaped by institutions, media ecosystems, and repetition over time.
      </p>

      <p>
        This issue explores how identity is constructed through narrative, and why representation remains both a cultural
        and political act.
      </p>
    `
  },

  {
    title: "Reading books is a symbiotic act",
    date: "May 13, 2026",
    subtitle: "Intermezzo, Infinite Jest, Lord of the Rings, and well-loved books",
    content: `
      <p>
        Reading is not passive consumption. It is a form of cognitive collaboration between author and reader,
        where meaning is continuously reconstructed in real time.
      </p>

      <p>
        A book like <em>Infinite Jest</em> or <em>The Lord of the Rings</em> does not exist fully on the page —
        it exists in the reader’s attention, memory, and interpretation.
      </p>

      <p>
        Each rereading changes the text itself, not because the words shift, but because the reader does.
        This is why certain books feel different at different stages of life.
      </p>

      <p>
        Reading, then, is not extraction of information — it is participation in meaning-making.
      </p>
    `
  },

  {
    title: "AI is making us all writers",
    date: "May 8, 2026",
    subtitle: "Writing is the key skill of the AI era",
    content: `
      <p>
        Artificial intelligence has changed the definition of writing from a specialized craft into a general interface skill.
        Everyone now writes — whether they intend to or not.
      </p>

      <p>
        Prompts, instructions, and refinements have become a new literacy layer.
        The ability to clearly articulate intent determines the quality of output more than technical knowledge alone.
      </p>

      <p>
        However, this shift also introduces a risk: the homogenization of expression.
        When systems optimize for clarity and probability, they can smooth out individuality.
      </p>

      <p>
        The challenge ahead is not whether AI can write, but whether humans can still preserve distinct voice within assisted creation.
      </p>
    `
  },

  {
    title: "Watching dolphins swim in the Strait of Hormuz",
    date: "May 1, 2026",
    subtitle: "Writing on global conflict and perspective",
    content: `
      <p>
        Even in regions defined by geopolitical tension, life continues in patterns that exist independently of human conflict.
        Nature does not pause for diplomacy.
      </p>

      <p>
        Observing dolphins moving through contested waters is a reminder that perspective is layered:
        what appears as a strategic zone on a map is also an ecosystem, a habitat, and a living system.
      </p>

      <p>
        The contrast between human abstraction and natural continuity highlights how narrow our framing of “important events” can be.
      </p>

      <p>
        In writing about global conflict, it becomes essential not only to analyze systems of power,
        but also to acknowledge the worlds that persist alongside them.
      </p>
    `
  },

  {
    title: "The poetry of perspective",
    date: "Apr 10, 2026",
    subtitle: "National Poetry Month, Artemis II, and how we view the world (Issue #423)",
    content: `
      <p>
        Perspective is not just a lens — it is a constraint. It determines what we can notice, and equally,
        what remains invisible.
      </p>

      <p>
        Space exploration, such as missions like Artemis II, reframes this limitation by physically shifting the observer’s position.
        From orbit, national borders disappear, replaced by geological and atmospheric continuity.
      </p>

      <p>
        Poetry functions in a similar way, compressing experience into language that forces reinterpretation.
        It reveals that meaning is not fixed, but assembled.
      </p>

      <p>
        To change perspective is not to change reality — it is to change the relationship between observer and reality.
      </p>
    `
  },

  {
    title: "After a year of “vibe coding,” AI still can’t replace effort & expertise",
    date: "Apr 3, 2026",
    subtitle: "Genericness, context collapse, and agentic engineering (Issue #422)",
    content: `
      <p>
        The rise of “vibe coding” reflects a shift toward abstraction in software creation,
        where intent is increasingly translated into working systems through intermediary models.
      </p>

      <p>
        However, this abstraction introduces a subtle degradation: loss of intent fidelity.
        Systems can generate functional output without preserving the original depth of reasoning behind it.
      </p>

      <p>
        Expertise is not simply output generation — it is the accumulation of constraints, edge cases, and failure histories.
      </p>

      <p>
        AI accelerates production, but it does not inherently replace the embodied knowledge required to evaluate correctness.
      </p>
    `
  }
];

function renderNewsletter() {
  const feed = document.getElementById("newsletterFeed");

  feed.innerHTML = newsletters.map((n, i) => `
    <div class="newsletter-card" onclick="togglePost(${i})">

      <div class="nl-date">${n.date}</div>
      <h2>${n.title}</h2>
      <p>${n.subtitle}</p>

      <div class="newsletter-body hidden" id="post-${i}">
        ${n.content}
      </div>

    </div>
  `).join("");
}

function togglePost(i) {
  const el = document.getElementById(`post-${i}`);

  el.classList.toggle("hidden");
}

renderNewsletter();