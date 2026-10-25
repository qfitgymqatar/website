"use client";

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import PageBanner from '@/components/PageBanner';
import { Flame, Shield, Award, Dumbbell, Zap, CheckCircle2, CreditCard } from 'lucide-react';
import '@/pageStyles/Packages.css';

const Packages = () => {
  const { data } = useAdmin();
  const gallery = data?.gallery || [];

  // Helper to find a gallery image by title keyword, or by index fallback
  const getGalleryImage = (keyword, fallbackIndex, defaultPath) => {
    if (gallery.length > 0) {
      if (keyword) {
        const found = gallery.find(g => g.title && g.title.toLowerCase().includes(keyword.toLowerCase()));
        if (found?.url) return found.url;
      }
      if (gallery[fallbackIndex]?.url) return gallery[fallbackIndex].url;
    }
    return defaultPath;
  };

  const memberships = [
    { 
      category: 'General Gym',
      title: '1 Month Membership', 
      price: 'QAR 250', 
      features: ['Full Gym Access (Open 24/7)', 'Locker & Shower Usage', 'State-of-the-art Cardio Zone', 'Free Weights Area', 'Ladies & Gents Sections'], 
      img: getGalleryImage('cardio', 0, '/hero-gym.jpg') 
    },
    { 
      category: 'General Gym',
      title: '3 Months Membership', 
      price: 'QAR 650', 
      features: ['Full Gym Access (Open 24/7)', 'Unlimited Group Workouts', 'Locker & Shower Usage', 'Complimentary Fitness Assessment', 'Ladies & Gents Sections'], 
      img: getGalleryImage('functional', 1, '/service-group.jpg') 
    },
    { 
      category: 'General Gym',
      title: '6 Months Membership', 
      price: 'QAR 1200', 
      features: ['Full Gym Access (Open 24/7)', 'Unlimited Group Workouts', 'Advanced Body Composition Scan', '30 Days Membership Freezing', 'VIP Locker Access'], 
      highlighted: true, 
      img: getGalleryImage('free weight', 2, '/service-weights.jpg') 
    },
    { 
      category: 'General Gym',
      title: '1 Year Membership', 
      price: 'QAR 2100', 
      features: ['Full Gym Access (Open 24/7)', 'All-Inclusive Amenities', 'Priority Class Booking', '45 Days Membership Freezing', 'Best Value Long-Term Rate'], 
      img: getGalleryImage('boxing', 3, '/hero-gym.jpg') 
    },
    { 
      category: 'General Gym',
      title: 'Lifetime Member', 
      price: 'QAR 15000', 
      features: ['Permanent Access to all Gym Facilities', 'Lifetime Privileged VIP Status', 'Complimentary Guest Passes', 'Dedicated Personal Locker & Towel Service'], 
      img: getGalleryImage('bjj', 4, '/hero-gym.jpg') 
    }
  ];

  // Boxing Group Classes (from Official Poster)
  const boxingGroupPackages = [
    {
      category: 'Boxing Group Classes',
      title: '1 Month Boxing Group',
      price: 'QAR 600',
      subtitle: 'شهر واحد - حصص جماعية',
      features: ['Boxing • Muay Thai • HIIT', 'Coached by Certified Fight Coaches', 'Boxing Ring & Heavy Bag Access', 'Separate Ladies & Gents Sections', 'All Fitness Levels Welcome'],
      img: '/boxing-poster.jpg'
    },
    {
      category: 'Boxing Group Classes',
      title: '3 Months Boxing Group',
      price: 'QAR 1500',
      subtitle: '3 أشهر - حصص جماعية',
      features: ['Boxing • Muay Thai • HIIT', 'Technical Striking & Footwork', 'High-Intensity Calorie Burning', 'Boxing Gear & Ring Access', 'Structured Fight Progression'],
      img: '/boxing-poster.jpg'
    },
    {
      category: 'Boxing Group Classes',
      title: '6 Months Boxing Group + BJJ',
      price: 'QAR 2000',
      subtitle: '6 أشهر - ملاكمة ومواي تاي وجوجيتسو',
      features: ['Boxing • Muay Thai • HIIT • BJJ', 'Full Brazilian Jiu-Jitsu Included', 'Unlimited Fight Training Sessions', 'Maximum Savings (Best Combat Value)', 'Free Gym Facilities Access'],
      highlighted: true,
      badge: 'Best Value',
      img: '/boxing-poster.jpg'
    }
  ];

  // Boxing Personal Training (from Official Poster)
  const boxingPTPackages = [
    {
      category: 'Boxing Personal Training',
      title: '7 Sessions Boxing PT',
      price: 'QAR 1300',
      validity: 'Valid 2 Months (صالحة لمدة شهرين)',
      features: ['1-on-1 Fight Coach', 'Mitt Work & Pad Drills', 'Technique & Defense Mastery', 'Customized Fight Fitness Plan'],
      img: '/boxing-poster.jpg'
    },
    {
      category: 'Boxing Personal Training',
      title: '10 Sessions Boxing PT',
      price: 'QAR 1500',
      validity: 'Valid 1 Month (صالحة لمدة شهر واحد)',
      features: ['1-on-1 Dedicated Coach', 'Boxing & Muay Thai Striking', 'Cardio & Strength Conditioning', 'Flexible Scheduling'],
      img: '/boxing-poster.jpg'
    },
    {
      category: 'Boxing Personal Training',
      title: '20 Sessions Boxing PT',
      price: 'QAR 2500',
      validity: 'Valid 5 Weeks (صالحة لمدة 5 أسابيع)',
      features: ['1-on-1 Intensive Training', 'Rapid Transformation & Skill', 'Nutritional Advice & Tracking', 'Priority Ring & Equipment Access'],
      highlighted: true,
      badge: 'Pro Choice',
      img: '/boxing-poster.jpg'
    },
    {
      category: 'Boxing Personal Training',
      title: 'Couples PT (10 Sessions)',
      price: 'QAR 2500',
      validity: 'Valid 1 Month (صالحة لمدة شهر واحد - تدريب ثنائي)',
      features: ['Train Together (2 Persons)', 'Fun & Dynamic Partner Drills', 'Customized Dual Workout Routines', 'Dedicated Fight Coach'],
      img: '/boxing-poster.jpg'
    }
  ];

  // Per Session Drop-in Classes (from Official Poster)
  const perSessionRates = [
    {
      title: 'Boxing • Muay Thai • HIIT • Jiu-Jitsu',
      price: 'QAR 60',
      unit: '/ session',
      tag: 'Single Drop-In Pass',
      desc: 'Join any scheduled striking, HIIT, or Jiu-Jitsu class with no long-term commitment.'
    },
    {
      title: 'Brazilian Jiu-Jitsu (BJJ) Session',
      price: 'QAR 80',
      unit: '/ session',
      tag: 'BJJ Drop-In Pass',
      desc: 'Expert Brazilian Jiu-Jitsu gi / no-gi ground technique class with certified masters.'
    }
  ];

  // General Gym Personal Training
  const generalPtPackages = [
    { 
      category: 'Gym Personal Training',
      title: '15 Days PT', 
      price: 'QAR 700', 
      features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Form & Technique Correction', 'Gym Floor Guidance'], 
      img: getGalleryImage('', 5, '/hero-gym.jpg') 
    },
    { 
      category: 'Gym Personal Training',
      title: '1 Month PT', 
      price: 'QAR 1000', 
      features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Personalized Diet Plan', 'Weekly Body Progress Tracking'], 
      highlighted: true, 
      img: getGalleryImage('', 6, '/service-pt.jpg') 
    },
    { 
      category: 'Gym Personal Training',
      title: '2 Months PT', 
      price: 'QAR 1650', 
      features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Personalized Diet Plan', 'Priority Booking & VIP Access'], 
      img: getGalleryImage('', 7, '/hero-gym.jpg') 
    }
  ];

  const handleSelectPlan = (pkg) => {
    const planName = pkg.category ? `${pkg.category} - ${pkg.title}` : pkg.title;
    window.location.href = `/booking?plan=${encodeURIComponent(planName)}&price=${encodeURIComponent(pkg.price)}`;
  };

  const renderCard = (pkg, idx) => (
    <div key={idx} className={`pkg-img-card ${pkg.highlighted ? 'highlighted' : ''} ${pkg.wide ? 'wide-card' : ''}`} style={{ backgroundImage: `url(${pkg.img})` }}>
      <div className="pkg-overlay"></div>
      <div className="pkg-content">
        {pkg.badge && <span className="pkg-badge">{pkg.badge}</span>}
        <h3 className="pkg-title">{pkg.title}</h3>
        {pkg.subtitle && <p className="pkg-subtitle">{pkg.subtitle}</p>}
        {pkg.validity && <p className="pkg-validity-tag">⏱️ {pkg.validity}</p>}
        <h2 className="pkg-price">{pkg.price}</h2>
        <ul className="pkg-features">
          {pkg.features.map((feature, fIdx) => (
            <li key={fIdx}>
              <span className="pkg-icon">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <button 
          className="btn-primary pkg-btn" 
          onClick={() => handleSelectPlan(pkg)}
        >
          Select Plan & Choose Payment
        </button>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <PageBanner 
        title="Membership & Class Packages" 
        subtitle="Transparent rates with flexible payment options. Choose your plan below." 
        bgImage="/hero-gym.jpg" 
      />

      <div className="content-wrapper">
        
        {/* Registration fee notice & payment options bar */}
        <div className="registration-notice">
          <p>A One-Time Registration Fee of <strong>QAR 50</strong> applies to all new memberships.</p>
          <div className="payment-options-banner">
            <span><CreditCard size={18} style={{marginRight: '6px', verticalAlign: 'middle', color: '#00f2fe'}} /> <strong>Payment Options:</strong> Pay at Gym Reception (Cash/Card) • Online Card Link via WhatsApp • Direct Bank Transfer</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOXING & COMBAT SPORTS FEATURE SECTION (NEW) */}
        {/* ======================================================== */}
        <div className="boxing-showcase-section">
          <div className="boxing-header-row">
            <div>
              <span className="boxing-badge">🥊 COMBAT SPORTS & FITNESS</span>
              <h2 className="boxing-section-title">BOXING & MARTIAL ARTS <span className="text-red">CLASSES</span></h2>
              <p className="boxing-section-subtitle">
                Train • Fight • Believe • Achieve — Boxing, Muay Thai, HIIT & Brazilian Jiu-Jitsu (BJJ) with separate Gents & Ladies facilities.
              </p>
            </div>
            <div className="boxing-features-pills">
              <span><Flame size={16} /> Burn Calories</span>
              <span><Zap size={16} /> Build Strength</span>
              <span><Shield size={16} /> Self Defense</span>
              <span><Award size={16} /> Real Skills</span>
            </div>
          </div>

          {/* Boxing Poster Feature Card */}
          <div className="boxing-promo-banner">
            <div className="boxing-promo-img-wrap">
              <img src="/boxing-poster.jpg" alt="QFit Boxing Classes" className="boxing-poster-preview" />
            </div>
            <div className="boxing-promo-details">
              <h3>Get Your Life Back On Track</h3>
              <p>Experience high-energy training with specialized equipment and dedicated combat zones in Mansoura, Doha.</p>
              <ul className="boxing-amenities-list">
                <li><CheckCircle2 size={16} color="#e60026" /> Boxing Ring & Official Punching Bags</li>
                <li><CheckCircle2 size={16} color="#e60026" /> Complete Boxing & Protective Gear</li>
                <li><CheckCircle2 size={16} color="#e60026" /> Dedicated Gents & Ladies Sections</li>
                <li><CheckCircle2 size={16} color="#e60026" /> Cardio & Strength Training Zones</li>
                <li><CheckCircle2 size={16} color="#e60026" /> Open 24 Hours (Friday 4 PM - 10 PM)</li>
              </ul>
              <div className="boxing-promo-cta">
                <a 
                  href="#boxing-group-rates" 
                  className="btn-primary" 
                  style={{padding: '12px 25px'}}
                >
                  View Boxing Rates Below ↓
                </a>
                <a 
                  href="https://wa.me/97433279451?text=Hello,%20I%20would%20like%20to%20inquire%20about%20Boxing%20Classes%20at%20QFit%20Gym!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                  style={{padding: '12px 25px'}}
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>

          {/* Table 1: Group Classes (Boxing) */}
          <div id="boxing-group-rates" style={{paddingTop: '20px'}}>
            <h3 className="sub-heading-center">Group Classes (Boxing / Muay Thai / HIIT / BJJ) <span className="arabic-sub">حصص جماعية (ملاكمة)</span></h3>
            <div className="packages-grid">
              {boxingGroupPackages.map(renderCard)}
            </div>
          </div>

          {/* Table 2: Per Session Prices (Drop-in) */}
          <div style={{marginTop: '50px'}}>
            <h3 className="sub-heading-center">Per Session Drop-In Passes <span className="arabic-sub">أسعار الحصص الفردية</span></h3>
            <div className="per-session-grid">
              {perSessionRates.map((item, sIdx) => (
                <div key={sIdx} className="session-card">
                  <div className="session-tag">{item.tag}</div>
                  <h4 className="session-title">{item.title}</h4>
                  <p className="session-desc">{item.desc}</p>
                  <div className="session-price-row">
                    <span className="session-price">{item.price}</span>
                    <span className="session-unit">{item.unit}</span>
                  </div>
                  <button 
                    className="btn-primary session-btn"
                    onClick={() => window.location.href = `/booking?plan=${encodeURIComponent(item.title)}&price=${encodeURIComponent(item.price)}`}
                  >
                    Book Session
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Table 3: Boxing Personal Training */}
          <div style={{marginTop: '50px'}}>
            <h3 className="sub-heading-center">Personal Training — Boxing <span className="arabic-sub">تدريب شخصي (ملاكمة)</span></h3>
            <div className="packages-grid">
              {boxingPTPackages.map(renderCard)}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* GENERAL GYM MEMBERSHIPS */}
        {/* ======================================================== */}
        <div style={{marginTop: '70px'}}>
          <h2 className="section-title text-center">General Gym Membership <span className="arabic-sub">اشتراكات الجيم العامة</span></h2>
          <div className="packages-grid">
            {memberships.map(renderCard)}
          </div>
        </div>

        {/* ======================================================== */}
        {/* GENERAL GYM PERSONAL TRAINING */}
        {/* ======================================================== */}
        <div style={{marginTop: '70px', marginBottom: '40px'}}>
          <h2 className="section-title text-center">General Fitness Coaching <span className="arabic-sub">تدريب اللياقة البدنية العام</span></h2>
          <div className="packages-grid">
            {generalPtPackages.map(renderCard)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Packages;
