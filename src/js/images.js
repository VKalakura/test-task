const imagesCtx = require.context('../img', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imagesCtx.keys().forEach(imagesCtx);