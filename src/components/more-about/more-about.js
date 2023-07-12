import './more-about.scss';

const MoreAbout = ({subTitle}) => {
  return(
    <>
      <h2>{subTitle}</h2>
      <section className="copyBlock">
        <p>This application has been built by Elisabeth Vicente.</p>
        <p>I have chosen to create this SPA on React.</p>
        <p>If you have any questions, please feel free to contact me via email <a href="mailto:vicente.elisabeth#gmail.com">vicente.elisabeth#gmail.com</a> or phone 0751967 4237.</p>
      </section>
    </>
  );
}

export default MoreAbout;