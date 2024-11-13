function Project({ img, title, url, github }) {
  return (
    <div>
      <img src={img} className="img-thumbnail" />
      <div>{title}</div>
      <div>{url}</div>
      <div>{github}</div>
    </div>
  );
}

export default Project;
