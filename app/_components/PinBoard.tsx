import Image from 'next/image';
import { useState, useEffect } from 'react';

import { cn } from '@/lib/utils';
import { getPins } from '@/api';
import { Pin } from '@/types/pintype';
import truncateText from '@/utils/truncateText';

import DownIcon from '@/public/svgs/down.svg';
import DownloadIcon from '@/public/svgs/download.svg';
import EllipsisIcon from '@/public/svgs/ellipsis.svg';
import Button from '@/components/common/Button/Button';

const PinBoard: React.FC = () => {
  const [pins, setPins] = useState<Pin[] | null>(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const pinDatas = await getPins();
        if (pinDatas && pinDatas.data) {
          setPins(pinDatas.data.pins);
        }
      } catch (error) {
        console.error('Failed to fetch pins:', error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="mx-auto lg:columns-6 md:columns-3 md:mx-3 sm:columns-2 sm:mx-3 gap-4 font-sans">
      {pins ? (
        pins.map((pin) => (
          <div
            key={pin.no}
            className="break-inside-avoid mb-4 cursor-pointer rounded-2xl overflow-hidden group relative"
          >
            <figure className="relative">
              <Image
                src={pin.img_url}
                alt={`Pin ${pin.no}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:filter group-hover:brightness-50"
              />
              <figcaption className="mt-2 text-gray-700 sr-only">
                Picture of a few dogs having a rest and sleeping.
              </figcaption>
            </figure>

            <Button
              color="none"
              size="md"
              className={cn(
                'absolute top-2 left-2 flex items-center gap-2 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity'
              )}
            >
              <p className="text-sm">
                {truncateText('내 마음속 위험한녀석', 6)}
              </p>
              <DownIcon className="w-3 h-3 fill-white" />
            </Button>
            <Button
              color="primary"
              size="md"
              className={cn(
                'absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity'
              )}
            >
              저장
            </Button>
            <div className="flex gap-2 absolute bottom-2 right-2 opacity-0 group-hover:opacity-100">
              <Button
                color="secondary-white"
                size="sm"
                className={cn('p-0 rounded-full w-6 h-6')}
              >
                <DownloadIcon />
              </Button>
              <Button
                color="secondary-white"
                size="sm"
                className={cn('p-0 rounded-full w-7 h-7')}
              >
                <EllipsisIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PinBoard;
