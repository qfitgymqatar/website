"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { CreditCard, Building2, Banknote, CheckCircle, ArrowRight, ShieldCheck, Dumbbell, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Booking.css';

const AVAILABLE_PLANS = [
  { name: 'General Gym - 1 Month Membership', price: 'QAR 250' },
  { name: 'General Gym - 3 Months Membership', price: 'QAR 650' },
  { name: 'General Gym - 6 Months Membership', price: 'QAR 1200' },
  { name: 'General Gym - 1 Year Membership', price: 'QAR 2100' },
  { name: 'General Gym - Lifetime Member', price: 'QAR 15000' },
  { name: 'Boxing Group - 1 Month (Boxing • Muay Thai • HIIT)', price: 'QAR 600' },
  { name: 'Boxing Group - 3 Months (Boxing • Muay Thai • HIIT)', price: 'QAR 1500' },
  { name: 'Boxing Group - 6 Months (Boxing • Muay Thai • HIIT • BJJ)', price: 'QAR 2000' },
  { name: 'Boxing Session - Boxing • Muay Thai • HIIT • Jiu-Jitsu', price: 'QAR 60' },
  { name: 'Boxing Session - Brazilian Jiu-Jitsu (BJJ)', price: 'QAR 80' },
  { name: 'Boxing PT - 7 Sessions (Valid 2 Months)', price: 'QAR 1300' },
  { name: 'Boxing PT - 10 Sessions (Valid 1 Month)', price: 'QAR 1500' },
  { name: 'Boxing PT - 20 Sessions (Valid 5 Weeks)', price: 'QAR 2500' },
  { name: 'Boxing PT - Couples PT 10 Sessions (Valid 1 Month)', price: 'QAR 2500' },
  { name: 'Gym PT - 15 Days Personal Training', price: 'QAR 700' },
  { name: 'Gym PT - 1 Month Personal Training', price: 'QAR 1000' },
  { name: 'Gym PT - 2 Months Personal Training', price: 'QAR 1650' },
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
    titleAr: 'تحويل بنكي مباشر',
    desc: 'Transfer directly to QFit Gym account (IBAN/Account details provided).',
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
      const match = AVAILABLE_PLANS.find(p => p.name.toLowerCase().includes(initialPlan.toLowerCase()));
      if (match) {
        setSelectedPrice(initialPrice || match.price);
      } else if (initialPrice) {
        setSelectedPrice(initialPrice);
      }
    }
  }, [initialPlan, initialPrice]);

  const handlePlanChange = (e) => {
    const planName = e.target.value;
    setSelectedPlan(planName);
    const found = AVAILABLE_PLANS.find(p => p.name === planName);
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
    const msg = `Hello QFit Gym! I just submitted a booking on your website:\n- Plan: ${submittedData.plan}\n- Price: ${submittedData.price}\n- Payment: ${submittedData.payment.title}\n- Mobile: ${submittedData.mobile}\n- Email: ${submittedData.email}\nPlease provide the next steps.`;
    return `https://wa.me/97433279451?text=${encodeURIComponent(msg)}`;
  };

  // ========================================================
  // SUCCESS SCREEN
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
              <span className="summary-label">Payment Method:</span>
              <strong className="summary-value">{submittedData.payment.title}</strong>
            </div>
            <div className="summary-row">
              <span className="summary-label">Contact Mobile:</span>
              <span className="summary-value">{submittedData.mobile}</span>
            </div>
          </div>

          <div className="confirmation-notice">
            <p>
              {submittedData.payment.id === 'card_link' && 'Our reception desk has been notified. You will receive your secure card payment link via WhatsApp and Email shortly.'}
              {submittedData.payment.id === 'reception' && 'Please visit QFit Gym reception at Mansoura, Doha to complete your payment via Cash or Card.'}
              {submittedData.payment.id === 'bank_transfer' && 'Our team will message you the official QNB Qatar bank account details via WhatsApp to complete your transfer.'}
            </p>
          </div>

          <div className="confirmation-actions">
            <a 
              href={getWhatsAppBookingUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-confirm-btn"
            >
              <MessageSquare size={20} />
              Confirm Immediately on WhatsApp
            </a>

            <button 
              className="btn-secondary" 
              style={{marginTop: '15px', width: '100%'}}
              onClick={() => {
                setSubmittedData(null);
                setEmailId('');
                setMobileNo('');
                setMembershipNo('');
                setQidNo('');
              }}
            >
              Book Another Plan / Return
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ========================================================
  // BOOKING & PAYMENT FORM
  // ========================================================
  return (
    <div className="booking-page" style={{ backgroundImage: "url('/hero-cinematic.jpg')" }}>
      <div className="booking-overlay"></div>
      
      <div className="booking-container">
        <div className="booking-header">
          <img src="/footer-logo.png" alt="QFit Gym Logo" className="booking-logo" />
        </div>
        
        <div className="booking-titles">
          <h2>Book Your Membership & Class <span>إحجز اشتراكك أو حصتك</span></h2>
          <p className="booking-subtitle">SELECT YOUR PLAN & PAYMENT OPTION BELOW <span>اختر باقتك وطريقة الدفع أدناه</span></p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          
          {/* Plan & Pricing Selector */}
          <div className="form-group plan-select-group">
            <label>
              Select Membership / Class Package <span>اختر الباقة أو الحصة</span>
            </label>
            <div className="plan-dropdown-wrap">
              <select 
                value={selectedPlan} 
                onChange={handlePlanChange} 
                className="plan-select-input"
              >
                {AVAILABLE_PLANS.map((plan, idx) => (
                  <option key={idx} value={plan.name}>
                    {plan.name} — {plan.price}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Preview Banner */}
            <div className="price-summary-banner">
              <div className="price-breakdown">
                <div>
                  <span className="breakdown-label">Package Rate:</span>
                  <strong className="breakdown-amount">{selectedPrice}</strong>
                </div>
                <div style={{color: '#aaa', fontSize: '0.85rem'}}>
                  + QAR 50 One-Time Registration (New Members)
                </div>
              </div>
              <div className="secure-badge">
                <ShieldCheck size={16} color="#25d366" />
                <span>Best Gym Value in Qatar</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="form-group payment-options-group">
            <label>
              Choose Payment Method <span>اختر طريقة الدفع المفضلة</span>
            </label>
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
                    <div className="payment-card-header">
                      <div className="payment-icon-wrap">
                        <IconComponent size={22} />
                      </div>
                      <div className="payment-titles">
                        <h4>{method.title}</h4>
                        <span className="payment-title-ar">{method.titleAr}</span>
                      </div>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        checked={isSelected} 
                        onChange={() => setPaymentMethod(method.id)}
                        className="payment-radio"
                      />
                    </div>
                    <p className="payment-desc">{method.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div className="form-group">
            <label>
              Email ID (Required) <span>البريد الإلكتروني (مطلوب)</span>
            </label>
            <input 
              type="email" 
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="e.g. yourname@domain.com"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Mobile Number (Required) <span>رقم الهاتف المحمول (مطلوب)</span>
            </label>
            <input 
              type="tel" 
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              placeholder="e.g. +974 3327 9451"
              required
            />
          </div>

          <div className="form-row-two">
            <div className="form-group">
              <label>
                Membership # (Optional) <span>رقم العضوية (إختياري)</span>
              </label>
              <input 
                type="text" 
                value={membershipNo}
                onChange={(e) => setMembershipNo(e.target.value)}
                placeholder="For renewals only"
              />
            </div>

            <div className="form-group">
              <label>
                QID Number (Optional) <span>رقم البطاقة الشخصية (إختياري)</span>
              </label>
              <input 
                type="text" 
                value={qidNo}
                onChange={(e) => setQidNo(e.target.value)}
                placeholder="Qatar ID number"
              />
            </div>
          </div>

          <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Processing Your Request...' : 'Proceed & Confirm / متابعة وتأكيد'}
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="booking-footer">
          <p>For Immediate Assistance: 3327 9451 / 5035 0222 <span>للمساعدة أو الإستفسار الرجاء التواصل على</span></p>
        </div>
      </div>
    </div>
  );
};

const Booking = () => {
  return (
    <Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>Loading Booking Details...</div>}>
      <BookingForm />
    </Suspense>
  );
};

export default Booking;
