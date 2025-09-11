<template>
  <header
    aria-label="Site Header"
    class="fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm"
  >
    <div class="flex items-center justify-center py-4 px-4">
      <nav
        class="bg-white shadow-lg rounded-full border border-blue-100 px-2 py-2 max-w-fit"
      >
        <div class="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          <nuxt-link
            class="text-gray-600 px-2 sm:px-3 py-2 hover:text-gray-800 hover:bg-gray-50 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap"
            to="/"
          >
            Home
          </nuxt-link>
          <nuxt-link
            class="text-gray-600 px-2 sm:px-3 py-2 hover:text-gray-800 hover:bg-gray-50 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap"
            to="/about"
          >
            About
          </nuxt-link>
          <nuxt-link
            class="text-gray-600 px-2 sm:px-3 py-2 hover:text-gray-800 hover:bg-gray-50 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap"
            to="/projects"
          >
            Projects
          </nuxt-link>
          <nuxt-link
            class="text-gray-600 px-2 sm:px-3 py-2 hover:text-gray-800 hover:bg-gray-50 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap"
            to="/blog"
          >
            Blog
          </nuxt-link>
          <nuxt-link
            class="text-gray-600 px-2 sm:px-3 py-2 hover:text-gray-800 hover:bg-gray-50 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap"
            to="/contact"
          >
            Contact
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>
