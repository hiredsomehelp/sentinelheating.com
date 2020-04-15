import React, { useState } from 'react';

function Contact(props) {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [message, setMessage] = useState('');

  function submitForm(e) {
    e.preventDefault();
    const formEndpoint = 'https://formspree.io/xpzjkjpz';
    const payload = { name, email, phoneNo, message };

    fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(() => setSuccess(true))
      .catch((err) => {
        setSuccess(false);
        console.log(err);
      });
  }

  return (
    <div className="relative bg-white" id={props.id}>
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Have a question?
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Well you&apos;re in luck, we love talking about HVAC stuff! Fill
              out this form, and we&apos;ll make sure to get in touch with you
              at your earliest convenience.
            </p>
            <dl className="mt-8 text-base leading-6 text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+16474482544" className="ml-3">
                    +1 (647) 448-2544
                  </a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3">
                    <a
                      href="mailto:support@sentinelheating.com?subject=Hi 👋"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      support@sentinelheating.ca
                    </a>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-2 md:py-8 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form onSubmit={submitForm} className="grid grid-cols-1 row-gap-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                    id="name"
                    name="name"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Name (real or imaginary, we won't judge)"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    name="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    id="email"
                    type="email"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    value={phoneNo}
                    onChange={(ev) => setPhoneNo(ev.target.value)}
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative rounded-md shadow-sm">
                  <textarea
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                    id="message"
                    name="message"
                    rows="4"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="">
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </span>
                {success && <span className="ml-4 font-2xl">Sent!</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
