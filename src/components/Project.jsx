function Project({ img, title, url, github, styling }) {
  function navigateTo(url) {
    window.open(url, "_blank").focus();
  }

  const style = styling.project;

  return (
    <div className="project-image-container">
      <img src={img} className={style.imageStyling} />
      <div className={style.middleStyling}>
        <div className="container">
          <div className="row">
            <div className={style.titleStyling}>{title}</div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div
                onClick={() => navigateTo(url)}
                className={style.buttonStyling}
              >
                Visit Site
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <img
                src="\images\icon-github.png"
                onClick={() => navigateTo(github)}
                className={style.githubIconStyling}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
