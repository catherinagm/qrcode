import qrimage from "../assets/image-qr-code.png";

function Card() {
  return (
    <section className="card-section flex items-center justify-center min-h-screen">
      <div className="card-container max-w-xs p-4 bg-white rounded-xl shadow-lg">
        <img className="rounded-lg mb-2" src={qrimage} alt="qrcode" />
        <div className="text-box p-4">
          <h3 className="xl:text-xl sm:text-base font-bold text-center mb-4">
            Improve your front-end skills by building projects
          </h3>
          <p className="text-center text-base mb-2 text-grayish-blue">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
