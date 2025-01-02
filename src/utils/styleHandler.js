class StyleHandler {
  constructor(isMobile, isTablet, isDesktop) {
    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktop = isDesktop;

    this.landing = new LandingStyleHandler(
      this.isMobile,
      this.isTablet,
      this.isDesktop
    );

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

    this.portfolio = new PortfolioStyleHandler(
      this.isMobile,
      this.isTablet,
      this.isDesktop
    );
  }

  get underlinedHeader() {
    if (this.isMobile) {
      return "underlined-header underlined-header-mobile";
    } else {
      return "underlined-header";
    }
  }
}

class LandingStyleHandler {
  constructor(isMobile, isTablet, isDesktop) {
    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktop = isDesktop;
  }

  get mainContainerStyling() {
    if (this.isMobile) {
      return "";
    } else {
      return "d-flex justify-content-center";
    }
  }

  get headerLinkStyling() {
    if (this.isMobile) {
      return "me-auto fs-5";
    } else {
      return "me-auto fs-6";
    }
  }

  get headshotStyling() {
    if (this.isMobile) {
      return "text-center pb-4";
    } else {
      return "d-inline float-start pe-4";
    }
  }

  get textStyling() {
    if (this.isMobile) {
      return "fs-5";
    } else {
      return "";
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
      return "";
    }
  }

  get siteWrapper() {
    return "col d-flex flex-column align-items-center icon-pointer";
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

class PortfolioStyleHandler {
  constructor(isMobile, isTablet, isDesktop) {
    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktop = isDesktop;
  }

  get columnStyling() {
    if (this.isMobile) {
      return "pb-4";
    } else {
      return "pb-4";
    }
  }

  get projectTypeHeader() {
    if (this.isMobile) {
      return "underlined-header underlined-header-mobile";
    } else {
      return "underlined-header project-type-header";
    }
  }
}

export default StyleHandler;
