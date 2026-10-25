"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { 
  CreditCard, 
  Building2, 
  Banknote, 
  CheckCircle, 
  Check,
  ArrowRight, 
  ShieldCheck, 
  MessageSquare, 
  ChevronDown, 
  Lock, 
  PhoneCall, 
  Clock, 
  MapPin, 
  Sparkles,
  Mail,
  User,
  CreditCard as CardIcon
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import '@/pageStyles/Booking.css';

const AVAILABLE_PLANS = [
  // Training Prices Rate Card Plans
  { name: 'Group Class - Boxing • Muay Thai • HIIT • Jiu-Jitsu (Single Session)', price: 'QAR 60' },
  { name: 'Group Class - Brazilian Jiu-Jitsu (BJJ) (Single Session)', price: 'QAR 80' },
  { name: 'Group Class - Monthly Membership (Boxing • Muay Thai • HIIT)', price: 'QAR 600' },
  { name: 'Group Class - 3 Months Membership (Boxing • Muay Thai • HIIT)', price: 'QAR 1500' },
  { name: 'Group Class - 6 Months Membership + BJJ', price: 'QAR 2000' },
  { name: 'Personal Training - Single Session (Per session)', price: 'QAR 250' },
  { name: 'Personal Training - Qatar Airways 7 Sessions (Valid 2 Months)', price: 'QAR 1300' },
  { name: 'Personal Training - 10 Sessions (Valid 1 Month)', price: 'QAR 1500' },
  { name: 'Personal Training - 12 Sessions (Valid 1 Month)', price: 'QAR 1600' },
  { name: 'Personal Training - 20 Sessions (Valid 6 Weeks)', price: 'QAR 2000' },
  { name: 'Personal Training - Couples PT 10 Sessions (Valid 1 Month)', price: 'QAR 2500' },
  // General Gym Memberships
  { name: 'General Gym - 1 Month Membership', price: 'QAR 250' },
  { name: 'General Gym - 3 Months Membership', price: 'QAR 650' },
  { name: 'General Gym - 6 Months Membership', price: 'QAR 1200' },
  { name: 'General Gym - 1 Year Membership', price: 'QAR 2100' },
  { name: 'General Gym - Lifetime Member', price: 'QAR 15000' },
  // General Fitness Coaching
  { name: 'Gym Fitness PT - 15 Days Personal Training', price: 'QAR 700' },
  { name: 'Gym Fitness PT - 1 Month Personal Training', price: 'QAR 1000' },
  { name: 'Gym Fitness PT - 2 Months Personal Training', price: 'QAR 1650' },
  { name: 'General Gym Tour / Inquiry', price: 'Free' }
];

const PAYMENT_METHODS = [
  {
    id: 'card_link',
    title: 'Credit / Debit Card (Online Payment Link)',
    titleAr: 'رابط دفع إلكتروني بالبطاقة',
    desc: 'Receive a secure online card payment link on WhatsApp & Email immediately after booking.',
    badge: 'Fast & Secure',
    icon: CreditCard
  },
  {
    id: 'reception',
    title: 'Pay at Gym Reception (Cash / Card)',
    titleAr: 'الدفع في صالة الجيم (نقداً أو بالبطاقة)',
    desc: 'Pay at the QFit Gym reception desk in Mansoura upon your first visit.',
    badge: 'In Person',
    icon: Building2
  },
  {
    id: 'bank_transfer',
    title: 'Direct Bank Transfer (QNB Qatar)',
    titleAr: 'تحويل بنكي مباشر (بنك قطر الوطني)',
    desc: 'Transfer directly to QFit Gym account (IBAN/Account details provided upon submission).',
    badge: 'Direct Transfer',
    icon: Banknote
  }
];

