<template>
    <aside class="sidemenu">
        <ul class="links">
            <li class="link_item">
                <router-link class="NavLink" to="/terms">Terms of service</router-link>
                </li>
            <li class="link_item">
                <router-link class="NavLink" to="/privacypolicy">Privacy Policy</router-link>
            </li>
            <li class="link_item">
                <router-link class="NavLink" to="/cookies-policy">Cookies Policy</router-link>
            </li>
            <li class="link_item">
                <router-link class="NavLink" to="/disclaimer">Disclaimer</router-link>
            </li>
            <li class="link_item">
                <router-link class="NavLink" to="/project-terms">Project Terms</router-link>
            </li>
        </ul>
    </aside>
</template>
<style lang="scss" scoped>
.sidemenu {
    background: #ecf0f1;
    max-width: 300px;
    position: absolute;
    left: 30px;
    top: 200px;
    .links {
        padding: 12px;
        margin: 0;
        .link_item {
            padding: 5px;
            list-style: none;
            font-weight: 600;
            &:hover {
                color: #4545bd
            }
        }
        
        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>