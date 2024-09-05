import React from "react";

const Main = () => {
  return (
    <>
      <div
        className="bg-black items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <h2
            className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Made by programmer for programmers, we will never receive money from states</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our articles are completely independent, we have no employees, if you are qualified, create an account and write an article.
          </p>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <img  height='60px' width='60px' src='https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/icons/icons8-linux-96.png?token=GHSAT0AAAAAACT3CJFPRAYJQTMFXK7JJRLMZW2ISEA'/>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">We love Linux!</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Free-Softwares, Analysis, Distro test and security for this</p>
          </div>
          <div>
            <img height='60px' width='60px' src='https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/icons/icons8-bitcoin-128.png?token=GHSAT0AAAAAACT3CJFPYZKVOTRLLT6Z2N3KZW2ISWQ'/>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">Bitcoin Supremacy</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">We support Bitcoin and any other form
              to decentralization the power
            </p>
          </div>
          <div>
            <img height='60px' width='60px' src='https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/icons/icons8-help-100.png?token=GHSAT0AAAAAACT3CJFP7QCAMNPLEMGPUD3KZW2ITNA'/>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">We Support our community</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Support new projects, community and censored people in any place
            </p>
          </div>
          <div>
            <img height='60px' width='60px' src='https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/icons/icons8-donation-64.png?token=GHSAT0AAAAAACT3CJFOTVHEBKUJIQPEQNBMZW2IS7Q'/>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">Finance Our Information War and
              Decentralization</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Bitcoin Wallet: 121212</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;