import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { MessagesList } from "@/components/admin/messages-list"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function AdminPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  // Fetch all contact messages
  const { data: messages, error: messagesError } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })

  if (messagesError) {
    console.error("Error fetching messages:", messagesError)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1a0b2e] to-[#0A0A0F] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#00FFD1] mb-2">Admin Panel</h1>
            <p className="text-gray-400">Manage contact form messages</p>
          </div>
          <form action="/auth/logout" method="post">
            <Button
              type="submit"
              variant="outline"
              className="border-[#00FFD1]/20 text-[#00FFD1] hover:bg-[#00FFD1]/10 bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </form>
        </div>

        <MessagesList initialMessages={messages || []} />
      </div>
    </div>
  )
}
