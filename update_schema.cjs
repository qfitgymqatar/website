const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Extract URL and Key from .env
const envFile = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
const supabaseUrl = envFile.match(/VITE_SUPABASE_URL=(.*)/)[1].trim();
const supabaseKey = envFile.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1].trim();

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log('Altering careers table...');
  const { data, error } = await supabase.rpc('run_sql', {
    sql_query: 'ALTER TABLE careers ADD COLUMN IF NOT EXISTS img text;'
  });
  
  if (error) {
    console.error('Failed via RPC, trying direct insert trigger fail trick...');
    console.error(error);
  } else {
    console.log('Success:', data);
  }
}

run();
