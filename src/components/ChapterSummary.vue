<template>
    <div class="chapter">
        <div>
            <img :src="$withBase(image)" height="150" width="350">
        </div>
        <div>
            <a :href="this.page.path"><h3>{{ title }}</h3></a>
        </div>
        <div>
            <p>{{ summary }}</p>
        </div>
    </div>
</template>

<script>
const imagePlaceholder = 'http://via.placeholder.com/350x150';
export default {
    props: {
        page: {
            type: Object,
            default: () => ({
                frontmatter: {
                    image: imagePlaceholder
                },
                title: 'Title'
            }),
        }
    },
    data: function() {
        return {
            
        }
    },
    computed: {
        title: function() {
            return this.page.title; 
        },
        image: function() {
            let image_url = this.page.frontmatter.image;
            if(image_url === undefined) {
                return 'http://via.placeholder.com/350x150';
            }
            image_url = `~${this.page.path}${image_url}`; // TODO: This is not yet supported by vuepress...
            return image_url;
        },
        summary: function() {
            return this.page.frontmatter.summary
        }
    }
}
</script>