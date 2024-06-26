import React, { useEffect, useState } from 'react'
import { Jewelry } from '../../../../models/Jewelry';
import { User } from '../../../../models/User';
import { Image } from '../../../../models/Image';
import { getIconImageByJewelryId, getImagesByJewelryId } from '../../../../api/ImageApi';
import { StateJewelry } from './StateJewelry';
import { getCurrentAuctionByJewelryId } from '../../../../api/AuctionAPI';
import { Auction } from '../../../../models/Auction';
import { MyJewelryModal } from '../../Modal/Modal';
type MyJewelrySingleProps = {
  jewelry: Jewelry | undefined;
  user: User | null,
}
const MyJewelrySingle: React.FC<MyJewelrySingleProps> = ({ jewelry, user }) => {
  const [image, setImage] = useState<Image | null>(null)
  const [images, setImages] = useState<Image[]>([])
  const [auction, setAuction] = useState<Auction | null>(null)
  const jewelryId = jewelry?.id ? jewelry.id : 1
  useEffect(() => {
    getIconImageByJewelryId(jewelryId)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        console.error(error.message);
      });

    getImagesByJewelryId(jewelryId)
      .then((response) => {
        setImages(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
    getCurrentAuctionByJewelryId(jewelryId)
      .then((response) => {
        setAuction(response);
      })
      .catch((error) => {
        console.error(error.message);
      });

  }, [])

  return (
    <>
      <tr>
        <td>
          {jewelry?.id}
        </td>
        <td className="text-start">
          {jewelry?.name}
        </td>
        <td><img style={{ width: '60px', height: '60px' }} src={image?.data} alt='jewelry' /></td>

        <td className='fw-semibold text-success'>
          <StateJewelry state={jewelry?.state ? jewelry?.state : 'HIDDEN'} />
        </td>
        <td >
          <MyJewelryModal images={images} user={user} jewelry={jewelry} auction={auction} />
        </td>
      </tr>
    </>
  )
}

export default MyJewelrySingle
