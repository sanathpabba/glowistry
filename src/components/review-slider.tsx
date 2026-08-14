"use client";

import { useEffect, useRef, useState } from "react";
import { salon } from "@/lib/salon-data";

const reviews = [
  { name: "Shreya Shah", date: "3 weeks ago", text: "I had an amazing experience with Amulya! After just 4 acne facial sessions, I can see a significant improvement in my skin. The results are truly visible, and I’m so happy with the progress. She has a lovely, cozy home studio equipped with modern skincare equipment, making every session comfortable and professional. Amulya is knowledgeable, caring, and genuinely invested in her clients’ results. Highly recommend her!", services: "Eyebrow shaping · Facial massage · Acne facial" },
  { name: "Meghana Erukulla", date: "A month ago", text: "I had an amazing experience with the entire service. The makeup, hairstyle, saree draping, and saree pre-pleating were all done beautifully with great attention to detail. Amulya was professional, friendly, and made me feel comfortable throughout the session. Everything turned out exactly as I hoped, and I highly recommend her services for any special occasion!" },
  { name: "Divya Bontha", date: "7 months ago", text: "I had a wonderful experience with Amulya for my anniversary mehendi. Her work is absolutely beautiful—very neat, intricate, and elegant. She was extremely patient, understood exactly what I wanted, and made the whole experience so comfortable. The color came out dark and gorgeous, and I received so many compliments. Truly talented and professional." },
  { name: "Sathwika Nutheti", date: "6 months ago", text: "I had a wonderful experience at Amulya Makeovers. Everything felt calm, organized, and focused on quality. My hair was done exactly how I asked—smooth, well-styled, and finished with great attention to detail. The pedicure was equally impressive, with excellent hygiene standards and thoughtful care. The entire service felt relaxing, thorough, warm, and professional.", services: "Hairstyling · Pedicure" },
  { name: "Wahiba Zohaib", date: "2 weeks ago", text: "Amulya is truly a gem. Her professionalism, skill, and care make every visit a wonderful experience. Every woman deserves to invest in herself and with Amulya, you’re in the best hands. Highly recommended!" },
  { name: "divya S", date: "A month ago", text: "Amulya did an amazing job with my makeup, hair styling, and saree draping. She was extremely patient, professional, and attentive to every detail. The final look turned out beautiful, and I was very happy with the results. Highly recommended!" },
  { name: "gayathri kadiyala", date: "7 months ago", text: "Absolutely loved the services by Amulya. From perfectly shaped eyebrows to a relaxing pedicure, beautiful henna, nail art, waxing and mehendi—everything was flawless. She is extremely talented and puts her heart into her work. I’m super happy with the results and will definitely come back again. Highly recommended!" },
];

export function ReviewSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const go = (index: number) => setActive((index + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="reviews-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) go(active + (distance < 0 ? 1 : -1)); touchStart.current = null; }}>
      <div className="review-viewport">
        <div className="review-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {reviews.map((review) => <article className="review-slide" key={review.name} aria-hidden={reviews[active].name !== review.name}>
            <div className="review-meta"><span className="review-avatar" aria-hidden="true">{review.name.charAt(0).toUpperCase()}</span><div><strong>{review.name}</strong><p><span aria-label="5 out of 5 stars">★★★★★</span> · {review.date}</p></div></div>
            <p className="review-copy">“{review.text}”</p>
            {review.services && <small className="review-services">Services: {review.services}</small>}
          </article>)}
        </div>
      </div>
      <div className="review-controls">
        <div className="review-arrows"><button type="button" onClick={() => go(active - 1)} aria-label="Previous review">←</button><button type="button" onClick={() => go(active + 1)} aria-label="Next review">→</button><span>{String(active + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span></div>
        <div className="google-review-actions"><a href={salon.googleMapsHref} target="_blank" rel="noreferrer">Read reviews</a><a className="review-primary" href={salon.googleReviewHref} target="_blank" rel="noreferrer">Write a review</a></div>
      </div>
    </div>
  );
}
