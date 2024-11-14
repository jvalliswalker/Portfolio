function Project({ img, title, url, github, styling }) {
  function navigateTo(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <div className="project-image-container">
      <img src={img} className={styling.projectImageStyling} />
      <div className={styling.projectMiddleStyling}>
        <div className="container">
          <div className="row mb-3">
            <div className={styling.projectImageTitleStyling}>{title}</div>
          </div>
          <div className="row">
            <div className="col">
              <div
                onClick={() => navigateTo(url)}
                className={styling.projectButtonStyling}
              >
                Visit Site
              </div>
            </div>
            <div className="col">
              <img
                src="\images\icon-github.png"
                onClick={() => navigateTo(github)}
                className={styling.projectGithubIconStyling}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
