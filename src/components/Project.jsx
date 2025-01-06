function Project({ img, title, url, github, styling, description }) {
  function navigateTo(url) {
    window.open(url, "_blank").focus();
  }

  const style = styling.project;

  return (
    <div className="project-image-container custom-shadow">
      <img src={img} className={style.imageStyling} />
      <div>
        <div className={style.titleStyling}>
          <div>{title}</div>
        </div>
        {/* <div className="project-description">{description}</div> */}
      </div>
      <div className={style.middleStyling}>
        <div className="container">
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
