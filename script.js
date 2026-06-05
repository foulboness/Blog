const posts = [
  {
    title: "Stop Wasting Your Money — 10 Expenses That No Longer Make Sense",
    author: "Sanjeev P.",
    date: "Apr 24",
    stats: "7.2K • 246 • 59",
    publication: "Investor’s Handbook",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    preview:
      "Your everyday spending habits that quietly sabotage your financial goals.",
    content: `
      <p>Most people never notice how small recurring purchases slowly destroy their financial flexibility.</p>

      <p>Subscriptions you forgot about. Convenience purchases. Premium upgrades that barely improve your life.</p>

      <p>Modern spending is engineered to feel invisible.</p>

      <h2>1. Delivery Apps</h2>

      <p>The hidden fees are often higher than the meal itself.</p>

      <h2>2. Trend Gadgets</h2>

      <p>Most tech products lose excitement within weeks.</p>

      <p>Minimalism isn't about owning less. It's about buying intentionally.</p>
    `
  },

  {
    title: "Apple Notes Has a Secret Mode — And Almost No One Uses It",
    author: "Zeeshan Saghir",
    date: "Mar 2",
    stats: "1.8K • 58 • 7",
    publication: "",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    preview:
      "From messy notes to a clean system, one hidden feature transformed my workflow.",
    content: `
      <p>Most people use Apple Notes like a dumping ground.</p>

      <p>But smart folders completely change the experience.</p>

      <p>Using tags, filters, and pinned collections creates a lightweight knowledge system.</p>

      <h2>The Hidden Power</h2>

      <p>Smart folders automatically organize notes without manual sorting.</p>

      <p>It feels closer to a digital garden than a notes app.</p>
    `
  },

  {
    title: "It Doesn’t Matter How Good Your Writing Is",
    author: "Douglas Giles",
    date: "Feb 26",
    stats: "9.4K • 295 • 15",
    publication: "",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    preview:
      "Some hard truths about publishing online and what actually matters.",
    content: `
      <p>The internet rewards consistency more than perfection.</p>

      <p>You can write beautifully and still be ignored.</p>

      <p>Distribution matters. Positioning matters. Titles matter.</p>

      <h2>Writing Online Is Packaging</h2>

      <p>Readers decide in seconds whether your article deserves attention.</p>
    `
  },

  {
    title: "How to Do Hard Things When You Have Zero Motivation",
    author: "Darius Foroux",
    date: "May 8",
    stats: "2.1K • 52 • 40",
    publication: "",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    preview:
      "Tricks create novelty. Systems create consistency.",
    content: `
      <p>Motivation is unreliable.</p>

      <p>Routines reduce friction and help you continue even when energy disappears.</p>

      <h2>The Real Secret</h2>

      <p>Make the starting point so small that resistance disappears.</p>

      <p>Consistency compounds faster than intensity.</p>
    `
  }
];

const feed = document.getElementById("feed");

function renderFeed() {
  feed.innerHTML = "";

  posts.forEach((post, index) => {
    const card = document.createElement("div");

    card.className = "post-card";

    card.innerHTML = `
      <div class="post-info">

        <div class="post-meta">
          ${post.publication ? `<span class="pub">In ${post.publication}</span>` : ""}
          <span>${post.author}</span>
          <span>·</span>
          <span>${post.date}</span>
        </div>

        <h2>${post.title}</h2>

        <p>${post.preview}</p>

        <div class="post-stats">
          ${post.stats}
        </div>

      </div>

      <img src="${post.image}" class="thumb">
    `;

    card.onclick = () => openPost(index);

    feed.appendChild(card);
  });
}

function openPost(index) {
  const post = posts[index];

  document.getElementById("title").textContent = post.title;

  document.getElementById("meta").innerHTML = `
    ${post.author} · ${post.date}
  `;

  document.getElementById("content").innerHTML = `
    <img src="${post.image}" class="article-cover">

    ${post.content}
  `;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

renderFeed();

function openPost(index) {
  const post = posts[index];

  document.getElementById("title").textContent = post.title;

  document.getElementById("meta").innerHTML =
    `${post.author} · ${post.date}`;

  document.getElementById("content").innerHTML =
    post.content;

  document.getElementById("articleImage").src =
    post.image;

  // SWITCH PAGES
  document.getElementById("homePage")
    .classList.add("hidden");

  document.getElementById("articlePage")
    .classList.remove("hidden");

  window.scrollTo(0, 0);
}

function goHome() {
  document.getElementById("articlePage")
    .classList.add("hidden");

  document.getElementById("homePage")
    .classList.remove("hidden");

  window.scrollTo(0, 0);
}
  

