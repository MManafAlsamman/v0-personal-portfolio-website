"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Trash2, Check } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

type Message = {
  id: string
  name: string
  email: string
  message: string
  created_at: string
  read: boolean
}

export function MessagesList({ initialMessages }: { initialMessages: Message[] }) {
  const [messages, setMessages] = useState(initialMessages)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const markAsRead = async (id: string) => {
    const { error } = await supabase.from("contact_messages").update({ read: true }).eq("id", id)

    if (!error) {
      setMessages(messages.map((m) => (m.id === id ? { ...m, read: true } : m)))
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, read: true })
      }
    }
  }

  const deleteMessage = async (id: string) => {
    const { error } = await supabase.from("contact_messages").delete().eq("id", id)

    if (!error) {
      setMessages(messages.filter((m) => m.id !== id))
      if (selectedMessage?.id === id) {
        setSelectedMessage(null)
      }
      router.refresh()
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Messages List */}
      <div className="lg:col-span-1 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Messages ({messages.length})</h2>
          <Badge variant="secondary" className="bg-[#00FFD1]/20 text-[#00FFD1]">
            {messages.filter((m) => !m.read).length} Unread
          </Badge>
        </div>

        <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`p-4 cursor-pointer transition-all border ${
                selectedMessage?.id === message.id
                  ? "bg-[#00FFD1]/10 border-[#00FFD1]"
                  : "bg-black/40 border-[#00FFD1]/20 hover:border-[#00FFD1]/40"
              } backdrop-blur-xl`}
              onClick={() => setSelectedMessage(message)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Mail className={`w-4 h-4 ${message.read ? "text-gray-500" : "text-[#00FFD1]"}`} />
                  <span className={`font-semibold ${message.read ? "text-gray-400" : "text-white"}`}>
                    {message.name}
                  </span>
                </div>
                {!message.read && <Badge className="bg-[#00FFD1] text-black text-xs">New</Badge>}
              </div>
              <p className="text-sm text-gray-400 truncate">{message.email}</p>
              <p className="text-xs text-gray-500 mt-2">{formatDate(message.created_at)}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Message Detail */}
      <div className="lg:col-span-2">
        {selectedMessage ? (
          <Card className="p-6 bg-black/40 backdrop-blur-xl border-[#00FFD1]/20">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedMessage.name}</h3>
                <a href={`mailto:${selectedMessage.email}`} className="text-[#00FFD1] hover:underline">
                  {selectedMessage.email}
                </a>
                <p className="text-sm text-gray-500 mt-2">{formatDate(selectedMessage.created_at)}</p>
              </div>
              <div className="flex gap-2">
                {!selectedMessage.read && (
                  <Button
                    size="sm"
                    onClick={() => markAsRead(selectedMessage.id)}
                    className="bg-[#00FFD1]/20 text-[#00FFD1] hover:bg-[#00FFD1]/30"
                  >
                    <Check className="w-4 h-4 mr-1" />
                    Mark Read
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    if (confirm("Are you sure you want to delete this message?")) {
                      deleteMessage(selectedMessage.id)
                    }
                  }}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>

            <div className="border-t border-[#00FFD1]/20 pt-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">MESSAGE</h4>
              <p className="text-white whitespace-pre-wrap leading-relaxed">{selectedMessage.message}</p>
            </div>
          </Card>
        ) : (
          <Card className="p-12 bg-black/40 backdrop-blur-xl border-[#00FFD1]/20 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Mail className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Select a message to view details</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
