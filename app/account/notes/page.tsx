import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Account — Notes",
  description: "Zettelkasten view",
}

export default function NotesPage() {
  return (
    <div>
      <header className="mb-4">
        <h1 className="text-2xl font-semibold">Notes</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Empty state */}
        <Card className="md:col-span-3">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              This is where connected ideas live. Capture a highlight to get started.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
