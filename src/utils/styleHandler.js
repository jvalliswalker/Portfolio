class StyleHandler {
  constructor(isMobile, isTablet, isDesktop) {
    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktop = isDesktop;

    this.project = new ProjectStyleHandler(
      this.isMobile,
      this.isTablet,
      this.isDesktop
    );

    this.contact = new ContactStyleHandler(
      this.isMobile,
      this.isTablet,
      this.isDesktop
    );

    this.footer = new FooterStyleHandler(
      this.isMobile,
      this.isTablet,
      this.isDesktop
    );

    this.resumeStyleHandler = new ResumeStyleHandler(
      this.isMobile,
      this.isTablet,
      this.isDesktop
    );
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

class ContactStyleHandler {
  constructor(isMobile, isTablet, isDesktop) {
    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktop = isDesktop;
  }

  get inputWrapperStyling() {
    if (this.isMobile) {
      return "mb-3";
    } else if (this.isTablet) {
      return "mb-3 contact-form-wrapper-tablet ";
    } else {
      return "mb-3 contact-form-wrapper";
    }
  }

  get formWrapperStyling() {
    if (this.isMobile) {
      return "";
    } else {
      return "d-flex flex-column justify-content-center align-items-center";
    }
  }
}

class ResumeStyleHandler {
  constructor(isMobile, isTablet, isDesktop) {
    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktop = isDesktop;
  }

  get accordionColumnStyling() {
    if (this.isMobile) {
      return "";
    } else {
      return "col";
    }
  }
}

class FooterStyleHandler {
  constructor(isMobile, isTablet, isDesktop) {
    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktop = isDesktop;
  }

  get iconStyling() {
    if (this.isMobile) {
      return "icon-small pointerOnHover";
    } else {
      return "icon-medium pointerOnHover";
    }
  }
}

class ProjectStyleHandler {
  constructor(isMobile, isTablet, isDesktop) {
    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktop = isDesktop;
  }

  get imageStyling() {
    if (this.isMobile) {
      return "project-image-mobile border border-4 border-black";
    } else {
      return "project-image overflow-hidden border border-4 border-black";
    }
  }

  get titleStyling() {
    if (this.isMobile) {
      return "text-center fw-bold fs-5 project-title-mobile pb-3";
    } else {
      return "text-center fw-bold fs-2 pb-4";
    }
  }

  get middleStyling() {
    if (this.isMobile) {
      return "middle-mobile";
    } else {
      return "middle";
    }
  }

  get buttonStyling() {
    if (this.isMobile) {
      return "btn secondary-color-theme py-2 rounded-2 text-dark";
    } else {
      return "btn secondary-color-theme py-3 rounded-2 text-dark";
    }
  }

  get githubIconStyling() {
    if (this.isMobile) {
      return "github-small pointerOnHover";
    } else {
      return "github-medium pointerOnHover";
    }
  }
}

export default StyleHandler;
