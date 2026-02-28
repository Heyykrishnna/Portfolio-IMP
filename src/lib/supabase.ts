import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Check your .env file.');
}

export const supabase = createClient(
  supabaseUrl || 'https://qhqcpldkbysrcobeodhz.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFocWNwbGRrYnlzcmNvYmVvZGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyNTUwNzcsImV4cCI6MjA4NzgzMTA3N30.lEAa9PQlARuGKm4_D4ILMKJFeU_WnByvYkihXBrO6ck'
);
