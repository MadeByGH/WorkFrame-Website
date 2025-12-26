import { NextResponse } from "next/server"

export async function POST(req: Request) {
  console.log("[Discord Webhook] Received POST request")

  const { content } = await req.json()
  console.log("[Discord Webhook] Content:", content)

  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    console.error("[Discord Webhook] Webhook URL not configured")
    return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 })
  }

  try {
    console.log("[Discord Webhook] Sending to Discord...")
    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    })

    if (!discordRes.ok) {
      console.error(`[Discord Webhook] Discord returned status ${discordRes.status}`)
      return NextResponse.json({ error: "Failed to send to Discord" }, { status: discordRes.status })
    }

    console.log("[Discord Webhook] Successfully sent to Discord")
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[Discord Webhook] Error:", err)
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}
