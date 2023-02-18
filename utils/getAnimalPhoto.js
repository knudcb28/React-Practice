import { createApi } from "unsplash-js";

export const getAnimalPhoto = async () => {
    const unsplash = createApi({
        accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY
      });

    const photos = await unsplash.photos.getRandom({
      collectionIds: [''],
      topicIds: [''],
      featured: true,
      username: '',
      query: 'animals',
      count: 3,
    })
    
    const unsplashPhotoUrls = photos?.response
    console.log(unsplashPhotoUrls)
    return unsplashPhotoUrls
  }
