<template>
  <div class="demo-block" :class="[blockClass, { 'hover': hovering }]" @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="demo-block-control" ref="control" :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">显示代码</span>
      </transition>
    </div>
  </div>
</template>

<script type="text/babel">

export default {
  data() {
    return {
      codepen: {
        script: "",
        html: "",
        style: ""
      },
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    };
  },

  methods: {
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight;
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : "0";
    },

    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener("scroll", this.scrollHandler);
    },

    stripScript() {
      const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
      return result && result[2] ? result[2].trim() : "";
    },

    stripStyle(content) {
      const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
      return result && result[2] ? result[2].trim() : "";
    },

    stripTemplate(content) {
      content = content.trim();
      if (!content) {
        return content;
      }
      return content.replace(/<(script|style)[\s\S]+<\/\1>/g, "").trim();
    }
  },

  computed: {
    blockClass() {
      return `demo-zh-CN`;
    },

    iconClass() {
      return this.isExpanded ? "el-icon-caret-top" : "el-icon-caret-bottom";
    },

    codeArea() {
      return this.$el.getElementsByClassName("meta")[0];
    },

    codeAreaHeight() {
      if (this.$el.getElementsByClassName("description").length > 0) {
        return (
          this.$el.getElementsByClassName("description")[0].clientHeight +
          this.$el.getElementsByClassName("highlight")[0].clientHeight +
          20
        );
      }
      return this.$el.getElementsByClassName("highlight")[0].clientHeight;
    }
  },

  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : "0";
      if (!val) {
        this.fixedControl = false;
        this.$refs.control.style.left = "0";
        this.removeScrollHandler();
        return;
      }
      setTimeout(() => {
        this.scrollParent = document.querySelector(
          ".page-component__scroll > .el-scrollbar__wrap"
        );
        this.scrollParent &&
          this.scrollParent.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 200);
    }
  },

  created() {
    const highlight = this.$slots.highlight;
    if (highlight && highlight[0]) {
      let code = "";
      let cur = highlight[0];
      if (cur.tag === "pre" && (cur.children && cur.children[0])) {
        cur = cur.children[0];
        if (cur.tag === "code") {
          code = cur.children[0].text;
        }
      }
      if (code) {
        this.codepen.html = this.stripTemplate(code);
        this.codepen.script = this.stripScript(code);
        this.codepen.style = this.stripStyle(code);
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName("highlight")[0];
      if (this.$el.getElementsByClassName("description").length === 0) {
        highlight.style.width = "100%";
        highlight.borderRight = "none";
      }
    });
  },

  beforeDestroy() {
    this.removeScrollHandler();
  }
};
</script>

<style>
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}
.demo-block.hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
}
.demo-block code {
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
}
.demo-block .demo-button {
  float: right;
}
.demo-block .source {
  padding: 24px;
}
.demo-block .meta {
  background-color: #fafafa;
  border-top: solid 1px #eaeefb;
  overflow: hidden;
  height: 0;
  transition: height 0.2s;
}
.demo-block .description {
  padding: 20px;
  box-sizing: border-box;
  border: solid 1px #ebebeb;
  border-radius: 3px;
  font-size: 14px;
  line-height: 22px;
  color: #666;
  word-break: break-word;
  margin: 10px;
  background-color: #fff;
}
.demo-block .description p {
  margin: 0;
  line-height: 26px;
}
.demo-block .description code {
  color: #5e6d82;
  background-color: #e6effb;
  margin: 0 4px;
  display: inline-block;
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 3px;
  height: 18px;
  line-height: 18px;
}
.demo-block .highlight pre {
  margin: 0;
}
.demo-block .highlight code.hljs {
  margin: 0;
  border: none;
  max-height: none;
  border-radius: 0;
  font-size: 12px;
  line-height: 1.5;
}
.demo-block .highlight code.hljs::before {
  content: none;
}
.demo-block .demo-block-control {
  border-top: solid 1px #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
}
.demo-block .demo-block-control.is-fixed {
  position: fixed;
  bottom: 0;
  width: 868px;
}
.demo-block .demo-block-control i {
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s;
}
.demo-block .demo-block-control i.hovering {
  transform: translateX(-40px);
}
.demo-block .demo-block-control > span {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  transition: 0.3s;
  display: inline-block;
}
.demo-block .demo-block-control:hover {
  color: #409eff;
  background-color: #f9fafc;
}
.demo-block .demo-block-control .text-slide-enter,
.demo-block .demo-block-control .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>