const BookingForm = () => {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get('plan') || '';
  const initialPrice = searchParams.get('price') || '';

  const [selectedPlan, setSelectedPlan] = useState(initialPlan || AVAILABLE_PLANS[0].name);
  const [selectedPrice, setSelectedPrice] = useState(initialPrice || AVAILABLE_PLANS[0].price);
  const [paymentMethod, setPaymentMethod] = useState('card_link');
  const [showPlanDropdown, setShowPlanDropdown] = useState(!initialPlan);

  const [emailId, setEmailId] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [membershipNo, setMembershipNo] = useState('');
  const [qidNo, setQidNo] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Sync when searchParams change
  useEffect(() => {
    if (initialPlan) {
      setSelectedPlan(initialPlan);
      const match = AVAILABLE_PLANS.find(
        p => p.name.toLowerCase().includes(initialPlan.toLowerCase()) || 
             initialPlan.toLowerCase().includes(p.name.toLowerCase())
      );
      if (match) {
        setSelectedPrice(initialPrice || match.price);
      } else if (initialPrice) {
        setSelectedPrice(initialPrice);
      }
    }
  }, [initialPlan, initialPrice]);

  const plansToRender = AVAILABLE_PLANS.some(p => p.name === selectedPlan)
    ? AVAILABLE_PLANS
    : [{ name: selectedPlan, price: selectedPrice }, ...AVAILABLE_PLANS];

  const handlePlanChange = (e) => {
    const planName = e.target.value;
    setSelectedPlan(planName);
    const found = plansToRender.find(p => p.name === planName);
    if (found) {
      setSelectedPrice(found.price);
    }
  };

  const getSelectedPaymentMethodObject = () => {
    return PAYMENT_METHODS.find(p => p.id === paymentMethod) || PAYMENT_METHODS[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailId || !mobileNo) {
      alert('Please enter your Email and Mobile Number to proceed.');
      return;
    }

    setIsSubmitting(true);
    const chosenPayment = getSelectedPaymentMethodObject();

    try {
      // 1. Record booking in Supabase with complete package and payment info
      const planDescription = `[Plan: ${selectedPlan}] [Price: ${selectedPrice}] [Payment: ${chosenPayment.title}] ${membershipNo ? `[Member#: ${membershipNo}]` : ''}`;
      
      const { error } = await supabase.from('bookings').insert([{
        email: emailId,
        mobile: mobileNo,
        membership: planDescription,
        qid: qidNo || 'N/A'
      }]);

      if (error) {
        console.warn('Supabase insert note:', error.message);
      }

      // 2. Dispatch email notification to info@qfitgymqatar.com via API route
      try {
        await fetch('/api/send-booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: emailId,
            mobile: mobileNo,
            membership: membershipNo || 'N/A',
            qid: qidNo || 'N/A',
            plan: selectedPlan,
            price: selectedPrice,
            paymentMethod: chosenPayment.title
          })
        });
      } catch (mailErr) {
        console.error("API send-booking error:", mailErr);
      }

      // 3. Direct browser fallback to FormSubmit to ensure delivery to info@qfitgymqatar.com
      try {
        await fetch('https://formsubmit.co/ajax/info@qfitgymqatar.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Booking: ${selectedPlan} (${selectedPrice}) - ${mobileNo}`,
            'Customer Email': emailId,
            'Mobile Phone': mobileNo,
            'Selected Plan': `${selectedPlan} (${selectedPrice})`,
            'Payment Preference': chosenPayment.title,
            'Membership Number': membershipNo || 'N/A',
            'QID Number': qidNo || 'N/A',
            _template: 'table'
          })
        });
      } catch (fsErr) {
        console.error("Direct mail fallback error:", fsErr);
      }

      // 4. Try EmailJS if configured
      try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        
        if (serviceId && templateId && publicKey) {
          await emailjs.send(serviceId, templateId, {
            to_name: 'Admin',
            to_email: 'info@qfitgymqatar.com',
            from_email: emailId,
            mobile_no: mobileNo,
            membership_no: `${selectedPlan} (${selectedPrice}) - ${chosenPayment.title}`,
            qid_no: qidNo || 'N/A',
            message: `New booking for ${selectedPlan} with payment method ${chosenPayment.title}`
          }, publicKey);
        }
      } catch (emailError) {
        console.error("EmailJS error (non-fatal):", emailError);
      }

      // 5. Store submitted data to display confirmation screen
      setSubmittedData({
        email: emailId,
        mobile: mobileNo,
        plan: selectedPlan,
        price: selectedPrice,
        payment: chosenPayment
      });

    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error processing your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp helper for customer to initiate instant chat
  const getWhatsAppBookingUrl = () => {
    if (!submittedData) return 'https://wa.me/97433279451';
    const msg = `Hello QFit Gym! I just submitted a booking on your website:\n- Plan: ${submittedData.plan}\n- Price: ${submittedData.price}\n- Payment Preference: ${submittedData.payment.title}\n- Mobile: ${submittedData.mobile}\n- Email: ${submittedData.email}\nPlease provide the next steps.`;
    return `https://wa.me/97433279451?text=${encodeURIComponent(msg)}`;
  };

  // ========================================================
  // SUCCESS CONFIRMATION SCREEN
  // ========================================================
  if (submittedData) {
    return (
      <div className="booking-page" style={{ backgroundImage: "url('/hero-cinematic.jpg')" }}>
        <div className="booking-overlay"></div>
        <div className="booking-container confirmation-card">
          <div className="confirmation-icon-wrap">
            <CheckCircle size={65} color="#25d366" />
          </div>
          
          <h2 className="confirmation-title">Booking Request Received!</h2>
          <p className="confirmation-arabic">تم استلام طلب الحجز بنجاح</p>

          <div className="confirmation-summary-box">
            <div className="summary-row">
              <span className="summary-label">Selected Package:</span>
              <strong className="summary-value text-cyan">{submittedData.plan}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Price:</span>
              <strong className="summary-value text-red">{submittedData.price}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Payment Preference:</span>
              <strong className="summary-value">{submittedData.payment.title}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Contact Mobile:</span>
              <span className="summary-value">{submittedData.mobile}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Contact Email:</span>
              <span className="summary-value">{submittedData.email}</span>
            </div>
          </div>

          <div className="confirmation-notice">
            <p>
              {submittedData.payment.id === 'card_link' && 'Our reception desk has been notified. You will receive your secure online card payment link via WhatsApp and Email shortly.'}
              {submittedData.payment.id === 'reception' && 'Please visit QFit Gym reception at Mansoura, Doha to complete your payment via Cash or Card upon arrival.'}
              {submittedData.payment.id === 'bank_transfer' && 'Our team will message you the official QNB Qatar corporate bank account details via WhatsApp to complete your transfer.'}
            </p>
          </div>

          <div className="confirmation-actions">
            <a 
              href={getWhatsAppBookingUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-confirm-btn"
            >
              <MessageSquare size={22} />
              Confirm Immediately on WhatsApp
            </a>

            <button 
              className="btn-secondary" 
              style={{marginTop: '15px', width: '100%', padding: '14px', borderRadius: '10px'}}
              onClick={() => {
                setSubmittedData(null);
                setEmailId('');
                setMobileNo('');
                setMembershipNo('');
                setQidNo('');
              }}
            >
              Book Another Plan / Return to Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ========================================================
  // PROFESSIONAL BOOKING & PAYMENT FORM
  // ========================================================
  return (
    <div className="booking-page" style={{ backgroundImage: "url('/hero-cinematic.jpg')" }}>
      <div className="booking-overlay"></div>
      
      <div className="booking-container">
        
        {/* Header Logo */}
        <div className="booking-header">
          <img src="/footer-logo.png" alt="QFit Gym Logo" className="booking-logo" />
        </div>
        
        {/* Title & Subtitle */}
        <div className="booking-titles">
          <h2>
            Booking & Membership Checkout
            <span>إتمام الحجز والاشتراك</span>
          </h2>
          <p className="booking-subtitle">
            SELECT YOUR PAYMENT OPTION & COMPLETE DETAILS
            <span>اختر طريقة الدفع المفضلة وأكمل البيانات أدناه</span>
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          
          {/* ======================================================== */}
          {/* 1. SELECTED PACKAGE CARD (PROFESSIONAL SUMMARY) */}
          {/* ======================================================== */}
          <div className="plan-summary-card">
            <div className="plan-card-top">
              <div>
                <span className="plan-badge-tag">Selected Package • الباقة المختارة</span>
                <div className="plan-name-display">{selectedPlan}</div>
              </div>
              <div className="plan-price-display">
                <span className="price-main">{selectedPrice}</span>
                <div className="registration-fee-note">+ QAR 50 Reg. (New Members)</div>
              </div>
            </div>

            {/* Toggle to change plan */}
            <div>
              <button 
                type="button" 
                className="plan-toggle-btn"
                onClick={() => setShowPlanDropdown(!showPlanDropdown)}
              >
                <ChevronDown size={15} style={{transform: showPlanDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s'}} />
                {showPlanDropdown ? 'Hide package list' : 'Change package / تغيير الباقة'}
              </button>
            </div>

            {/* Collapsible Dropdown Selector */}
            {showPlanDropdown && (
              <div className="plan-dropdown-reveal">
                <select 
                  value={selectedPlan} 
                  onChange={handlePlanChange} 
                  className="plan-select-input"
                >
                  {plansToRender.map((plan, idx) => (
                    <option key={idx} value={plan.name}>
                      {plan.name} — {plan.price}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Trust Strip */}
            <div className="plan-trust-strip">
              <span className="trust-pill"><Clock size={14} color="#00f2fe" /> Open 24/7 (Fri 4-10 PM)</span>
              <span className="trust-pill"><MapPin size={14} color="#00f2fe" /> Mansoura, Doha</span>
              <span className="trust-pill"><ShieldCheck size={14} color="#25d366" /> Best Gym Value</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. PAYMENT METHODS SELECTOR (FIXED & PROFESSIONAL) */}
          {/* ======================================================== */}
          <div className="payment-options-block">
            <div className="payment-section-label">
              <span>Choose Payment Method</span>
              <span>اختر طريقة الدفع المفضلة</span>
            </div>

            <div className="payment-methods-grid">
              {PAYMENT_METHODS.map((method) => {
                const IconComponent = method.icon;
                const isSelected = paymentMethod === method.id;
                return (
                  <div 
                    key={method.id} 
                    className={`payment-method-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod(method.id)}
                  >
                    <div className="payment-card-content">
                      {/* Left: Glowing Icon */}
                      <div className="payment-icon-wrap">
                        <IconComponent size={22} />
                      </div>

                      {/* Center: Full-width Titles & Description */}
                      <div className="payment-titles-block">
                        <div className="payment-main-title">{method.title}</div>
                        <div className="payment-ar-title">{method.titleAr}</div>
                        <p className="payment-desc-text">{method.desc}</p>
                      </div>

                      {/* Right: Custom Clean Radio Indicator */}
                      <div className={`custom-radio-circle ${isSelected ? 'checked' : ''}`}>
                        {isSelected && <Check size={15} color="#050505" strokeWidth={3.5} />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. CONTACT DETAILS */}
          {/* ======================================================== */}
          <div className="form-group">
            <label>
              <span>Email ID (Required)</span>
              <span>البريد الإلكتروني (مطلوب)</span>
            </label>
            <input 
              type="email" 
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="e.g. yourname@domain.com"
              className="booking-input"
              required
            />
          </div>

          <div className="form-group">
            <label>
              <span>Mobile / WhatsApp (Required)</span>
              <span>رقم الهاتف المحمول / واتساب (مطلوب)</span>
            </label>
            <input 
              type="tel" 
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              placeholder="e.g. +974 3327 9451"
              className="booking-input"
              required
            />
          </div>

          <div className="form-row-two">
            <div className="form-group">
              <label>
                <span>Membership # (Optional)</span>
                <span>رقم العضوية (إختياري)</span>
              </label>
              <input 
                type="text" 
                value={membershipNo}
                onChange={(e) => setMembershipNo(e.target.value)}
                placeholder="For renewals only"
                className="booking-input"
              />
            </div>

            <div className="form-group">
              <label>
                <span>Qatar ID (Optional)</span>
                <span>رقم البطاقة الشخصية (إختياري)</span>
              </label>
              <input 
                type="text" 
                value={qidNo}
                onChange={(e) => setQidNo(e.target.value)}
                placeholder="Qatar ID number"
                className="booking-input"
              />
            </div>
          </div>

          {/* ======================================================== */}
          {/* 4. SUBMIT BUTTON */}
          {/* ======================================================== */}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              'Processing Your Request...'
            ) : (
              <>
                <span>Complete Booking & Proceed / متابعة وتأكيد</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>

          {/* Security & Support Bar */}
          <div className="security-trust-bar">
            <span><Lock size={13} color="#25d366" /> 256-Bit SSL Encrypted</span>
            <span><Sparkles size={13} color="#00f2fe" /> Instant Desk Notification</span>
            <span><PhoneCall size={13} color="#fff" /> Support: 3327 9451</span>
          </div>
        </form>

        {/* Footer Help */}
        <div className="booking-footer">
          <p>
            QFit Gym Reception: +974 3327 9451 / +974 5035 0222
            <span>للمساعدة أو الإستفسار الرجاء التواصل مع الاستقبال</span>
          </p>
        </div>

      </div>
    </div>
  );
};

const Booking = () => {
  return (
    <Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>Loading Booking Checkout...</div>}>
      <BookingForm />
    </Suspense>
  );
};

export default Booking;
