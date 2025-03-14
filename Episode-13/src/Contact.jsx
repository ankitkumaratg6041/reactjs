const Contact = () => {
  return (
    <div className="bg-white py-[70px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="border-l-[5px] border-primary pl-5">
          <h2 className="mb-2 text-2xl font-semibold text-dark">
          </h2>
            Contact Us
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices lectus sem.
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 my-5 border border-gray-300 bg-amber-100 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 my-5 border border-gray-300 bg-amber-100 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 my-5 border border-black-300 bg-amber-100 rounded"
        ></textarea>  
        <button className="my-10">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
