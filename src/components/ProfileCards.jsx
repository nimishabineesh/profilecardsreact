function ProfileCards({
  name,
  role,
  photo,
  details,
  email,
  bgColor,
}) {
  const qrLink = "https://qr-code.hexdocs.pm/docs/qrcode.svg";

  return (
    <div className="w-full min-w-0 max-w-md mx-auto overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:shadow-2xl">

      
      <div className={`relative h-48 overflow-hidden sm:h-56 md:h-60 ${bgColor}`}>
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

  
      <div className="relative -mt-10 mx-3 mb-4 rounded-2xl bg-white p-4 shadow-lg sm:-mt-12 sm:mx-4 sm:p-5 md:-mt-14">

        
        <h2 className=" text-xl font-bold text-gray-900 sm:text-2xl">
          {name}
        </h2>

        <p className="mt-1  text-xs font-semibold tracking-wider text-gray-500 sm:text-sm">
          {role}
        </p>

        
        <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex min-w-0 items-start gap-3"
            >
              <span className="shrink-0 text-lg sm:text-xl">
                {detail.icon}
              </span>

              <p className="min-w-0 text-sm leading-6 text-gray-600">
                {detail.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex min-w-0 items-center gap-3 border-t border-gray-200 pt-4 sm:mt-7 sm:pt-5">

          <img
            src={qrLink}
            alt="Contact QR Code"
            className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
          />

          <div className="min-w-0">
            <p className="text-xs font-medium text-gray-500">
              FOR INQUIRIES
            </p>

            <p className=" text-xs italic text-gray-400 sm:text-sm">
              Contact via scan
            </p>

            {email && (
              <a
                href={`mailto:${email}`}
                className="mt-1 block break-all text-sm text-blue-600 hover:underline"
              >
                {email}
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProfileCards;

