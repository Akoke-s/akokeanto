<template>
  <div class="container mx-auto max-w-xl px-6 sm:py-16 text-start text-gray-500">
    <h3 class="text-2xl font-extrabold text-black mt-3">Personal Projects</h3>
    <p class="text-sm mb-4">
      In my spare time, I work on a number of projects. Here are the notable
      ones.
    </p>

    <div class="mb-5">
      <h3 class="text-xl font-bold inline text-gray-700">Venndor</h3>
      <p class="text-sm">
        An events and ticketing platform covering the full lifecycle: event creation, ticket sales, attendee management, 
        QR-based check-in validation, and payment processing. Built on a <span class="font-bold">Laravel</span> backend deployed on <span class="font-bold">Laravel Cloud</span>, 
        with a <span class="font-bold">Nuxt.js</span>frontend on <span class="font-bold">Vercel</span>.
      </p>
      <p class="text-sm">
        Engineered full payment idempotency on Paystack transactions to prevent duplicate charges under concurrent load, and implemented 
        QR code generation for each issued ticket. Leading a team of product designers and frontend developers, reviewing designs, 
        coordinating implementation, and owning all backend architecture and API development.
      </p>
      <a
        class="text-xs font-medium inline-flex items-center"
        href="https://tickets.thevenndor.com"
        target="_blank"
      >
        Visit website
        <svg
          class="h-4 w-4 ml-1"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
    </div>

    <div class="mb-5">
      <h3 class="text-xl font-bold inline text-gray-700">Light-ED Africa</h3>
      <p class="text-sm">
        An education-focused platform built for the African continent. <span class="font-bold">Laravel</span> API backend deployed on <span class="font-bold">AWS</span> and managed via <span class="font-bold">Laravel Forge</span>, 
        with a <span class="font-bold">Next.js</span> frontend on <span class="font-bold">Vercel</span>. Leading a cross-functional team of designers, frontend developers, and digital managers 
        through the full product lifecycle - from architecture decisions to shipping features.
      </p>
      <a
        class="text-xs font-medium inline-flex items-center"
        href="https://lightedafrica.com"
        target="_blank"
      >
        Visit Website
        <svg
          class="h-4 w-4 ml-1"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
    </div>
  </div>
</template>
