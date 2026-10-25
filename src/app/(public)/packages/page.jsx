"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import PageBanner from '@/components/PageBanner';
import { Flame, Shield, Award, Dumbbell, Zap, CheckCircle2, CreditCard, Eye, X, FileText, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import '@/pageStyles/Packages.css';

const CATEGORIES = [
  {
    id: 'boxing',
    icon: '🥊',
    title: 'Boxing & Combat Sports',
    titleAr: 'ملاكمة ورياضات قتالية',
    badge: 'Classes & Passes'
  },
  {
    id: 'pt',
    icon: '🏋️‍♂️',
    title: 'Personal Training',
    titleAr: 'تدريب شخصي (1-on-1)',
    badge: 'Elite Coaching'
  },
  {
    id: 'gym',
    icon: '🏢',
    title: 'Gym Membership',
    titleAr: 'اشتراكات الجيم العامة',
    badge: 'Open 24/7'
  }
];

const Packages = () => {
  const { data } = useAdmin();
  const gallery = data?.gallery || [];
  const [activeCategory, setActiveCategory] = useState('boxing');
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

  // ========================================================
  // 1. BOXING & COMBAT SPORTS PACKAGES
  // ========================================================
  const boxingGroupPackages = [
    {
      category: 'Group Class',
      title: '1 Month Membership',
      price: 'QAR 600',
      subtitle: 'شهر واحد - حصص جماعية',
      features: [
        'Boxing • Muay Thai • HIIT',
        'Coached by Certified Fight Coaches',
        'Boxing Ring & Heavy Bag Access',
        'Separate Ladies & Gents Sections',
        'All Fitness Levels Welcome'
      ],
      img: getGalleryImage('boxing', 0, '/hero-gym.jpg')
    },
    {
      category: 'Group Class',
      title: '3 Months Membership',
      price: 'QAR 1500',
      subtitle: '3 أشهر - حصص جماعية',
      features: [
        'Boxing • Muay Thai • HIIT',
        'Technical Striking & Footwork',
        'High-Intensity Calorie Burning',
        'Structured Fight Progression',
        'Boxing Ring & Heavy Bag Access'
      ],
      img: getGalleryImage('boxing', 1, '/hero-sports.jpg')
    },
    {
      category: 'Group Class',
      title: '6 Months Membership + BJJ',
      price: 'QAR 2000',
      subtitle: '6 أشهر - ملاكمة ومواي تاي وجوجيتسو',
      features: [
        'Boxing • Muay Thai • HIIT • BJJ',
        'Full Brazilian Jiu-Jitsu Included',
        'Unlimited Fight Training Sessions',
        'Maximum Savings (Best Combat Value)',
        'Full Gym Facilities Access'
      ],
      highlighted: true,
      badge: 'Best Value',
      img: getGalleryImage('bjj', 2, '/hero-gym.jpg')
    }
  ];

  const perSessionRates = [
    {
      title: 'Boxing • Muay Thai • HIIT • Jiu-Jitsu',
      price: 'QAR 60',
      unit: '/ session',
      tag: 'Single Drop-In Pass',
      desc: 'Join any scheduled striking, conditioning, or Jiu-Jitsu session with no long-term commitment.'
    },
    {
      title: 'Brazilian Jiu-Jitsu (BJJ) Session',
      price: 'QAR 80',
      unit: '/ session',
      tag: 'BJJ Drop-In Pass',
      desc: 'Expert Brazilian Jiu-Jitsu gi / no-gi ground technique session with certified masters.'
    }
  ];

  // ========================================================
  // 2. PERSONAL TRAINING PACKAGES (FROM OFFICIAL RATE SHEET)
  // ========================================================
  const personalTrainingPackages = [
    {
      category: 'Personal Training',
      title: 'Single Session PT',
      price: 'QAR 250',
      validity: 'Per Session (جلسة واحدة)',
      features: [
        '1-on-1 Dedicated Private Coach',
        'Focused Padwork or Lifting Routine',
        'Technique & Form Assessment',
        'No Long-Term Commitment'
      ],
      img: getGalleryImage('pt', 3, '/hero-gym.jpg')
    },
    {
      category: 'Personal Training',
      title: 'Qatar Airways — 7 Sessions',
      price: 'QAR 1300',
      validity: 'Valid 2 Months (صالحة لمدة شهرين)',
      badge: '✈️ Qatar Airways Exclusive',
      qaBadge: true,
      features: [
        'Exclusive Partner Offer for Qatar Airways Staff & Crew',
        '1-on-1 Dedicated Coach',
        'Flexible Scheduling Around Flight Rosters',
        'Mitt Work, Striking & Conditioning'
      ],
      img: getGalleryImage('pt', 4, '/hero-gym.jpg')
    },
    {
      category: 'Personal Training',
      title: '10 Sessions PT',
      price: 'QAR 1500',
      validity: 'Valid 1 Month (صالحة لمدة شهر واحد)',
      features: [
        '1-on-1 Dedicated Coach',
        'Striking, Cardio & Strength Conditioning',
        'Tailored Workout Progression',
        'Flexible Scheduling'
      ],
      img: getGalleryImage('pt', 5, '/service-pt.jpg')
    },
    {
      category: 'Personal Training',
      title: '12 Sessions PT',
      price: 'QAR 1600',
      validity: 'Valid 1 Month (صالحة لمدة شهر واحد)',
      features: [
        '3 Sessions Per Week Optimal Progression',
        '1-on-1 Elite Coach Guidance',
        'Technique Mastery & Body Transformation',
        'Nutritional & Lifestyle Guidance'
      ],
      img: getGalleryImage('pt', 6, '/hero-gym.jpg')
    },
    {
      category: 'Personal Training',
      title: '20 Sessions PT',
      price: 'QAR 2000',
      validity: 'Valid 6 Weeks (صالحة لمدة 6 أسابيع)',
      highlighted: true,
      badge: '🔥 Best Value',
      features: [
        'Only QAR 100/session (Maximum Savings)',
        '1-on-1 Intensive Training',
        'Rapid Transformation & Skill Building',
        'Priority Ring & Equipment Access'
      ],
      img: getGalleryImage('pt', 7, '/service-pt.jpg')
    },
    {
      category: 'Personal Training',
      title: 'Couples PT (10 Sessions)',
      price: 'QAR 2500',
      validity: 'Valid 1 Month (صالحة لمدة شهر واحد - تدريب ثنائي)',
      features: [
        'Train Together (2 Persons)',
        'Fun & Dynamic Partner Drills',
        'Customized Dual Workout Routines',
        'Dedicated Private Coach'
      ],
      img: getGalleryImage('pt', 8, '/hero-gym.jpg')
    }
  ];

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

  // ========================================================
  // 3. GENERAL GYM MEMBERSHIPS
  // ========================================================
  const memberships = [
    { 
      category: 'General Gym',
      title: '1 Month Membership', 
      price: 'QAR 250', 
      subtitle: 'شهر واحد',
      features: [
        'Full Gym Access (Open 24/7)',
        'State-of-the-art Cardio Zone',
        'IVANKO Free Weights & Dumbbells Area',
        'Private Ladies & Gents Sections',
        'Locker & Shower Usage'
      ], 
      img: getGalleryImage('cardio', 0, '/hero-gym.jpg') 
    },
    { 
      category: 'General Gym',
      title: '3 Months Membership', 
      price: 'QAR 650', 
      subtitle: '3 أشهر',
      features: [
        'Full Gym Access (Open 24/7)',
        'Unlimited Workout Access',
        'Complimentary Fitness Assessment',
        'Private Ladies & Gents Sections',
        'Locker & Shower Usage'
      ], 
      img: getGalleryImage('functional', 1, '/service-group.jpg') 
    },
    { 
      category: 'General Gym',
      title: '6 Months Membership', 
      price: 'QAR 1200', 
      subtitle: '6 أشهر',
      features: [
        'Full Gym Access (Open 24/7)',
        'Unlimited Workout Access',
        'Advanced Body Composition Scan',
        '30 Days Membership Freezing',
        'VIP Locker & Shower Usage'
      ], 
      highlighted: true, 
      badge: 'Popular',
      img: getGalleryImage('free weight', 2, '/service-weights.jpg') 
    },
    { 
      category: 'General Gym',
      title: '1 Year Membership', 
      price: 'QAR 2100', 
      subtitle: 'سنة كاملة',
      features: [
        'Full Gym Access (Open 24/7)',
        'All-Inclusive Amenities Access',
        '45 Days Membership Freezing',
        'Best Value Long-Term Rate',
        'Priority Class Booking'
      ], 
      badge: 'Best Value',
      img: getGalleryImage('boxing', 3, '/hero-gym.jpg') 
    },
    { 
      category: 'General Gym',
      title: 'Lifetime Member', 
      price: 'QAR 15000', 
      subtitle: 'عضوية دائمة مدى الحياة',
      features: [
        'Permanent Access to all Gym Facilities',
        'Lifetime Privileged VIP Status',
        'Complimentary Guest Passes',
        'Dedicated Personal Locker & Towel Service'
      ], 
      img: getGalleryImage('bjj', 4, '/hero-gym.jpg') 
    }
  ];

  const handleSelectPlan = (pkg) => {
    const planName = pkg.category ? `${pkg.category} - ${pkg.title}` : pkg.title;
    window.location.href = `/booking?plan=${encodeURIComponent(planName)}&price=${encodeURIComponent(pkg.price)}`;
  };

  const renderCard = (pkg, idx) => (
    <div key={idx} className={`pkg-img-card ${pkg.highlighted ? 'highlighted' : ''}`} style={{ backgroundImage: `url(${pkg.img})` }}>
      <div className="pkg-overlay"></div>
      <div className="pkg-content">
        {pkg.badge && (
          <span className={`pkg-badge ${pkg.qaBadge ? 'qa-badge-card' : ''}`}>
            {pkg.badge}
          </span>
        )}
        <h3 className="pkg-title">{pkg.title}</h3>
        {pkg.subtitle && <p className="pkg-subtitle">{pkg.subtitle}</p>}
        {pkg.validity && <p className="pkg-validity-tag">⏱️ {pkg.validity}</p>}
        <h2 className="pkg-price">{pkg.price}</h2>
        <ul className="pkg-features">
          {pkg.features.map((feature, fIdx) => (
            <li key={fIdx}>
              <span className="pkg-icon">✓</span>
              <span>{feature}</span>
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
        subtitle="Transparent rates with flexible payment options. Select a category below." 
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
        {/* CATEGORY SWITCHER TABS (MOBILE FRIENDLY) */}
        {/* ======================================================== */}
        <div className="category-tabs-container">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`category-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <div className="tab-left-wrap">
                  <span className="category-tab-icon">{cat.icon}</span>
                  <div>
                    <h3 className="category-tab-title">{cat.title}</h3>
                    <span className="category-tab-ar">{cat.titleAr}</span>
                  </div>
                </div>
                <span className="category-tab-badge">{cat.badge}</span>
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* CATEGORY 1: BOXING & COMBAT SPORTS */}
        {/* ======================================================== */}
        {activeCategory === 'boxing' && (
          <div className="category-panel">
            <div className="category-header-banner">
              <div className="category-banner-info">
                <h2>🥊 Boxing & Combat Sports <span className="arabic-sub" style={{display: 'inline', fontSize: '1.05rem', marginLeft: '6px'}}>(ملاكمة ورياضات قتالية)</span></h2>
                <p>Train • Fight • Believe • Achieve — Boxing, Muay Thai, HIIT & Brazilian Jiu-Jitsu (BJJ) with specialized ring and equipment.</p>
                <div className="category-pill-row">
                  <span className="category-pill"><Flame size={14} color="#e60026" /> Boxing Ring & Heavy Bags</span>
                  <span className="category-pill"><Shield size={14} color="#e60026" /> Gear Provided</span>
                  <span className="category-pill"><Zap size={14} color="#e60026" /> Dedicated Gents & Ladies</span>
                  <span className="category-pill"><CheckCircle2 size={14} color="#e60026" /> Open 24/7 (Fri 4-10 PM)</span>
                </div>
              </div>
              <div className="category-banner-actions">
                <a 
                  href="https://wa.me/97433279451?text=Hello,%20I%20would%20like%20to%20inquire%20about%20Boxing%20Classes%20at%20QFit%20Gym!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                  style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px'}}
                >
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Sub-section: Group Classes */}
            <div style={{marginBottom: '45px'}}>
              <h3 className="sub-heading-center">Group Class Memberships <span className="arabic-sub">اشتراكات الحصص الجماعية</span></h3>
              <div className="packages-grid">
                {boxingGroupPackages.map(renderCard)}
              </div>
            </div>

            {/* Sub-section: Single Session Drop-In */}
            <div style={{marginBottom: '30px'}}>
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
                      Book Session Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* CATEGORY 2: PERSONAL TRAINING */}
        {/* ======================================================== */}
        {activeCategory === 'pt' && (
          <div className="category-panel">
            
            {/* Slogan Banner */}
            <div className="category-slogan-card">
              <h3>Train hard. Build skill. Get stronger.</h3>
              <p>تدرب بقوة • ابنِ مهارتك • كن أقوى</p>
            </div>

            <div className="category-header-banner">
              <div className="category-banner-info">
                <h2>🏋️‍♂️ Personal Training & 1-on-1 Coaching <span className="arabic-sub" style={{display: 'inline', fontSize: '1.05rem', marginLeft: '6px'}}>(تدريب شخصي فردي)</span></h2>
                <p>1-on-1 private coaching tailored to your individual schedule and fitness goals. Certified master coaches for striking, conditioning, and transformation.</p>
              </div>
              <div className="category-banner-actions">
                <button 
                  type="button" 
                  className="document-view-btn" 
                  onClick={() => setShowDocModal(true)}
                >
                  <Eye size={16} /> View Official Rate Sheet
                </button>
              </div>
            </div>

            {/* 1-on-1 Combat & Fitness PT Packages */}
            <div style={{marginBottom: '50px'}}>
              <h3 className="sub-heading-center">1-on-1 Personal Training Packages <span className="arabic-sub">باقات التدريب الشخصي الفردي</span></h3>
              <div className="packages-grid">
                {personalTrainingPackages.map(renderCard)}
              </div>
            </div>

            {/* General Gym Fitness Coaching */}
            <div style={{marginBottom: '30px'}}>
              <h3 className="sub-heading-center">General Fitness Coaching <span className="arabic-sub">تدريب اللياقة البدنية العام</span></h3>
              <div className="packages-grid">
                {generalPtPackages.map(renderCard)}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* CATEGORY 3: GENERAL GYM MEMBERSHIP */}
        {/* ======================================================== */}
        {activeCategory === 'gym' && (
          <div className="category-panel">
            <div className="category-header-banner">
              <div className="category-banner-info">
                <h2>🏢 General Gym Memberships <span className="arabic-sub" style={{display: 'inline', fontSize: '1.05rem', marginLeft: '6px'}}>(اشتراكات الجيم العامة)</span></h2>
                <p>Full 24/7 access to QFit Gym in Mansoura, Doha with premium IVANKO free weights, cardio theater, and private ladies section.</p>
                <div className="category-pill-row">
                  <span className="category-pill"><CheckCircle2 size={14} color="#00f2fe" /> Open 24/7 (Fri 4-10 PM)</span>
                  <span className="category-pill"><CheckCircle2 size={14} color="#00f2fe" /> IVANKO Free Weights</span>
                  <span className="category-pill"><CheckCircle2 size={14} color="#00f2fe" /> Private Ladies Section</span>
                  <span className="category-pill"><CheckCircle2 size={14} color="#00f2fe" /> Showers & Lockers</span>
                </div>
              </div>
            </div>

            <div style={{marginBottom: '30px'}}>
              <div className="packages-grid">
                {memberships.map(renderCard)}
              </div>
            </div>
          </div>
        )}

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

      </div>
    </div>
  );
};

export default Packages;
