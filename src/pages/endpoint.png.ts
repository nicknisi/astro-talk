import satori from 'satori';
import sharp from 'sharp';
import type { APIRoute } from 'astro';
import { type ReactNode } from 'react';
import markedSafeImage from '@/assets/marked-safe.png?buffer';
import dmSansBoldData from '../../public/DMSans-Bold.ttf?buffer';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const params = url.searchParams;
  const title = params.get('title') ?? 'Next.js';
  console.log('title', title, params, url);

  const markedSafe = `data:image/png;base64,${Buffer.from(markedSafeImage).toString('base64')}`;

  let background: Record<string, unknown> = {
    backgroundColor: '#ffffff',
  };

  const width = 618;
  const height = 499;

  const node: ReactNode = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            children: [
              {
                type: 'div',
                props: {
                  children: '',
                  style: {
                    backgroundImage: `url('${markedSafe}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#ffffff',
                    backgroundSize: '100% 100%',
                    width: `${width}px`,
                    height: `${height}px`,
                    position: 'relative',
                  },
                },
              },
              {
                type: 'div',
                props: {
                  children: [
                    {
                      type: 'h1',
                      props: {
                        children: title,
                        style: {
                          fontFamily: 'DM Sans Bold',
                          position: 'absolute',
                          fontSize: 60,
                          color: '#000000',
                        },
                      },
                    },
                  ],
                  style: {
                    display: 'flex',
                    position: 'absolute',
                    top: '50%',
                    left: '35%',
                    textAlign: 'center',
                  },
                },
              },
            ],
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              flexGrow: 1,
            },
          },
        },
      ],
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        ...background,
      },
    },
  } as ReactNode;

  const svg = await satori(node, {
    width,
    height,
    fonts: [
      {
        data: Buffer.from(dmSansBoldData),
        name: 'DM Sans Bold',
        style: 'normal',
      },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
