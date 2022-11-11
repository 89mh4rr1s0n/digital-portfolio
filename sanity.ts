import { createClient } from 'next-sanity'
import createImageUrlBuider from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: 'h01gsdth',
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV === 'production'
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
createImageUrlBuider(config).image(source);