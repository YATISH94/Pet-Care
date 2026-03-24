function trackEvent(eventName, params = {}) {
  if (typeof gtag === "function") {
    gtag('event', eventName, params);
  }
}

/* CTA Button */
function adoptClick(){
  trackEvent('adopt_cta_click',{
    location:'homepage'
  });
}

/* Service interaction */
function serviceClick(service){
  trackEvent('service_click',{
    service_type: service
  });
}

/* Blog engagement */
function blogRead(title){
  trackEvent('blog_engagement',{
    article: title
  });
}

/* Form submission */
function formSubmitted(){
  trackEvent('contact_form_submit',{
    form_name:'contact_form'
  });
}

/* Video play event */
function videoPlayed(){
  trackEvent('video_play',{
    video_title:'pet_care_tips'
  });
}

/* File download */
function downloadGuide(){
  trackEvent('download',{
    file_name:'pet_adoption_guide.pdf'
  });
}

/* Site search */
function siteSearch(){
  let query = document.getElementById("searchInput").value;

  trackEvent('search',{
    search_term: query
  });
}