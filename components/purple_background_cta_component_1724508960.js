<!-- 
INSTRUCTION: Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
INSTRUCTION: It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
-->

<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-transparent">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-pink-100 bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-purple-600 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70"></div>
          <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px] bg-pink-400"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#FF69B4" />
                <stop offset="100%" stop-color="#8A2BE2" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="flex">
            <div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Prehistoric Wisdom, Modern Conversations
            </div>
          </div>
          <div class="flex" id="content-title-container">
            <h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 bg-gradient-to-r from-pink-200 via-purple-300 to-pink-200 text-transparent">
              Talk to a Dinosaur Expert
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p id="content-body" class="flex-1 text-lg mb-8 text-purple-100">
              Want to chat with a prehistoric expert? Enter your email below to start a conversation with one of our friendly dinosaurs!
            </p>
          <form id="email-form" class="mt-8 space-y-4">
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-purple-900 placeholder-purple-300" placeholder="Enter your email">
            </div>
            <button type="submit" class="w-full px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-md hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Talk to a Dinosaur
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  },
  methods: {
    // Submit form method
    submitForm(event) {
      event.preventDefault();
      const email = this.$refs.email.value;
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      // Reset the form
      this.$refs.email.value = '';
    }
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
