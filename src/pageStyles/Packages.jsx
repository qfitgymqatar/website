"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import PageBanner from '@/components/PageBanner';
import { Flame, Shield, Award, Dumbbell, Zap, CheckCircle2, CreditCard, Eye, X, FileText, ArrowRight } from 'lucide-react';
import './Packages.css';

const Packages = () => {
  const { data } = useAdmin();
  const gallery = data?.gallery || [];
  const [showDocModal, setShowDocModal] = useState(false);

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

  // Official QFit Training Prices Rate Card Data (from Official Price Sheet)
  const rateCardGroupClasses = [
    {
      name: 'Boxing • Muay Thai • HIIT • Jiu-Jitsu',
      price: 'QAR 60',
      rate: 'QAR 60 / session',
      category: 'Group Class'
    },
    {
      name: 'Brazilian Jiu-Jitsu (BJJ)',
      price: 'QAR 80',
      rate: 'QAR 80 / session',
      category: 'Group Class'
    },
    {
      name: 'Monthly membership (Boxing • Muay Thai • HIIT)',
      price: 'QAR 600',
      rate: 'QAR 600 / month',
      category: 'Group Class'
    },
    {
      name: '3-month membership (Boxing • Muay Thai • HIIT)',
      price: 'QAR 1500',
      rate: 'QAR 1,500 / 3 months',
      category: 'Group Class'
    }
  ];

  const rateCardPersonalTraining = [
    {
      package: 'Single session',
      validity: 'Per session',
      price: 'QAR 250',
      category: 'Personal Training'
    },
    {
      package: 'Qatar Airways — 7 sessions',
      validity: '2 months',
      price: 'QAR 1300',
      badge: '✈️ Qatar Airways Exclusive',
      category: 'Personal Training'
    },
    {
      package: '10 sessions',
      validity: '1 month',
      price: 'QAR 1500',
      category: 'Personal Training'
    },
    {
      package: '12 sessions',
      validity: '1 month',
      price: 'QAR 1600',
      category: 'Personal Training'
    },
    {
      package: '20 sessions',
      validity: '6 weeks',
      price: 'QAR 2000',
      badge: '🔥 Best Value',
      category: 'Personal Training'
    }
  ];

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

  // Boxing Group Classes
  const boxingGroupPackages = [
    {
      category: 'Group Class',
      title: '1 Month Membership',
      price: 'QAR 600',
      subtitle: 'شهر واحد - حصص جماعية',
      features: ['Boxing • Muay Thai • HIIT', 'Coached by Certified Fight Coaches', 'Boxing Ring & Heavy Bag Access', 'Separate Ladies & Gents Sections', 'All Fitness Levels Welcome'],
      img: '/boxing-poster.jpg'
    },
    {
      category: 'Group Class',
      title: '3 Months Membership',
      price: 'QAR 1500',
      subtitle: '3 أشهر - حصص جماعية',
      features: ['Boxing • Muay Thai • HIIT', 'Technical Striking & Footwork', 'High-Intensity Calorie Burning', 'Boxing Gear & Ring Access', 'Structured Fight Progression'],
      img: '/boxing-poster.jpg'
    },
    {
      category: 'Group Class',
      title: '6 Months Membership + BJJ',
      price: 'QAR 2000',
      subtitle: '6 أشهر - ملاكمة ومواي تاي وجوجيتسو',
      features: ['Boxing • Muay Thai • HIIT • BJJ', 'Full Brazilian Jiu-Jitsu Included', 'Unlimited Fight Training Sessions', 'Maximum Savings (Best Combat Value)', 'Free Gym Facilities Access'],
      highlighted: true,
      badge: 'Best Value',
      img: '/boxing-poster.jpg'
    }
  ];

  // Personal Training Packages (from Official Training Prices Rate Card)
  const personalTrainingPackages = [
    {
      category: 'Personal Training',
      title: 'Single Session PT',
      price: 'QAR 250',
      validity: 'Per Session (جلسة واحدة)',
      features: ['1-on-1 Fight & Fitness Coach', 'Focused Padwork or Lifting Routine', 'Technique & Form Correction', 'No Long-Term Commitment'],
      img: getGalleryImage('', 5, '/hero-gym.jpg')
    },
    {
      category: 'Personal Training',
      title: 'Qatar Airways — 7 Sessions',
      price: 'QAR 1300',
      validity: 'Valid 2 Months (صالحة لمدة شهرين)',
      badge: '✈️ Qatar Airways Exclusive',
      features: ['Special Rate for Qatar Airways Staff & Crew', '1-on-1 Dedicated Coach', 'Flexible Booking Around Flight Rosters', 'Mitt Work, Technique & Conditioning'],
      img: getGalleryImage('', 6, '/hero-gym.jpg')
    },
    {
      category: 'Personal Training',
      title: '10 Sessions PT',
      price: 'QAR 1500',
      validity: 'Valid 1 Month (صالحة لمدة شهر واحد)',
      features: ['1-on-1 Dedicated Coach', 'Striking, Cardio & Strength Conditioning', 'Tailored Workout Progression', 'Flexible Scheduling'],
      img: getGalleryImage('', 7, '/service-pt.jpg')
    },
    {
      category: 'Personal Training',
      title: '12 Sessions PT',
      price: 'QAR 1600',
      validity: 'Valid 1 Month (صالحة لمدة شهر واحد)',
      features: ['3 Workouts Per Week Optimal Schedule', '1-on-1 Elite Coach Guidance', 'Technique Mastery & Body Transformation', 'Nutritional & Lifestyle Advice'],
      img: getGalleryImage('', 8, '/hero-gym.jpg')
    },
    {
      category: 'Personal Training',
      title: '20 Sessions PT',
      price: 'QAR 2000',
      validity: 'Valid 6 Weeks (صالحة لمدة 6 أسابيع)',
      highlighted: true,
      badge: '🔥 Best Value',
      features: ['Only QAR 100/session (Maximum Savings)', '1-on-1 Intensive Training', 'Rapid Transformation & Skill Building', 'Priority Ring & Equipment Access'],
      img: getGalleryImage('', 9, '/service-pt.jpg')
    },
    {
      category: 'Personal Training',
      title: 'Couples PT (10 Sessions)',
      price: 'QAR 2500',
      validity: 'Valid 1 Month (صالحة لمدة شهر واحد - تدريب ثنائي)',
      features: ['Train Together (2 Persons)', 'Fun & Dynamic Partner Drills', 'Customized Dual Workout Routines', 'Dedicated Coach'],
      img: getGalleryImage('', 10, '/hero-gym.jpg')
    }
  ];

  // Per Session Drop-in Classes
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
      category: 'Gym Fitness PT',
      title: '15 Days PT', 
      price: 'QAR 700', 
      features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Form & Technique Correction', 'Gym Floor Guidance'], 
      img: getGalleryImage('', 5, '/hero-gym.jpg') 
    },
    { 
      category: 'Gym Fitness PT',
      title: '1 Month PT', 
      price: 'QAR 1000', 
      features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Personalized Diet Plan', 'Weekly Body Progress Tracking'], 
      highlighted: true, 
      img: getGalleryImage('', 6, '/service-pt.jpg') 
    },
    { 
      category: 'Gym Fitness PT',
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
        {/* OFFICIAL QFIT TRAINING PRICES RATE SHEET (DOCUMENT LAYOUT) */}
        {/* ======================================================== */}
        <div className="official-rate-sheet-section">
          <div className="rate-sheet-header">
            <h2 className="rate-sheet-title">QFIT</h2>
            <p className="rate-sheet-subtitle">TRAINING PRICES • أسعار التدريب</p>
            <div className="rate-sheet-actions-top">
              <button 
                type="button" 
                className="document-view-btn" 
                onClick={() => setShowDocModal(true)}
              >
                <Eye size={16} /> View Official Rate Sheet
              </button>
              <a 
                href="/training-prices.png" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="document-view-btn"
              >
                <FileText size={16} /> Open Document Image
              </a>
            </div>
          </div>

          {/* GROUP CLASSES TABLE */}
          <div className="rate-table-block">
            <h3 className="rate-table-title">
              <Flame size={20} color="#e60026" /> GROUP CLASSES <span className="arabic-sub" style={{fontSize: '0.9rem', display: 'inline', marginLeft: '8px'}}>(حصص جماعية)</span>
            </h3>
            <div className="rate-table-container">
              <table className="rate-table">
                <thead className="rate-table-dark-header">
                  <tr>
                    <th>Class / Membership</th>
                    <th>Price</th>
                    <th style={{textAlign: 'right'}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rateCardGroupClasses.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <span className="rate-item-name">{item.name}</span>
                      </td>
                      <td className="rate-price-cell">{item.rate}</td>
                      <td style={{textAlign: 'right'}}>
                        <button 
                          className="rate-action-btn"
                          onClick={() => window.location.href = `/booking?plan=${encodeURIComponent(`${item.category} - ${item.name}`)}&price=${encodeURIComponent(item.price)}`}
                        >
                          Book Now <ArrowRight size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PERSONAL TRAINING TABLE */}
          <div className="rate-table-block">
            <h3 className="rate-table-title">
              <Dumbbell size={20} color="#00f2fe" /> PERSONAL TRAINING <span className="arabic-sub" style={{fontSize: '0.9rem', display: 'inline', marginLeft: '8px'}}>(تدريب شخصي)</span>
            </h3>
            <div className="rate-table-container">
              <table className="rate-table">
                <thead className="rate-table-red-header">
                  <tr>
                    <th>Package</th>
                    <th>Validity</th>
                    <th>Price</th>
                    <th style={{textAlign: 'right'}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rateCardPersonalTraining.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="rate-item-name">
                          <span>{item.package}</span>
                          {item.badge && (
                            <span className={item.badge.includes('Qatar') ? 'qa-badge' : 'best-value-badge'}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="rate-validity-tag">{item.validity}</td>
                      <td className="rate-price-cell">{item.price}</td>
                      <td style={{textAlign: 'right'}}>
                        <button 
                          className="rate-action-btn"
                          onClick={() => window.location.href = `/booking?plan=${encodeURIComponent(`${item.category} - ${item.package}`)}&price=${encodeURIComponent(item.price)}`}
                        >
                          Book Now <ArrowRight size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SLOGAN AT BOTTOM */}
          <div className="rate-sheet-slogan-wrap">
            <h4 className="rate-sheet-slogan">Train hard. Build skill. Get stronger.</h4>
            <p className="rate-sheet-slogan-ar">تدرب بقوة • ابنِ مهارتك • كن أقوى</p>
          </div>
        </div>

        {/* DOCUMENT PREVIEW MODAL */}
        {showDocModal && (
          <div className="document-preview-modal-overlay" onClick={() => setShowDocModal(false)}>
            <div className="document-preview-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setShowDocModal(false)}>
                <X size={20} />
              </button>
              <img src="/training-prices.png" alt="QFit Training Prices Official Document" className="document-preview-img" />
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* BOXING & COMBAT SPORTS FEATURE SECTION */}
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
                  href="#group-class-cards" 
                  className="btn-primary" 
                  style={{padding: '12px 25px'}}
                >
                  View Class Packages Below ↓
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

          {/* Table 1: Group Classes (Cards) */}
          <div id="group-class-cards" style={{paddingTop: '20px'}}>
            <h3 className="sub-heading-center">Group Class Memberships (Boxing / Muay Thai / HIIT / BJJ) <span className="arabic-sub">حصص جماعية (ملاكمة ومواي تاي)</span></h3>
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
                    onClick={() => window.location.href = `/booking?plan=${encodeURIComponent(`Group Class - ${item.title}`)}&price=${encodeURIComponent(item.price)}`}
                  >
                    Book Session
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Table 3: Personal Training */}
          <div style={{marginTop: '50px'}}>
            <h3 className="sub-heading-center">Personal Training Packages <span className="arabic-sub">باقات التدريب الشخصي</span></h3>
            <div className="packages-grid">
              {personalTrainingPackages.map(renderCard)}
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
