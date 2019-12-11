<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer v-show="isFooter" />
  </div>
</template>

<script>
    import Header from '@/components/header/Header'
    import Footer from '@/components/footer/Footer'
    export default {
        name: 'App',
        data () {
            return {
                isFooter: true
            }
        },
        components: {
            Header,
            Footer
        },
        methods: {
            fetchData () {
                if (this.$route.path === '/home') {
                    this.isFooter = false
                } else if (this.$route.path === '/aboutus') {
                    this.isFooter = false
                }
            }
        },
        mounted () {
            this.fetchData();
        },
        watch: {
            $route: 'fetchData'
        }
    }
</script>

<style>
</style>
