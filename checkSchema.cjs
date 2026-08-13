const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://oudpalgjeunqoekjzxzv.supabase.co';
const supabaseAnonKey = 'sb_publishable_If0u1pqicNDoCCbSwHLNUw_tokt8iE1';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const checkSchema = async () => {
  const { data, error } = await supabase.from('trainers').select('achievements').limit(1);
  if (error) {
    console.log("COLUMNS_MISSING");
  } else {
    console.log("COLUMNS_EXIST");
  }
};

checkSchema();
