#!/usr/bin/env zx

import {createApi} from 'unsplash-js';

const unsplash = createApi({
    // Either pass the access_key here or use process.env.UNSPLASH_ACCESS_KEY
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    fetch: fetch,
});

try {


    const interests = ['rain', 'nature', 'fog', 'car', 'wallpaper'] // Add query here

    const unsplashImage = await unsplash.photos.getRandom({
        query: interests[Math.floor(Math.random() * interests.length)],
        count: 1,
        orientation: 'landscape'
    })

    const imageURL = unsplashImage.response[0].urls.full;
    const response = await fetch(imageURL);
    const buffer = await response.buffer();

    // Writing image to local file system. using same name, so it will replaces the old image.
    await fs.outputFile(`./wallpaper.jpg`, buffer);

    const currentPath = (await $`pwd`).stdout.replace(/[^a-zA-Z\/\-]/g, "");

    await $`gsettings set org.gnome.desktop.background picture-uri ${currentPath}/wallpaper.jpg`
    await $`exit 0`
} catch (error) {
    console.log(error)
    await $`exit 1`
}

