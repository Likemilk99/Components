<script>
    export default {
        data() {
            return {
                containerRef: '',
                width: 0,
                windowWidth: 0,
                windowHeight: 0,
            }
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);
            });
        },
        methods: {
            getWindowWidth(event) {
                this.windowWidth = document.documentElement.clientWidth;
                this.width = this.$refs[this.containerRef].$el.offsetWidth;
            },
            getWindowHeight(event) {
                this.windowHeight = document.documentElement.clientHeight;
            }
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
            window.removeEventListener('resize', this.getWindowHeight);
        }
    }
</script>