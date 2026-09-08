import { useState, useEffect } from 'react';
import {
  Search, ArrowRight, Upload, Check, Shield, Phone, Clock, Zap,
  Heart, Users, Package, Truck, Activity,
  MapPin, FileText, Calendar, Hospital, Building2,
  Smartphone, ClipboardList, Stethoscope, Pill, Car, TrendingUp,
  Image, CheckCircle, Bike, Globe, ShieldCheck,
  Leaf, Handshake, Landmark, Camera,
  Mail
} from 'lucide-react';
import './App.css';

function Navigation({ mobileOpen, setMobileOpen, scrolled }) {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'TelePharmacy', href: '#telepharmacy' },
    { label: 'Medicines', href: '#medicines' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Patient Care', href: '#patient-care' },
    { label: 'About Us', href: '#about' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <img src="/images/logo.png" alt="Ridwan PharmaCare" className="nav-logo-img" />
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <button className="nav-search" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="nav-signin">Sign In</button>
          <a href="#get-started" className="nav-cta">
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>
        <button
          className={`nav-mobile-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
        </button>
      </div>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#get-started" className="btn btn-primary btn-lg mobile-menu-cta" style={{ width: '100%' }} onClick={() => setMobileOpen(false)}>
          Get Started
          <ArrowRight size={16} />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <img src="/images/hero-bg.png" alt="" className="hero-bg-img" />
      <div className="hero-bg-pattern" />
      <div className="hero-grid-lines" />
      <div className="container-wide">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Nigeria's TelePharmacy &amp; Medicine Distribution Platform
            </div>
            <h1>
              Professional Pharmacy Care,<br />
              <span className="text-teal">Wherever You Are.</span>
            </h1>
            <p className="hero-description">
              Connect with licensed pharmacists via video consultation, upload prescriptions,
              and get verified medicines delivered to your doorstep, even in rural communities.
            </p>
            <div className="hero-actions">
              <a href="#telepharmacy" className="hero-cta-primary">
                Get Pharmacy Care
                <ArrowRight size={18} />
              </a>
              <a href="#medicines" className="hero-cta-secondary">
                Order Medicines
              </a>
            </div>
            <div className="hero-search">
              <div className="hero-search-bar">
                <span className="search-icon"><Search size={20} /></span>
                <input type="text" placeholder="Search medicines or health topics..." />
              </div>
              <div className="hero-search-actions">
                <button className="hero-search-action">
                  <Upload size={16} /> Upload Prescription
                </button>
                <button className="hero-search-action">
                  <Package size={16} /> Order Medicine
                </button>
              </div>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item">
                <span className="hero-trust-icon"><Shield size={16} /></span>
                NAFDAC Certified
              </div>
              <div className="hero-trust-item">
                <span className="hero-trust-icon"><Check size={16} /></span>
                Licensed Pharmacists
              </div>
              <div className="hero-trust-item">
                <span className="hero-trust-icon"><Truck size={16} /></span>
                EV Delivery
              </div>
              <div className="hero-trust-item">
                <span className="hero-trust-icon"><Heart size={16} /></span>
                Patient-First
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/hero-pharmacist.png" alt="Pharmacist providing remote consultation" className="hero-pharmacist-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission" id="about">
      <div className="container">
        <div className="mission-content">
          <span className="label">Our Mission</span>
          <h2>Distance Should Never Decide Who Gets Access to Pharmacy Care.</h2>
          <p>
            We believe every Nigerian, whether in Lagos, Abuja, or a rural village in
            Borno State, deserves professional pharmaceutical guidance and timely access
            to verified medicines.
          </p>
          <div className="mission-visual">
            <div className="mission-node">
              <img src="/images/mission-urban.png" alt="Urban community" className="mission-node-img" />
              <h4>Urban Communities</h4>
              <p>Full pharmacy access</p>
            </div>
            <div className="mission-connector">
              <div className="mission-connector-line" />
              <ArrowRight size={20} />
              <div className="mission-connector-line" />
            </div>
            <div className="mission-node">
              <img src="/images/mission-rural.png" alt="Rural community" className="mission-node-img" />
              <h4>Rural Communities</h4>
              <p>TelePharmacy + EV delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const steps = [
    { icon: <Users size={20} />, title: 'Patient', desc: 'Initiates contact for pharmacy care', dot: 'flow-dot-1' },
    { icon: <Smartphone size={20} />, title: 'TelePharmacy Consultation', desc: 'Licensed pharmacist video call', dot: 'flow-dot-2' },
    { icon: <ClipboardList size={20} />, title: 'Prescription Upload', desc: 'Digital prescription submission', dot: 'flow-dot-3' },
    { icon: <Stethoscope size={20} />, title: 'Pharmacist Review', desc: 'Professional verification & approval', dot: 'flow-dot-4' },
    { icon: <Pill size={20} />, title: 'Medicine Dispensing', desc: 'Verified medicines prepared', dot: 'flow-dot-5' },
    { icon: <Building2 size={20} />, title: 'Distribution Hub', desc: 'Nearest hub processing', dot: 'flow-dot-6' },
    { icon: <Car size={20} />, title: 'EV Delivery', desc: 'Electric vehicle dispatch', dot: 'flow-dot-7' },
    { icon: <TrendingUp size={20} />, title: 'Patient Monitoring', desc: 'Ongoing health follow-up', dot: 'flow-dot-8' },
  ];

  return (
    <section className="ecosystem" id="ecosystem">
      <div className="container">
        <div className="ecosystem-header">
          <span className="label label-on-dark">The Ecosystem</span>
          <h2>From Prescription to Patient, One Connected Healthcare Journey.</h2>
          <p>Every step is designed to ensure safety, speed, and professional oversight.</p>
        </div>
        <div className="ecosystem-flow">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="flow-step">
                <div className="flow-line">
                  <div className={`flow-dot ${step.dot}`}>{step.icon}</div>
                  {i < steps.length - 1 && <div className="flow-connector" />}
                </div>
                <div className="flow-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TelePharmacy() {
  const features = [
    {
      icon: <Phone size={20} />,
      title: 'Remote Consultations',
      desc: 'Connect face-to-face with licensed pharmacists via secure video call.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Professional Guidance',
      desc: 'Get expert advice on dosage, side effects, and medicine interactions.',
    },
    {
      icon: <Clock size={20} />,
      title: 'Flexible Scheduling',
      desc: 'Book consultations at times that suit your daily routine.',
    },
    {
      icon: <Heart size={20} />,
      title: 'Secure & Private',
      desc: 'End-to-end encrypted consultations with full patient confidentiality.',
    },
  ];

  return (
    <section className="telepharmacy" id="telepharmacy">
      <div className="container">
        <div className="telepharmacy-grid">
          <div className="telepharmacy-text">
            <span className="label">TelePharmacy</span>
            <h2>Expert Pharmacy Care, Available Anywhere.</h2>
            <p>
              Our telepharmacy service connects you directly with licensed pharmacists
              for professional consultations, no matter where you are in Nigeria.
            </p>
            <div className="telepharmacy-features">
              {features.map((f, i) => (
                <div key={i} className="telepharmacy-feature">
                  <div className="telepharmacy-feature-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#get-started" className="btn btn-primary btn-lg">
              Book a Consultation
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function PrescriptionUpload() {
  return (
    <section className="prescription" id="prescription">
      <div className="container">
        <div className="prescription-grid">
          <div>
            <div className="prescription-upload-area">
              <div className="upload-icon"><Upload size={32} /></div>
              <h3>Upload Your Prescription</h3>
              <p>Drag &amp; drop your prescription here or click to browse</p>
              <div className="upload-formats">
                <span className="upload-format"><FileText size={14} /> PDF</span>
                <span className="upload-format"><Image size={14} /> JPG</span>
                <span className="upload-format"><Image size={14} /> PNG</span>
              </div>
              <button className="btn btn-primary">Choose File</button>
              <div className="prescription-legal">
                <p>
                  All prescriptions must be valid and issued by a licensed healthcare provider.
                  Our pharmacists will verify your prescription before processing any order.
                </p>
              </div>
            </div>
          </div>
          <div className="verification-text">
            <span className="label">How It Works</span>
            <h2>4-Step Verification Process</h2>
            <p>Your prescription is handled with the highest level of professional care.</p>
            <div className="verification-steps">
              {[
                { num: '1', title: 'Upload', desc: 'Submit your prescription via our secure platform.' },
                { num: '2', title: 'Verify', desc: 'Our system performs initial format and validity checks.' },
                { num: '3', title: 'Process', desc: 'A licensed pharmacist reviews and approves your order.' },
                { num: '4', title: 'Deliver', desc: 'Your medicines are dispensed and delivered to you.' },
              ].map((step) => (
                <div key={step.num} className="verification-step">
                  <div className="verification-step-num">{step.num}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Medicines() {
  const categories = ['All Medicines', 'Chronic Care', 'Antibiotics', 'Pain Relief', 'Cardiovascular', 'Diabetes'];
  const [activeCategory, setActiveCategory] = useState('All Medicines');

  const medicines = [
    { name: 'Metformin', dosage: '500mg × 60 tablets', price: '₦3,500', img: '/images/med-metformin.png', rx: true },
    { name: 'Amoxicillin', dosage: '250mg × 21 capsules', price: '₦2,800', img: '/images/med-amoxicillin.png', rx: true },
    { name: 'Paracetamol', dosage: '500mg × 96 tablets', price: '₦1,200', img: '/images/med-paracetamol.png', rx: false },
    { name: 'Amlodipine', dosage: '5mg × 30 tablets', price: '₦4,200', img: '/images/med-amlodipine.png', rx: true },
  ];

  return (
    <section className="medicines" id="medicines">
      <div className="container">
        <div className="medicines-header">
          <span className="label">Medicines</span>
          <h2>Verified Medicines, Delivered Safely.</h2>
          <p>Browse our catalogue of NAFDAC-approved medicines available for order.</p>
        </div>
        <div className="medicines-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`medicines-category ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="medicines-grid">
          {medicines.map((med, i) => (
            <div key={i} className="medicine-card">
              <div className="medicine-card-img">
                <img src={med.img} alt={med.name} />
              </div>
              <div className="medicine-card-name">{med.name}</div>
              <div className="medicine-card-dosage">{med.dosage}</div>
              <div className="medicine-card-meta">
                <span className="medicine-card-price">{med.price}</span>
                {med.rx && <span className="medicine-card-rx">Rx</span>}
              </div>
              <button className="medicine-card-add">Add to Order</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Verification() {
  return (
    <section className="verification" id="verification">
      <div className="container">
        <div className="verification-grid">
          <div className="verification-text">
            <span className="label">Pharmacist Verification</span>
            <h2>Professional Oversight at Every Step.</h2>
            <p>
              Every prescription and medicine order goes through a rigorous
              verification process led by our licensed pharmacists.
            </p>
            <div className="verification-steps">
              {[
                { num: '1', title: 'Prescription Submission', desc: 'Patient uploads prescription or requests consultation.' },
                { num: '2', title: 'Pharmacist Review', desc: 'Licensed pharmacist verifies dosage, interactions, and validity.' },
                { num: '3', title: 'Verification & Approval', desc: 'Prescription approved and medicines dispensed with professional oversight.' },
              ].map((step) => (
                <div key={step.num} className="verification-step">
                  <div className="verification-step-num">{step.num}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="verification-visual">
            <div className="verification-flow">
              <div className="vf-node">
                <div className="vf-icon vf-icon-rx"><ClipboardList size={20} /></div>
                <div className="vf-text">
                  <h4>Prescription Received</h4>
                  <p>Uploaded by patient</p>
                </div>
              </div>
              <div className="vf-connector" />
              <div className="vf-node">
                <div className="vf-icon vf-icon-pharmacist"><Stethoscope size={20} /></div>
                <div className="vf-text">
                  <h4>Pharmacist Assigned</h4>
                  <p>Professional review begins</p>
                </div>
              </div>
              <div className="vf-connector" />
              <div className="vf-node">
                <div className="vf-icon vf-icon-verify"><CheckCircle size={20} /></div>
                <div className="vf-text">
                  <h4>Verification Complete</h4>
                  <p>Approved &amp; ready</p>
                </div>
              </div>
              <div className="vf-connector" />
              <div className="vf-node">
                <div className="vf-icon vf-icon-fulfil"><Package size={20} /></div>
                <div className="vf-text">
                  <h4>Order Fulfilled</h4>
                  <p>Medicines dispensed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ElectricVehicles() {
  return (
    <section className="ev" id="ev-delivery">
      <div className="container">
        <div className="ev-header">
          <span className="label label-on-dark">Sustainable Delivery</span>
          <h2>Electric Vehicles for Last-Mile Delivery.</h2>
          <p>
            Our fleet of electric vehicles ensures reliable, eco-friendly medicine
            delivery to communities across Nigeria.
          </p>
        </div>
        <div className="ev-showcase">
          {[
            { img: '/images/ev-scooter.png', title: 'EV Scooter', desc: 'Compact delivery for urban areas and quick dispatches.' },
            { img: '/images/ev-van.png', title: 'EV Van', desc: 'Larger capacity for bulk medicine distribution to hubs.' },
            { img: '/images/ev-bicycle.png', title: 'E-Bicycle', desc: 'Last-mile delivery in rural and hard-to-reach areas.' },
          ].map((ev, i) => (
            <div key={i} className="ev-card">
              <div className="ev-card-img">
                <img src={ev.img} alt={ev.title} />
              </div>
              <div className="ev-card-body">
                <h4>{ev.title}</h4>
                <p>{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RuralAccess() {
  const features = [
    { icon: <MapPin size={18} />, title: 'Rural Coverage', desc: 'Reaching underserved communities across Nigeria.' },
    { icon: <Truck size={18} />, title: 'EV Fleet', desc: 'Electric vehicles for reliable last-mile delivery.' },
    { icon: <Phone size={18} />, title: 'TelePharmacy', desc: 'Remote pharmacist access via mobile devices.' },
    { icon: <Users size={18} />, title: 'Community Health Workers', desc: 'On-ground support for patient education.' },
    { icon: <Package size={18} />, title: 'Distribution Hubs', desc: 'Strategically placed hubs for faster delivery.' },
    { icon: <Shield size={18} />, title: 'Quality Assurance', desc: 'NAFDAC-approved medicines throughout the chain.' },
  ];

  return (
    <section className="rural" id="rural">
      <div className="container">
        <div className="rural-grid">
          <div className="rural-text">
            <span className="label">Rural Access</span>
            <h2>Bridging the Healthcare Gap.</h2>
            <p>
              Our technology and logistics infrastructure bring pharmacy services
              to communities that have been underserved for too long.
            </p>
            <div className="rural-features">
              {features.map((f, i) => (
                <div key={i} className="rural-feature">
                  <div className="rural-feature-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rural-map">
            <img src="/images/rural-map.png" alt="Nigeria healthcare network map" className="rural-map-img" />
            <div className="map-overlay">
              <h3>Closer Care. Wider Reach.</h3>
              <p>Our network spans across Nigeria's communities.</p>
              <div className="map-markers">
                <div className="map-marker"><span className="map-marker-dot map-marker-dot-patient" /> Patients</div>
                <div className="map-marker"><span className="map-marker-dot map-marker-dot-pharmacist" /> Pharmacists</div>
                <div className="map-marker"><span className="map-marker-dot map-marker-dot-pharmacy" /> Pharmacies</div>
                <div className="map-marker"><span className="map-marker-dot map-marker-dot-hub" /> Hubs</div>
                <div className="map-marker"><span className="map-marker-dot map-marker-dot-ev" /> EV Fleet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PatientMonitoring() {
  const features = [
    { icon: <Clock size={18} />, label: 'Medication reminders' },
    { icon: <Package size={18} />, label: 'Refill tracking' },
    { icon: <Phone size={18} />, label: 'Follow-up consultations' },
    { icon: <Activity size={18} />, label: 'Treatment adherence tracking' },
    { icon: <Users size={18} />, label: 'Regular check-ins' },
    { icon: <FileText size={18} />, label: 'Health records management' },
  ];

  return (
    <section className="monitoring" id="patient-care">
      <div className="container">
        <div className="monitoring-grid">
          <div className="monitoring-text">
            <span className="label">Patient Monitoring</span>
            <h2>Ongoing Care, Not Just One-Time Delivery.</h2>
            <p>
              We stay connected with patients after every order to ensure proper
              medication adherence and overall health improvement.
            </p>
            <div className="monitoring-features">
              {features.map((f, i) => (
                <div key={i} className="monitoring-feature">
                  <div className="monitoring-feature-icon">{f.icon}</div>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="monitoring-dashboard">
              <div className="dashboard-header">
                <h4>Patient Dashboard</h4>
                <span className="dashboard-status">
                  <span className="pharmacist-status-dot" />
                  Active
                </span>
              </div>
              <div className="dashboard-body">
                <div className="dashboard-row">
                  <span className="dashboard-row-label">Current Medication</span>
                  <span className="dashboard-row-value">Metformin 500mg</span>
                </div>
                <div className="dashboard-row">
                  <span className="dashboard-row-label">Next Refill</span>
                  <span className="dashboard-row-value warning">In 3 days</span>
                </div>
                <div className="dashboard-row">
                  <span className="dashboard-row-label">Adherence Rate</span>
                  <span className="dashboard-row-value good">94%</span>
                </div>
                <div className="dashboard-row">
                  <span className="dashboard-row-label">Last Consultation</span>
                  <span className="dashboard-row-value">2 days ago</span>
                </div>
                <div className="dashboard-progress">
                  <div className="dashboard-progress-label">
                    <span>Monthly Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="dashboard-progress-bar">
                    <div className="dashboard-progress-fill" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: '01', icon: <Phone size={24} />, title: 'Connect', desc: 'Book a video consultation with a licensed pharmacist.' },
    { num: '02', icon: <Upload size={24} />, title: 'Submit', desc: 'Upload your prescription or share your health needs.' },
    { num: '03', icon: <Shield size={24} />, title: 'Review', desc: 'Our pharmacist verifies and recommends the best medicines.' },
    { num: '04', icon: <Package size={24} />, title: 'Fulfil', desc: 'Medicines are dispensed and prepared for delivery.' },
    { num: '05', icon: <Truck size={24} />, title: 'Deliver & Follow Up', desc: 'EV delivery and ongoing patient monitoring.' },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <span className="label">How It Works</span>
          <h2>Simple Steps to Better Pharmacy Care.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-num">{step.num}</div>
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: <Globe size={24} />, iconClass: 'why-card-icon-access', title: 'Access', desc: 'Reach patients in urban and rural communities across Nigeria.' },
    { icon: <Stethoscope size={24} />, iconClass: 'why-card-icon-professional', title: 'Professional', desc: 'Licensed pharmacists with verified credentials.' },
    { icon: <Zap size={24} />, iconClass: 'why-card-icon-convenience', title: 'Convenience', desc: 'Book, consult, and order from your phone.' },
    { icon: <ShieldCheck size={24} />, iconClass: 'why-card-icon-trust', title: 'Trust', desc: 'NAFDAC-certified medicines and transparent processes.' },
    { icon: <Truck size={24} />, iconClass: 'why-card-icon-distribution', title: 'Distribution', desc: 'EV-powered last-mile delivery network.' },
    { icon: <Leaf size={24} />, iconClass: 'why-card-icon-sustainability', title: 'Sustainability', desc: 'Electric vehicles reduce carbon emissions.' },
  ];

  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-us-header">
          <span className="label label-on-dark">Why Choose Us</span>
          <h2>Built for Nigeria's Healthcare Future.</h2>
          <p>We combine technology, professional expertise, and sustainable logistics.</p>
        </div>
        <div className="why-grid">
          {items.map((item, i) => (
            <div key={i} className="why-card">
              <div className={`why-card-icon ${item.iconClass}`}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Partnerships() {
  const partners = [
    { icon: <Hospital size={20} />, label: 'Hospitals' },
    { icon: <Pill size={20} />, label: 'Pharmacies' },
    { icon: <Stethoscope size={20} />, label: 'Clinics' },
    { icon: <Building2 size={20} />, label: 'Universities' },
    { icon: <Building2 size={20} />, label: 'Corporate Wellness' },
    { icon: <Handshake size={20} />, label: 'NGOs' },
    { icon: <Landmark size={20} />, label: 'Government' },
    { icon: <Bike size={20} />, label: 'Logistics Partners' },
  ];

  return (
    <section className="partnerships" id="partnerships">
      <div className="container">
        <div className="partnerships-content">
          <span className="label">Partnerships</span>
          <h2>Building Nigeria's Healthcare Network Together.</h2>
          <p>
            We collaborate with pharmacies, hospitals, clinics, and organizations
            to expand access to professional pharmacy care.
          </p>
          <div className="partnerships-grid">
            {partners.map((p, i) => (
              <div key={i} className="partnership-item">
                <div className="partnership-icon">{p.icon}</div>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
          <a href="#get-started" className="btn btn-primary btn-lg">
            Become a Partner
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta" id="get-started">
      <img src="/images/cta-bg.png" alt="" className="final-cta-bg-img" />
      <div className="container">
        <div className="final-cta-content">
          <h2>Wherever You Are, Pharmacy Care Should Be Within Reach.</h2>
          <p>
            Join thousands of Nigerians who are already accessing professional
            pharmacy services through Ridwan PharmaCare.
          </p>
          <div className="final-cta-actions">
            <a href="#telepharmacy" className="btn btn-primary btn-lg">
              Get Pharmacy Care
              <ArrowRight size={18} />
            </a>
            <a href="#medicines" className="btn btn-outline btn-lg">
              Order Medicines
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/images/logo.png"
                alt="Ridwan PharmaCare"
                className="footer-logo-img"
              />
            </div>
            <p>
              Professional pharmacy care, delivered to your doorstep. Nigeria's
              telepharmacy and medicine distribution platform.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">
                <Globe size={16} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Building2 size={16} />
              </a>
              <a href="#" aria-label="Facebook">
                <Users size={16} />
              </a>
              <a href="#" aria-label="Instagram">
                <Camera size={16} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">TelePharmacy</a>
              </li>
              <li>
                <a href="#">Medicine Orders</a>
              </li>
              <li>
                <a href="#">Prescription Upload</a>
              </li>
              <li>
                <a href="#">Patient Monitoring</a>
              </li>
              <li>
                <a href="#">EV Delivery</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Partners</h4>
            <ul>
              <li>
                <a href="#">Pharmacy Partners</a>
              </li>
              <li>
                <a href="#">Hospital Partners</a>
              </li>
              <li>
                <a href="#">Corporate Wellness</a>
              </li>
              <li>
                <a href="#">NGO Partnerships</a>
              </li>
              <li>
                <a href="#">Government</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Health Articles</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">API Docs</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Ridwan PharmaCare. All rights reserved.</p>
          <div className="footer-contact">
            <a href="mailto:info@ridwanpharmacare.ng">
              <Mail size={14} /> hello@ridwanpharmacare.ng
            </a>
            <a href="tel:+2348001234567">
              <Phone size={14} /> +234 813 279 7672
            </a>
            <span>
              <MapPin size={14} /> Kaduna, Nigeria
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrolled={scrolled} />
      <Hero />
      <Mission />
      <Ecosystem />
      <TelePharmacy />
      <PrescriptionUpload />
      <Medicines />
      <Verification />
      <ElectricVehicles />
      <RuralAccess />
      <PatientMonitoring />
      <HowItWorks />
      <WhyUs />
      <Partnerships />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;
