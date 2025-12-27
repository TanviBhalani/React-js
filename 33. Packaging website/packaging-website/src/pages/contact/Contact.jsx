import { useState } from "react";
import Footer from "../../Components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    industry: "",
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    needs: [],
    message: "",
    file: null
  });

  // Handle input & checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        needs: checked
          ? [...prev.needs, value]
          : prev.needs.filter((n) => n !== value)
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Handle file
  const handleFile = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: Date.now(),
      industry: form.industry,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      contact: form.contact,
      needs: form.needs,
      message: form.message,
      fileName: form.file ? form.file.name : null
    };

    await fetch("http://localhost:5000/queries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    // ✅ Reset everything
    setForm({
      industry: "",
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      needs: [],
      message: "",
      file: null
    });

    alert("Query submitted successfully!");
  };

  return (
    <>
      {/* <section className="bg-[#fffdf5] min-h-screen px-28 py-24">
        <div className="grid grid-cols-2 gap-24 items-start">

          <div>
            <h1 className="text-6xl font-normal mb-24">Let’s Chat</h1>

            <img
              src="/images/wireframe.png"
              alt="Packaging"
              className="max-w-md opacity-70"
            />
          </div>

          <div>
            <h2 className="text-3xl font-medium mb-4">
              We're here to help
            </h2>

            <p className="text-gray-600 mb-10 max-w-md">
              Have a packaging question? That’s our favourite topic.
              Get support directly from our team below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className="w-full border border-gray-400 p-4 rounded-md bg-transparent appearance-none"
                required
              >
                <option value="" hidden>
                  Industry Type
                </option>
                <option>Food Service</option>
                <option>Agriculture</option>
                <option>Food Processing</option>
              </select>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name*"
                  value={form.firstName}
                  onChange={handleChange}
                  className="border border-gray-400 p-4 rounded-md"
                  required
                />
                <input
                  name="lastName"
                  placeholder="Last Name*"
                  value={form.lastName}
                  onChange={handleChange}
                  className="border border-gray-400 p-4 rounded-md"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-gray-400 p-4 rounded-md"
                  required
                />
                <input
                  name="contact"
                  placeholder="Contact Number"
                  value={form.contact}
                  onChange={handleChange}
                  className="border border-gray-400 p-4 rounded-md"
                />
              </div>

              <div>
                <p className="font-medium mb-3">
                  Tell us a bit about your needs
                </p>

                <div className="flex gap-8 text-sm">
                  {["Customisation", "Branding", "Other"].map((item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={item}
                        checked={form.needs.includes(item)}
                        onChange={handleChange}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="fileUpload"
                  className="flex items-center gap-2 border border-black px-4 py-2 rounded-md cursor-pointer text-sm"
                >
                  📎 Attach a file
                </label>

                {form.file && (
                  <span className="text-xs text-gray-600">
                    {form.file.name}
                  </span>
                )}

                <input
                  id="fileUpload"
                  type="file"
                  onChange={handleFile}
                  className="hidden"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message goes here"
                rows="6"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-400 p-4 rounded-md resize-none"
              />

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                Submit enquiry
              </button>

            </form>
          </div>
        </div>
      </section> */}

      <section className="bg-[#fffdf5] min-h-screen px-6 sm:px-10 md:px-20 lg:px-28 py-12 sm:py-16 md:py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

    {/* LEFT */}
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-10 sm:mb-16 md:mb-24">
        Let’s Chat
      </h1>

      <img
        src="/images/wireframe.png"
        alt="Packaging"
        className="max-w-xs ml-19 sm:max-w-sm md:max-w-md opacity-70"
      />
    </div>

    {/* RIGHT */}
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4">
        We're here to help
      </h2>

      <p className="text-gray-600 mb-8 sm:mb-10 max-w-md text-sm sm:text-base">
        Have a packaging question? That’s our favourite topic.
        Get support directly from our team below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

        {/* Industry */}
        <select
          name="industry"
          value={form.industry}
          onChange={handleChange}
          className="w-full border border-gray-400 p-3 sm:p-4 rounded-md bg-transparent appearance-none"
          required
        >
          <option value="" hidden>
            Industry Type
          </option>
          <option>Food Service</option>
          <option>Agriculture</option>
          <option>Food Processing</option>
        </select>

        {/* Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="First Name*"
            value={form.firstName}
            onChange={handleChange}
            className="border border-gray-400 p-3 sm:p-4 rounded-md"
            required
          />
          <input
            name="lastName"
            placeholder="Last Name*"
            value={form.lastName}
            onChange={handleChange}
            className="border border-gray-400 p-3 sm:p-4 rounded-md"
            required
          />
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-400 p-3 sm:p-4 rounded-md"
            required
          />
          <input
            name="contact"
            placeholder="Contact Number"
            value={form.contact}
            onChange={handleChange}
            className="border border-gray-400 p-3 sm:p-4 rounded-md"
          />
        </div>

        {/* Needs */}
        <div>
          <p className="font-medium mb-2 sm:mb-3">
            Tell us a bit about your needs
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-8 text-sm">
            {["Customisation", "Branding", "Other"].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={item}
                  checked={form.needs.includes(item)}
                  onChange={handleChange}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Attach file */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <label
            htmlFor="fileUpload"
            className="flex items-center gap-2 border border-black px-4 py-2 rounded-md cursor-pointer text-sm w-fit"
          >
            📎 Attach a file
          </label>

          {form.file && (
            <span className="text-xs text-gray-600">
              {form.file.name}
            </span>
          )}

          <input
            id="fileUpload"
            type="file"
            onChange={handleFile}
            className="hidden"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message goes here"
          rows="6"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-400 p-3 sm:p-4 rounded-md resize-none"
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition w-full sm:w-auto"
        >
          Submit enquiry
        </button>

      </form>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
}
