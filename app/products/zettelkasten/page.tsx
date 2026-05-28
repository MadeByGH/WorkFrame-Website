import type { Metadata } from "next"
import ZettelClientPage from "./zettelkasten-client"

export const metadata: Metadata = {
  title: "Zettelkasten Toolbox — Free template + Verstreuen newsletter",
  description:
    "Get the free Zettelkasten Toolbox and weekly Verstreuen notes to turn scattered highlights into a durable, connected knowledge graph in Notion.",
  openGraph: {
    title: "Zettelkasten Toolbox — Free template + Verstreuen newsletter",
    description:
      "Get the free Zettelkasten Toolbox and weekly Verstreuen notes to turn scattered highlights into a durable, connected knowledge graph in Notion.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zettelkasten Toolbox — Free template + Verstreuen newsletter",
    description:
      "Get the free Zettelkasten Toolbox and weekly Verstreuen notes to turn scattered highlights into a durable, connected knowledge graph in Notion.",
  },
}

export default function ZettelPage() {
  return <ZettelClientPage />
}
