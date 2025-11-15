import React from 'react'

export default function Navbar() {
  return (
    <div className="main">
      <div className="left">
        <img src="/images/logo1.png" alt="" />
      </div>
      <div className="mid">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div className="right">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#646262" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><path fill="#646262" d="M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0m-2 0a5 5 0 1 0-10 0a5 5 0 0 0 10 0M7.5 18A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5zM6 21.5A1.5 1.5 0 0 1 7.5 20h17a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.473-.94 2.949-2.759 4.106C21.434 27.256 18.877 28 16 28s-5.434-.744-7.241-1.894C6.939 24.95 6 23.472 6 22z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#646262" d="M2.316 3.25a.75.75 0 1 0 0 1.5h1.181a.75.75 0 0 1 .743.646l1.254 8.917a2.25 2.25 0 0 0 2.228 1.937h10.344a.75.75 0 0 0 0-1.5H7.722a.75.75 0 0 1-.743-.646l-.12-.853h10.852a2.25 2.25 0 0 0 2.15-1.583l1.921-6.188a.75.75 0 0 0-.716-.972H5.516A2.25 2.25 0 0 0 3.498 3.25zm3.525 2.758h14.207l-1.62 5.215a.75.75 0 0 1-.717.527H6.648zM7.784 17.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.786 1.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0"/></svg>

      </div>
    </div>
  )
}
