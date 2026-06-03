import Link from "next/link";

/* ─── Types & Data ──────────────────────────────────────────── */

interface Post {
  slug: string;
  cat: string;
  title: string;
  excerpt?: string;
  author: string;
  date: string;
  read: string;
  featured?: boolean;
}

const POSTS: Post[] = [
  {
    slug: "operacao-quiosque-3-pessoas",
    cat: "Operação",
    title: "Como rodamos um quiosque com 3 pessoas e zero gargalo no rush",
    excerpt:
      "O segredo está no que cortamos do cardápio — não no que adicionamos. Entenda o método por trás de um dos quiosques mais eficientes da rede.",
    author: "Camila Fontes",
    date: "12 Mai 2026",
    read: "6 min",
    featured: true,
  },
  {
    slug: "food-court-2026",
    cat: "Mercado",
    title: "Por que o food court de shopping voltou a fazer sentido em 2026",
    excerpt: "A pandemia matou o modelo. Mas o que sobrou está mais saudável que nunca.",
    author: "Marcos Tavares",
    date: "28 Abr 2026",
    read: "9 min",
  },
  {
    slug: "pd-7-prototipos-1-bowl",
    cat: "Cardápio",
    title: "P&D na Green Station: 7 protótipos para 1 bowl no menu",
    excerpt: "Por dentro do nosso laboratório de receita.",
    author: "Chef Lu Sá",
    date: "15 Abr 2026",
    read: "5 min",
  },
];

/* ─── Cover placeholder ─────────────────────────────────────── */

function CoverPlaceholder({ label, ratio }: { label: string; ratio: string }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        background:
          "repeating-linear-gradient(45deg, rgba(1,153,78,0.07), rgba(1,153,78,0.07) 12px, rgba(1,153,78,0.13) 12px, rgba(1,153,78,0.13) 24px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #EDEDEA",
      }}
    >
      <span
        style={{
          background: "#0E1F1A",
          color: "#FBFBF7",
          fontFamily: "monospace",
          fontSize: "10px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: "4px",
          opacity: 0.7,
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── Post card ─────────────────────────────────────────────── */

function PostCard({ post }: { post: Post }) {
  return (
    <article
      className="group flex flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: "#FBFBF7",
        border: "1px solid #EDEDEA",
      }}
    >
      <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
        <CoverPlaceholder
          label={post.cat}
          ratio={post.featured ? "16 / 10" : "4 / 3"}
        />
      </Link>

      <div className="flex flex-col gap-2.5 p-6 flex-1">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.1em]"
          style={{ color: "#00994A" }}
        >
          {post.cat}
        </span>

        <h3
          className="font-display leading-tight tracking-tight"
          style={{
            fontSize: post.featured ? "clamp(18px, 1.6vw, 26px)" : "18px",
            fontWeight: 500,
          }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-brand-green transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        {post.featured && post.excerpt && (
          <p className="text-sm leading-relaxed text-gray-500 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <footer
          className="flex flex-wrap items-center gap-1.5 text-[12px] text-gray-400 mt-auto pt-3"
          style={{ borderTop: "1px dashed #D6D6D2" }}
        >
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <span>{post.date}</span>
          <span aria-hidden="true">·</span>
          <span>{post.read} de leitura</span>
        </footer>
      </div>
    </article>
  );
}

/* ─── Main export ───────────────────────────────────────────── */

export default function DiarioDaRede() {
  const [featured, ...rest] = POSTS;

  return (
    <section className="py-24" style={{ background: "#F5F5F0" }} id="blog">
      <div className="mx-auto max-w-container px-5">

        {/* Head */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <span
              className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] uppercase"
              style={{ color: "#00994A" }}
            >
              <span className="inline-block w-6 h-px bg-brand-green" aria-hidden="true" />
              Diário da rede
            </span>
            <h2
              className="font-display mt-4 leading-none tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              O que está acontecendo
              <br />
              <em style={{ fontStyle: "italic", color: "#00994A" }}>
                nos bastidores da Green Station.
              </em>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-sm pb-1 transition-opacity hover:opacity-70"
            style={{ borderBottom: "1.5px solid currentColor" }}
          >
            Todos os artigos <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Grid: 2fr featured + 1fr + 1fr */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6">
          <PostCard post={featured} />
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

      </div>
    </section>
  );
}
