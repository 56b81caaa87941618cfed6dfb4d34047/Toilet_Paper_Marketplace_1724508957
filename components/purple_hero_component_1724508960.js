<!-- 
INSTRUCTION: Summary: Contains a section with the following components:
INSTRUCTION: 1. Particles animation: A canvas element for displaying a particle animation in the background.
INSTRUCTION: 2. Illustration: An SVG illustration with a gradient background and various filters applied.
INSTRUCTION: 3. Hero content: The main content of the landing page, including an announcement text, a hero text, a sub-hero text, and two buttons. The hero content is centered.
-->

<template>
  <section id="hero-section-container">
    <div id="section-container" class="relative max-w-6xl mx-auto px-4 sm:px-6 bg-gradient-to-br from-pink-400 to-purple-600">
      <div id="hero-content-container" class="pt-32 pb-16 md:pt-52 md:pb-32">
        <!-- Hero content -->
        <div id="hero-content" class="max-w-3xl mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8" style="position: relative; z-index: 1">
          <div id="announcement-text" class="mb-6" data-aos="fade-down">
              <div id="announcement-text-inner" class="flex relative before:absolute before:inset-0 before:blur-md before:bg-pink-500">
              <a id="announcement-link" class="flex-1 btn-sm py-0.5 transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:rounded-full before:pointer-events-none shadow text-white hover:text-pink-200 before:bg-purple-800/50" 
                 href="#0" 
                 style="background: linear-gradient(theme(colors.pink.500), theme(colors.purple.500)) padding-box, linear-gradient(theme(colors.pink.500), theme(colors.purple.200) 75%, theme(colors.transparent) 100%) border-box;">
                  <span id="announcement-link-text" class="relative inline-flex items-center">
                    Revolutionizing the way you buy and sell toilet paper! 
                    <span id="announcement-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-300">-&gt;</span>
                  </span>
              </a>
            </div>
          </div>
          <div class="flex" id="hero-text-container">
            <h1 id="hero-text" class="h1 bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-purple-300 to-pink-200 pb-4" data-aos="fade-down">Flush away your toilet paper troubles</h1>
          </div>
          <div class="flex" id="sub-hero-text-container">
            <p id="sub-hero-text" class="flex-1 text-lg mb-8 text-white" data-aos="fade-down" data-aos-delay="200">Welcome to the ultimate online marketplace for all your toilet paper needs. Buy, sell, and trade rolls with ease. Never run out of TP again!</p>
          </div>
          <div id="buttons-container" class="flex justify-center space-x-4 mt-8">
            <div id="get-started-button-container">
              <a id="get-started-button" 
                 class="flex items-center justify-center px-6 py-3 text-white bg-pink-600 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50" 
                 href="#0">
                  Get Started 
                  <span id="get-started-arrow" class="ml-2 transform transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">→</span>
              </a>
            </div>
            <div id="docs-button-container">
              <a id="docs-button" class="flex items-center justify-center px-6 py-3 text-purple-900 bg-white bg-opacity-50 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" href="#0">
                <svg id="docs-icon" class="shrink-0 mr-3 text-purple-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z"/>
                </svg>
                <span id="docs-button-text">Read the docs</span>
              </a>
            </div>
            <div id="try-it-out-button-container">
              <a id="try-it-out-button" class="flex items-center justify-center px-6 py-3 text-white bg-purple-600 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" href="#0">
                Try it out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleHeroComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  }
};
</script>

<style scoped>
</style>
