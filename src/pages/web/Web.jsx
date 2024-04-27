import React from 'react';
import { House, GlobeHemisphereWest, WifiHigh } from 'phosphor-react';

const Web = () => {
  return (
    <>
      <div className='text-sm breadcrumbs pl-6'>
        <ul>
          <li>
            <a href='/'>
              <House size={16} />
              <span className='ml-1'>home</span>
            </a>
          </li>
          <li>
            <span className='inline-flex gap-2 items-center'>
              <GlobeHemisphereWest size={16} />
              <span>Web</span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <div className='font-sans mt-8 prose prose-slate mx-auto lg:prose-lg'>
          <h1 className='mt-4 ml-4 mr-2 mb-2 lg:mt-6'>
            Introduction to The Web
          </h1>
          <p className='m-6 text-justify'>
            Web refers to the various tools and techniques that are utilized in
            the process of communication between different types of devices over
            the Internet. A web browser is used to access web pages. Web
            browsers can be defined as programs that display text, data,
            pictures, animation, and video on the Internet. Hyperlinked
            resources on the World Wide Web can be accessed using software
            interfaces provided by Web browsers.
          </p>
          <div className='prose prose-slate'>
            <h2 className='m-4 mb-2'>Components of Web</h2>
            <p className='m-6'>
              There are couple of components required to make the web be the web
              itself. Following are the important keynotes
            </p>
            <ul className='menu ml-5'>
              <a href='/web/internet'>
                <li>1. Internet</li>
              </a>
              <a href='/web/pages'>
                <li>2. Web Pages</li>
              </a>
              <a href='/web/protocol'>
                <li>3. Protocol</li>
              </a>
              <a href='/web/browser'>
                <li>4. Browser</li>
              </a>
              <a href='/web/sitetypes'>
                <li>5. Site Types</li>
              </a>
              <a href='/web/siteplannings'>
                <li>6. Site Planning</li>
              </a>
              <a href='/web/terms'>
                <li>7. Basic Terms</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Web;
