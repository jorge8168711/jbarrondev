export default function ResumeHeader() {
  return (
    <div className="bg-base-100 print:py-8 print:px-10">
      <header className="mb-4 print:mb-3">
        <h1 className="font-light mb-1 text-4xl print:text-2xl print:mb-0">Jorge Barrón</h1>
        <h2 className="font-medium mb-0 text-base font-mono text-accent print:text-[12px] print:mb-0">
          Front-end Developer
        </h2>
      </header>

      <article>
        <p className="text-md leading-relaxed print:text-xs print:leading-normal print:m-0 print:font-medium">
          Passionate developer with 7+ years of experience developing multi-platform responsive web
          applications across diverse industries. Proficient JavaScript programmer with backend and
          Front-end technologies like React.js, Next.js and Node.js. I have participated in the
          development of mobile applications using technologies such as React Native and the
          construction of Progressive Web Apps using different web technologies. In previous roles,
          I successfully developed features that had a significant impact in helping to attract
          investors and increase the number of clients interested in the products and services of
          the companies I have worked with.
        </p>
      </article>
    </div>
  );
}
