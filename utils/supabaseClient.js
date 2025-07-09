import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://shvlsbktktksfysnmkcg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNodmxzYmt0a3Rrc2Z5c25ta2NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNzY1NDAsImV4cCI6MjA2NzY1MjU0MH0.irnp2K9MzI1EMWew0mrnJafOQjMbCPER57RJPw9rYiw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
