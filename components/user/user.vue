<template>
    <div>
        <keep-alive>
            <component :is="tagName" @goUserPage="goUserPage"></component>
        </keep-alive>
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