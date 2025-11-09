# Call to Enquiry Page - Complete Implementation

## ✨ New Enquiry Page Features

### 1. **Hero Section with Auto-Playing Slider**
- **4 Background Images** changing every 3 seconds
- **Smooth Transitions:** 1-second fade between slides
- **Animated Content:** Title and subtitle slide in with each image
- **Dual CTAs:**
  - "Get Started Today" - Scrolls to contact form
  - "Call Now" - Direct phone link with icon
- **Progress Dots:** Shows which slide is active
- **Responsive:** Full-screen on all devices

**Slides:**
1. "Transform Your Passion" - Studio image
2. "Learn From Experts" - Classroom image
3. "State-of-the-Art Facilities" - Equipment image
4. "Join Our Community" - Team image

### 2. **Contact Section - Split Layout**
- **Left Side (50%):** Contact Form
- **Right Side (50%):** Google Maps

#### **Contact Form Features:**
- **Header:** Gradient title with description
- **Quick Contact Cards:** Phone, Email, Hours (clickable)
- **Form Fields:**
  - Full Name (required)
  - Email (required)
  - Phone (required)
  - Course Interest (dropdown)
  - Preferred Contact Time (dropdown)
  - Message (textarea)
- **Submit Button:** Gradient with arrow icon
- **Validation:** Required fields marked
- **Success Alert:** Shows confirmation message

#### **Google Maps Features:**
- **Embedded Map:** Full-height interactive map
- **Location Card:** Overlay with address (desktop only)
- **Responsive:** Stacks vertically on mobile

### 3. **Newsletter Section**
- **Dark Theme:** Black background with pink accents
- **Decorative Elements:** Animated blur circles
- **Email Subscription Form:**
  - Email input with validation
  - Subscribe button with gradient
  - Success state with checkmark
  - Auto-reset after 3 seconds
- **Benefits Grid:** 3 cards showing:
  - Exclusive Tips 🌟
  - Special Offers 🏷️
  - Course Updates 📰
- **Privacy Note:** "Unsubscribe at any time"

## 🎨 Design Features

### **Color Scheme:**
- **Hero:** Dark overlays with white text
- **Contact Form:** White/pink gradient background
- **Newsletter:** Black with pink accents
- **Buttons:** Pink gradient with hover effects

### **Animations:**
- **Hero Slider:** Auto-play every 3 seconds
- **Content Transitions:** Slide in/fade effects
- **Hover Effects:** Scale, shadow, border changes
- **Form Focus:** Border color and ring animations

### **Interactive Elements:**
- **Clickable Contact Cards:** Phone and email links
- **Form Validation:** Real-time feedback
- **Map Interaction:** Zoom, pan, street view
- **Newsletter Subscription:** Success feedback

## 📱 Responsive Design

### **Desktop (> 1024px):**
- Hero: Full-screen with large text
- Contact: Side-by-side (form | map)
- Newsletter: Horizontal form layout
- All elements properly spaced

### **Tablet (768px - 1024px):**
- Hero: Adjusted text sizes
- Contact: Still side-by-side
- Newsletter: Adjusted grid
- Touch-friendly buttons

### **Mobile (< 768px):**
- Hero: Stacked buttons, smaller text
- Contact: Vertical stack (form on top, map below)
- Newsletter: Vertical form layout
- Full-width elements
- Larger touch targets

## 🚀 Key Features

1. **Auto-Playing Hero:** 3-second intervals
2. **Dual CTAs:** Form scroll + phone call
3. **Split Contact Section:** Form + Map
4. **Interactive Map:** Google Maps embed
5. **Newsletter Subscription:** With success state
6. **Fully Responsive:** All screen sizes
7. **Smooth Animations:** Throughout
8. **Accessible:** Proper labels and ARIA

## 📂 File Structure

```
app/
└── enquiry/
    └── page.tsx

components/
├── enquiry/
│   ├── enquiry-hero-section.tsx
│   ├── enquiry-contact-section.tsx
│   └── newsletter-section.tsx
└── navbar.tsx (updated)
```

## 🎯 User Journey

1. **Land on Hero:** See rotating images with slogans
2. **Click CTA:** Scroll to form or call directly
3. **Fill Form:** Complete enquiry with all details
4. **View Map:** See location on Google Maps
5. **Subscribe:** Join newsletter for updates
6. **Footer:** Additional links and info

## 💡 Special Features

- **Auto-Play Slider:** Smooth 3-second transitions
- **Form Validation:** Client-side validation
- **Success Feedback:** Visual confirmation
- **Google Maps:** Interactive location
- **Newsletter Benefits:** Clear value proposition
- **Mobile Optimized:** Touch-friendly interface

All sections flow seamlessly with the pink/black theme and provide an engaging, interactive experience!
