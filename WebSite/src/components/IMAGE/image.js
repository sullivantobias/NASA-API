/**
 * IMAGE component
 */

export default {
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    width: {
      type: [Number, String],
      default: 600
    },
    height: {
      type: [Number, String],
      default: 400
    },
    block: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
    fluidGrow: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: [Boolean, String],
      default: false
    },
    thumbnail: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    blank: {
      type: Boolean,
      default: false
    },
    blankColor: {
      type: String,
      default: 'transparent'
    }
  },
  data() {
    return {
      mainProps: {
        src: this.src,
        alt: this.alt,
        width: this.width,
        height: this.height,
        block: this.block,
        fluid: this.fluid,
        fluidGrow: this.fluidGrow,
        rounded: this.rounded,
        thumbnail: this.thumbnail,
        left: this.left,
        right: this.right,
        center: this.center,
        blank: this.blank,
        blankColor: this.blankColor
      }
    }
  },
};


