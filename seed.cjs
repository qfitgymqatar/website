const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://oudpalgjeunqoekjzxzv.supabase.co';
const supabaseAnonKey = 'sb_publishable_If0u1pqicNDoCCbSwHLNUw_tokt8iE1';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const seed = async () => {
  console.log("Seeding database...");

  // Delete existing trainers to prevent duplicates of "Test"
  await supabase.from('trainers').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  // Trainers
  const trainersData = [
    { 
      name: 'Ahmed Yassin', 
      role: 'HEAD COACH (GENTS)', 
      exp: '10+ Years', 
      qual: 'Certified Personal Trainer\n(Lebanese Federation)', 
      achievements: '1st Place LFBB Classic Physique 2019\n5th Place IFBB Arnold Classic Spain 2018\nIFBB Diamond Cup Lebanon 3rd Place 2019', 
      specialties: 'Bodybuilding & Fitness\nSpecialized Programs (Weight Loss/Gain)\nStrength & Conditioning\nMobility & Flexibility', 
      img: '/qfit-trainer.jpg' 
    },
    { 
      name: 'Sarah Rahman', 
      role: 'HEAD COACH (LADIES)', 
      exp: '8 Years', 
      qual: 'Physical Education Teacher\nCertified Personal Trainer\nFitness Judge', 
      achievements: 'Outstanding Coach Award 2022\nYoga Alliance Certified E-RYT 500', 
      specialties: 'Rehabilitation after injuries\nPhysical Preparation\nCircuit Training\nBodybuilding & Fitness', 
      img: '/qfit-trainer.jpg' 
    },
    { 
      name: 'Omar Farooq', 
      role: 'SENIOR PERSONAL TRAINER', 
      exp: '6 Years', 
      qual: 'Certified Personal Trainer\nNutrition Specialist', 
      achievements: 'Top Trainer of the Year 2021\nCrossfit Level 2 Trainer', 
      specialties: 'Calisthenics\nCrossfit\nStrength & Conditioning\nImprove Mobility & Flexibility', 
      img: '/qfit-trainer.jpg' 
    }
  ];

  const { error: tError } = await supabase.from('trainers').insert(trainersData);
  if (tError) {
    console.error("Trainer seed failed:", tError);
  } else {
    console.log("Trainers seeded.");
  }
};

seed().catch(console.error);
