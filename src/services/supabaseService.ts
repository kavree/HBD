import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pkqtnhirpcxpaqmcaack.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrcXRuaGlycGN4cGFxbWNhYWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMDgwMTQsImV4cCI6MjA2NDY4NDAxNH0.HMC9k6xg11hxk6jTTw5cu5TmOexzdDrxzho9VEidFSE';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchBirthdayImages = async () => {
  const { data, error } = await supabase
    .from('birthday_images')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}; 