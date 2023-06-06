<script setup>
</script>

<template>
    
    <div class="bg-white mb-6">
        <div class="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
            <p class="mx-auto mt-4 max-w-4xl text-center leading-relaxed text-lg lg:text-4xl">
                Companies I've helped reach new heights
            </p>

        </div>

        <div>
            <ul class="media-images media-images--config-dynamic">
                <li class="media-images__item grayscale hover:grayscale-0">
                    <img 
                        class="media-images__image h-16" 
                        src="../../assets/images/logos/ef.png" 
                        alt="ef-network-ltd-logo" 
                    />
                </li>
                <li class="media-images__item grayscale hover:grayscale-0">
                    <img 
                        class="media-images__image h-16" 
                        src="../../assets/images/logos/ourpass.png" 
                        alt="ourpass-inc-logo" 
                    />
                </li>
                <li class="media-images__item grayscale hover:grayscale-0">
                    <img 
                        class="media-images__image h-16" 
                        src="../../assets/images/logos/invercross.png" 
                        alt="invercross-business-solutions-logo" 
                    />
                </li>
                <li class="media-images__item grayscale hover:grayscale-0">
                    <img 
                        class="media-images__image h-16" 
                        src="../../assets/images/logos/tribesq.png"
                        alt="tribesquare-logo" 
                    />
                </li>

            </ul>
        </div>
    </div>
</template>

<style scoped>

.media-images {
  margin: 2rem;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.media-images__image {
  margin: 1rem;
}

.media-images.media-images--config-width .media-images__image {
  width: 6.25rem;
}

.media-images.media-images--config-height .media-images__image {
  height: 1.5rem;
}
</style>