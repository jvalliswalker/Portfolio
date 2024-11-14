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

  get projectImageStyling() {
    if (this.isMobile) {
      return "project-image-mobile border border-4 border-black";
    } else {
      return "project-image overflow-hidden border border-4 border-black";
    }
  }

  get projectImageTitleStyling() {
    if (this.isMobile) {
      return "text-center fw-bold fs-5";
    } else {
      return "text-center fw-bold fs-2";
    }
  }

  get projectMiddleStyling() {
    if (this.isMobile) {
      return "middle-mobile";
    } else {
      return "middle";
    }
  }

  get projectButtonStyling() {
    if (this.isMobile) {
      return "btn bg-primary py-2 rounded-2 text-white";
    } else {
      return "btn bg-primary py-3 rounded-2 text-white";
    }
  }

  get projectGithubIconStyling() {
    if (this.isMobile) {
      return "github-small pointerOnHover";
    } else {
      return "github-medium pointerOnHover";
    }
  }
}

export default StyleHandler;
