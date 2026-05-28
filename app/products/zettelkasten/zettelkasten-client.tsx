import { NewsletterForm } from "@/components/newsletter-form"

export default function ZettelClientPage() {
  return (
    <main>
      <section className="border-b bg-muted/20">
        <div className="mx-auto max-w-[920px] px-4 py-14 md:px-6 md:py-20">
          <span className="inline-block rounded-full bg-white px-3 py-1 text-sm text-muted-foreground ring-1 ring-border">
            Zettelkasten Toolbox
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Stop losing your best ideas. Build a durable knowledge graph in Notion.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Zettelkasten Toolbox is a lightweight template that turns scattered highlights into connected notes, topics,
            and sources—so your thinking compounds and your writing gets easier over time.
          </p>
          <p className="mt-4 max-w-4xl text-base text-muted-foreground">
            If you&apos;re a curious reader, creator, or builder with a pile of highlights, notes, and half-formed ideas,
            this free Zettelkasten Toolbox turns them into a durable, connected knowledge graph in Notion—so you can
            capture faster, recall what matters, and see the links between ideas that spark clearer thinking and better
            writing; and each week in <em>Verstreuen</em>, I&apos;ll share the top three notes I added (and the connections
            they unlocked) so you can watch the system in action and borrow the patterns for your own work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[920px] px-4 py-14 md:px-6 md:py-16">
        <h2 className="text-2xl font-semibold tracking-tight">What you get</h2>
        <ul className="mt-6 space-y-4 text-muted-foreground">
          <li>
            <strong className="text-foreground">Capture cleanly:</strong> a simple, repeatable input flow for quotes,
            definitions, frameworks, and strategies.
          </li>
          <li>
            <strong className="text-foreground">Connect naturally:</strong> bidirectional links between Notes ↔ Topics and
            Notes ↔ Sources so context travels with every idea.
          </li>
          <li>
            <strong className="text-foreground">Recall + create faster:</strong> “This Week&apos;s Notes” surfaces what you
            just learned so you can turn it into output (writing, decisions, products).
          </li>
        </ul>
      </section>

      <section className="border-y bg-muted/20">
        <div className="mx-auto max-w-[920px] px-4 py-14 md:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
          <p className="mt-3 text-muted-foreground">
            Notes → Topic → Source triangle + “This Week&apos;s Notes” view.
          </p>
          <div className="mt-6 overflow-hidden rounded-lg border bg-white">
            <img
              src="/zettelkasten-hero.png"
              alt="Screenshot of Zettelkasten Toolbox showing Notes, Topics, and Sources connected in Notion"
              className="h-auto w-full object-cover"
              width={960}
              height={560}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[920px] px-4 py-14 md:px-6 md:py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Subscribe to get the template (free)</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          You&apos;ll get immediate access to Zettelkasten Toolbox, plus the weekly “top 3 notes + connections” issue of{" "}
          <em>Verstreuen</em>.
        </p>
        <div className="mt-6">
          <NewsletterForm />
        </div>
        <p className="mt-10 text-sm font-medium uppercase tracking-wide text-muted-foreground">This template is the tool. The newsletter is the practice.</p>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Each week in <em>Verstreuen</em>, I publish a short reflection on the top 3 notes I added to my Zettelkasten and
          explicitly show the connections between them—what they changed, what they clarified, and what they unlocked.
        </p>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-[920px] px-4 py-14 md:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Who it&apos;s for</h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground">
            <li>Readers who highlight a lot but rarely revisit what they saved</li>
            <li>Writers and creators who want a reliable idea engine instead of inspiration roulette</li>
            <li>Builders and researchers who need to track sources and trace concepts over time</li>
          </ul>

          <h3 className="mt-10 text-xl font-semibold tracking-tight">About</h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            I&apos;m Grady Harwood. I build systems for thinking and doing—so the work feels lighter and the output gets
            better. <em>Verstreuen</em> is where ideas from my WorkFrame system come to life as stories, frameworks, and
            reflections.
          </p>
        </div>
      </section>
    </main>
  )
}
