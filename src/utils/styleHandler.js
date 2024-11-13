class StyleHandler {
  constructor(isMobile, isTablet, isDesktop) {
    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktop = isDesktop;
  }

  get headerLinkStyling() {
    if (this.isMobile) {
      return "me-auto fs-5";
    } else {
      return "me-auto fs-6";
    }
  }

  get aboutHeadshotStyling() {
    if (this.isMobile) {
      return "text-center pb-4";
    } else {
      return "d-inline float-start pe-4";
    }
  }

  get aboutTextStyling() {
    if (this.isMobile) {
      return "fs-5";
    } else {
      return "fs-5";
    }
  }
}

export default StyleHandler;
