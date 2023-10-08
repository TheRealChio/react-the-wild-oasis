import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://laqqnwkxvfgmjjqgthpm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcXFud2t4dmZnbWpqcWd0aHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2NzgyODksImV4cCI6MjAxMjI1NDI4OX0.LwkuoUx2ks4DJmD3vDYx0c8sTvEZnPbMJ5nZXwPwfxU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
