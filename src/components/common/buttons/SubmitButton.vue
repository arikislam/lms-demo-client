<template>
    <button
            :type="nativeType"
            :disabled="(loading || disabled)"
            class="button button__themeColor button__block"
            :class="{[className]: true, 'w-100': block, 'disabled': (loading || disabled)}"
            @click.prevent="click"
    >
        <span class="button-icon" v-if="icon">
            <svg
                    v-if="loading"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    class=""
                    style="shape-rendering: auto;"
                    width="20px"
                    height="20px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
            >
                <circle
                        cx="50"
                        cy="50"
                        r="24"
                        stroke-width="8"
                        stroke="#fff"
                        stroke-dasharray="37.69911184307752 37.69911184307752"
                        fill="none"
                        stroke-linecap="round"
                        transform="rotate(300.791 50 50)"
                >
                  <animateTransform
                          attributeName="transform"
                          type="rotate"
                          repeatCount="indefinite"
                          dur="1.01010101010101s"
                          keyTimes="0;1"
                          values="0 50 50;360 50 50"
                  />
                </circle>
            </svg>
            <i v-else :class="icon"></i>
        </span>
        <template v-if="loading">{{loadingText}}</template>
        <slot v-else/>
    </button>
</template>
<script>
export default {
    name: "submit-button",
    props: {
        nativeType: {
            type: String,
            default: "submit"
        },

        className: {
            type: String,
            default: "info-button"
        },

        loading: {
            type: Boolean,
            default: false
        },

        loadingText: {
            type: String,
            default: "please wait"
        },

        icon: {
            type: String,
            default: "fa fa-save"
        },

        disabled: {
            type: Boolean,
            default: false
        },

        block: {
            type: Boolean,
            default: false
        },

        click: {
            type: Function
        }
    }
};
</script>
