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
              Ancient Trash, Modern Conversations
            </div>
          </div>
          </div>
          <div class="flex" id="content-title-container">
              Talk to a Garbage Expert
            </h2>
          </div>
          </div>
          <div class="flex" id="content-body-container">
              Want to chat with a waste management expert? Enter your email below to start a conversation with one of our friendly garbage collectors!
            </p>
          <form id="email-form" class="mt-8 space-y-4">
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-purple-900 placeholder-purple-300" placeholder="Enter your email">
            </div>
              Talk to a Garbage Collector
            </button>
          </form>
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
