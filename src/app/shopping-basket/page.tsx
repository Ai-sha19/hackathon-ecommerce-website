import Image from 'next/image';

export default function ShoppingBasket() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-24">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Your shopping cart</h1>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        {/* Product Items */}
        <div className="divide-y">
        <div className="grid grid-cols-3 md:grid-cols-5 text-sm font-medium text-gray-500 border-b pb-3">
          <p className="col-span-2">Product</p>
          <p className="text-center hidden md:block">Quantity</p>
          <p className="hidden md:block text-right">Total</p>
        </div>
          {/* Product 1 */}
          <div className="flex flex-col md:grid md:grid-cols-5 md:items-center py-4">
            <div className="col-span-2 flex items-center space-x-4">
              <Image
                src="/cart/ProductImage1.png"
                alt="Graystone vase"
                width={109}
                height={134}
                className="rounded-lg"
              />
              <div>
                <p className="font-medium text-gray-800">Graystone vase</p>
                <p className="text-sm text-gray-500">
                  A timeless ceramic vase with a tri-color grey glaze.
                </p>
                <p className="mt-2 font-medium text-gray-800">£85</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 md:mt-0 md:justify-center">
              {/* <button className="text-gray-500 hover:text-gray-700 px-2">-</button> */}
              <span className="mx-2">1</span>
              {/* <button className="text-gray-500 hover:text-gray-700 px-2">+</button> */}
            </div>
            <p className="hidden md:block text-right font-medium text-gray-800 md:col-span-1">
              £85
            </p>
          </div>

          {/* Product 2 */}
          
          <div className="flex flex-col md:grid md:grid-cols-5 md:items-center py-4">
            <div className="col-span-2 flex items-center space-x-4">
              <Image
                src="/cart/ProductImage2.png"
                alt="Basic white vase"
                width={109}
                height={134}
                className="rounded-lg"
              />
              <div>
                <p className="font-medium text-gray-800">Basic white vase</p>
                <p className="text-sm text-gray-500">
                  Beautiful and simple this is one for the classics.
                </p>
                <p className="mt-2 font-medium text-gray-800">£125</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 md:mt-0 md:justify-center">
              {/* <button className="text-gray-500 hover:text-gray-700 px-2">-</button> */}
              <span className="mx-2">1</span>
              {/* <button className="text-gray-500 hover:text-gray-700 px-2">+</button> */}
            </div>
            <p className="hidden md:block text-right font-medium text-gray-800 md:col-span-1">
              £125
            </p>
          </div>
        </div>

        {/* Subtotal and Checkout Button */}
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold">Subtotal: £210</p>
          <p className="text-gray-500 text-sm">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="mt-4 px-6 py-3 bg-[#2a254b] text-white shadow-md hover:bg-opacity-60 transition">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
}