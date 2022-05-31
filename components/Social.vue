<template>
  <ul class="nav social">
    <li class="social-item">
      <a
        href="https://www.facebook.com/amanahomesltd"
        target="_blank"
        class="social-link"
      >
        <fa :icon="['fab', 'facebook-f']" />
      </a>
    </li>
    <li class="social-item">
      <a
        href="https://twitter.com/amana_homes"
        target="_blank"
        class="social-link"
      >
        <fa :icon="['fab', 'twitter']" />
      </a>
    </li>
    <li class="social-item">
      <a
        href="https://www.instagram.com/amanahomes/"
        target="_blank"
        class="social-link"
      >
        <fa :icon="['fab', 'instagram']" />
      </a>
    </li>
    <li class="social-item">
      <a
        href="https://www.youtube.com/channel/UC5EEsWBcltQGKna1QpgrOQQ"
        target="_blank"
        class="social-link"
      >
        <fa :icon="['fab', 'youtube']" />
      </a>
    </li>
    <li class="social-item">
      <a
        href="https://www.linkedin.com/company/amana-homes-ltd"
        target="_blank"
        class="social-link"
      >
        <fa :icon="['fab', 'linkedin-in']" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialComponent',
}
</script>
