import React, { useState } from 'react';
import { House, FileHtml } from 'phosphor-react';

const Html = () => {
  return (
    <>
      <div>
        <div className='m-1 text-sm breadcrumbs pl-6'>
          <ul>
            <li>
              <a className='inline-flex gap-2 items-center' href='/'>
                <House size={16} />
                <span>home</span>
              </a>
            </li>
            <li>
              <span className='inline-flex gap-2 items-center'>
                <FileHtml size={16} />
                <span>html</span>
              </span>
            </li>
          </ul>
        </div>
        html homd
      </div>
    </>
  );
};

export default Html;
