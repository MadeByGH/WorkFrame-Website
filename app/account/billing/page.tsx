import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Account — Billing & Plans",
  description: "Manage your plan and invoices.",
}

export default function BillingPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Billing & Plans</h1>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium">Current plan</h3>
            <p className="mt-1 text-sm text-muted-foreground">Trial — 14 days remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium">Invoices</h3>
            <p className="mt-1 text-sm text-muted-foreground">No invoices yet.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
