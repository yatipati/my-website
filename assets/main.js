<!-- FILE: assets/main.js -->
(function(){
  document.getElementById('themeToggle')?.addEventListener('click',function(){
    document.body.classList.toggle('dark')
  })

  // Animate skill bars on load
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.bar').forEach(function(b){
      const val = getComputedStyle(b).getPropertyValue('--val') || '0%'
      b.style.width = '0%'
      setTimeout(()=> b.style.width = val, 120)
    })

    // Simple client-side contact form handler
    const form = document.getElementById('contactForm')
    if(form){
      form.addEventListener('submit', function(e){
        e.preventDefault()
        alert('Thanks! This demo form does not send messages. Configure a service (Formspree, Netlify Forms) or a backend to enable sending.')
        form.reset()
      })
    }
  })
})()
