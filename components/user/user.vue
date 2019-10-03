<template>
    <div>
        <component :is="tagName" @goUserPage="goUserPage"></component>
    </div>
</template>

<script>
import UserMain from './userMain';
import Order from './order';
export default {
    components: {
        UserMain,
        Order
    },
    data() {
        return {
            tagName: 'user-main'
        }
    },
    methods: {
        goUserPage: function(pageName) {
            this.tagName = pageName;
        }
    }
}
</script>