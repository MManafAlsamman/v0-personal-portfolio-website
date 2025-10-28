-- Create contact_messages table to store messages from the contact form
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  read boolean default false
);

-- Enable Row Level Security
alter table public.contact_messages enable row level security;

-- Create policy to allow authenticated users to view all messages
create policy "Allow authenticated users to view all messages"
  on public.contact_messages for select
  using (auth.role() = 'authenticated');

-- Create policy to allow anyone to insert messages (for the contact form)
create policy "Allow anyone to insert messages"
  on public.contact_messages for insert
  with check (true);

-- Create policy to allow authenticated users to update messages (mark as read)
create policy "Allow authenticated users to update messages"
  on public.contact_messages for update
  using (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete messages
create policy "Allow authenticated users to delete messages"
  on public.contact_messages for delete
  using (auth.role() = 'authenticated');

-- Create index for faster queries
create index if not exists contact_messages_created_at_idx on public.contact_messages(created_at desc);
create index if not exists contact_messages_read_idx on public.contact_messages(read);
