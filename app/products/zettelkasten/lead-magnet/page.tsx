import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

const SUBSTACK_URL = "https://verstreuen.substack.com"

export const metadata: Metadata = {
  title: "Zettelkasten Toolbox — WorkFrame × Verstreuen",
  description:
    "Get the free Zettelkasten Toolbox and join Verstreuen on Substack for weekly top 3 notes plus the connections that unlock better writing.",
}

export default function ZettelkastenLeadMagnetPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10 md:px-6 md:py-14">
      <section className="rounded-xl border bg-muted/30 p-5 md:p-7">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">WorkFrame × Verstreuen</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Stop losing your best ideas. Build a durable knowledge graph in Notion.
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Zettelkasten Toolbox is a lightweight template that turns scattered highlights into connected notes, topics,
          and sources—so your thinking compounds and your writing gets easier over time.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          If you&apos;re a curious reader, creator, or builder with a pile of highlights, notes, and half-formed ideas,
          this free Zettelkasten Toolbox turns them into a durable, connected knowledge graph in Notion. Each week in{" "}
          <em>Verstreuen</em>, I share the top 3 notes I added (and the connections they unlocked) so you can borrow the
          same patterns in your own system.
        </p>
        <div className="mt-6">
          <Button asChild className="w-full bg-indigo-600 text-base hover:bg-indigo-700">
            <a href={SUBSTACK_URL} target="_blank" rel="noreferrer">
              Subscribe on Verstreuen Substack
            </a>
          </Button>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold tracking-tight">What you get</h2>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Capture cleanly:</strong> a repeatable input flow for quotes,
            definitions, frameworks, and strategies.
          </li>
          <li>
            <strong className="text-foreground">Connect naturally:</strong> bidirectional links between Notes ↔ Topics and
            Notes ↔ Sources so context travels with every idea.
          </li>
          <li>
            <strong className="text-foreground">Recall + create faster:</strong> “This Week&apos;s Notes” surfaces what you
            just learned so you can turn it into output.
          </li>
        </ul>
      </section>

      <section className="mt-8 rounded-lg border p-4 md:p-5">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Notes → Topics → Sources + “This Week&apos;s Notes” view.
        </p>
        <img
          src="/zettelkasten-hero.png"
          alt="Zettelkasten Toolbox preview in Notion"
          className="mt-4 h-auto w-full rounded-md border object-cover"
          width={960}
          height={560}
        />
      </section>

      <section className="mt-8 rounded-lg border p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          This template is the tool. The newsletter is the practice.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Join <em>Verstreuen</em> on Substack to get the free template and weekly “top 3 notes + connections” issues.
        </p>
        <div className="mt-4">
          <Button asChild variant="outline" className="w-full">
            <a href={SUBSTACK_URL} target="_blank" rel="noreferrer">
              Get the template via Substack
            </a>
          </Button>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold tracking-tight">About</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          I&apos;m Grady Harwood. I build systems for thinking and doing so the work feels lighter and the output gets
          better. <em>Verstreuen</em> is where ideas from WorkFrame come to life as stories, frameworks, and reflections.
        </p>
      </section>
    </main>
  )
}
