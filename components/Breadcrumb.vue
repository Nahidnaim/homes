<template>
  <!-- breadcumb section start -->
  <div class="breadcrumb-wrap">
    <nav aria-label="breadcrumb">
      <div class="container">
        <ol class="breadcrumb">
          <!--          {{ crumbs }}-->

          <NuxtLink
            to="/"
            tag="li"
            active-class="active"
            class="breadcrumb-item"
            ><a href="#"> <i class="fas fa-home"></i> Home</a>
          </NuxtLink>
          <NuxtLink
            :to="crumbs[0].path"
            tag="li"
            active-class="active"
            class="breadcrumb-item"
          >
            {{ crumbs[0].text }}
          </NuxtLink>
        </ol>
      </div>
    </nav>
  </div>
  <!-- breadcumb section end -->
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    crumbs() {
      const pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path,
          to: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            : '/' + path,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        })
        return breadcrumbArray
      }, [])
      return breadcrumbs
    },
  },
}
</script>

<style scoped></style>
