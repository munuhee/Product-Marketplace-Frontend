import Image from 'next/image';

const CARD_ASPECT_RATIO = 4 / 3; // Define the aspect ratio of your card

export default function ProductCard() {
  const image ="https://res.cloudinary.com/murste/image/upload/v1619359682/ecom_xrzgmm.jpg"

  // Calculate the width and height of the image based on the aspect ratio of the card
  const cardWidth = 25; // Set the maximum width of your card
  const imageWidth = cardWidth;
  const imageHeight = imageWidth / CARD_ASPECT_RATIO;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" style={{ maxWidth: `${cardWidth}rem` }}>
      <div className="relative w-full h-0 pb-2/3">
        <Image src={image} alt="product image" width={imageWidth} height={imageHeight} layout="responsive" objectFit="cover" className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">hd image</h2>
        <p className="text-gray-500 text-sm mb-2">lorem ispum del ha huirb</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-bold text-xl">$3.50</p>
          <button className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-secondary focus:bg-secondary">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
