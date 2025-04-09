export default function AbilitySection({
  id,
  title,
  subtitle,
  description,
  videoSrc,
}) {
  return (
    <>
      <section className="bg-img" id={id}>
        <h2>{title}</h2>
      </section>
      <section className="information">
        <article>
          <div className="paragraph-container">
            <h3>{subtitle}</h3>
            <p>{description}</p>
          </div>
          <div className="video-link">
            <video loop muted autoPlay src={videoSrc}></video>
          </div>
        </article>
      </section>
    </>
  );
}
