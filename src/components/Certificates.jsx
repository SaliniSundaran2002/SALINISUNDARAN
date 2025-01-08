import React from 'react';

const certificates = [
  {
    name: "Certificate 1",
    image: "certificate1.jpg" // Path to the certificate image
  },
  {
    name: "Certificate 2",
    image: "certificate2.jpg" // Path to the certificate image
  },
  // Add more certificates here
];

const Certificates = () => {
  return (
    <div className="bg-black h-screen text-center text-white p-10 font-SourGummy">
      <h2 className="text-3xl text-cyan-400 mb-8">Certificates</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {certificates.map((certificate, index) => (
          <div key={index} className="bg-[#2C2C2C] p-5 rounded-lg">
            <img
              src={certificate.image}
              alt={certificate.name}
              className="w-full h-48 object-cover mt-3 rounded-md"
            />
            <p className="mt-3 text-center">{certificate.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
